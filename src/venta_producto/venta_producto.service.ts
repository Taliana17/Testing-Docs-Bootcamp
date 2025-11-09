import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VentaProducto } from './venta_producto.entity';
import { Ventas } from 'src/ventas/ventas.entity';
import { Producto } from 'src/producto/producto.entity';

/**
 * Service that handles business logic for  sale-Product relations.
 * Manages stock updates, subtotal calculations, and ensures data consistency.
 */
@Injectable()
export class VentaProductoService {

  /**
   * Initializes the service with repositories for VentaProducto, Ventas, and Producto entities.
   * @param ventaProductoRepo -Repository for sale-product junction records.
   * @param ventaRepo -Repository  to validate existing sales.
   * @param productoRepo -Repository to validate products and update stock.
   */
  constructor(
    @InjectRepository(VentaProducto)
    private readonly ventaProductoRepo: Repository<VentaProducto>,

    @InjectRepository(Ventas)
    private readonly ventaRepo: Repository<Ventas>,

    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  /**
   *Adds a product to an existing sale and updates product stock.
   * Calculates subtotal based on current product price and quantity.
   * @param idVenta - ID of the existing sale.
   * @param idProducto - ID of the product to  add.
   * @param cantidad -Quantity of the product ti add.
   * @returns The created sale-product record.
   * @throws  NotFoundException  if the sale, product, or sufficient stock is not available.
   */
  // 🔹 Crear un nuevo registro en venta_producto
  async agregarProductoAVenta(idVenta: number, idProducto: number, cantidad: number) {
    const venta = await this.ventaRepo.findOne({ where: { id_venta: idVenta } });
    if (!venta) throw new NotFoundException('Venta no encontrada');

    const producto = await this.productoRepo.findOne({ where: { id_producto: idProducto } });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    if (cantidad > producto.stock) {
      throw new NotFoundException(`Stock insuficiente. Disponible: ${producto.stock}`);
    }

    // Calcular subtotal
    const subtotal = Number(producto.precio) * cantidad;

    // Crear el registro
    const ventaProducto = this.ventaProductoRepo.create({
      cantidad,
      precio_unitario: producto.precio,
      subtotal,
      venta,
      producto,
    });

    // Guardar y actualizar stock
    const nuevoRegistro = await this.ventaProductoRepo.save(ventaProducto);
    producto.stock -= cantidad;
    await this.productoRepo.save(producto);

    return nuevoRegistro;
  }

  /**
   * Retrieves all products associated with a specific sale.
   * @param idVenta  - ID of the sale to query.
   * @returns An array of sale-product records with full product and sale details.
   */
  // 🔹 Listar productos por venta
  async listarPorVenta(idVenta: number) {
    return await this.ventaProductoRepo.find({
      where: { venta: { id_venta: idVenta } },
      relations: ['producto', 'venta'],
    });
  }

  /**
   * Removes a product from  sale by its associationID.
   * @param id - Unique identifier of the sale-product record.
   * @returns Result of the delete operation.
   * @throws NotFoundException if the record does not exist.
   */
  // 🔹 Eliminar un producto de una venta
  async eliminar(id: number) {
    const existe = await this.ventaProductoRepo.findOne({ where: { id_venta_producto: id } });
    if (!existe) throw new NotFoundException('Registro no encontrado');
    return await this.ventaProductoRepo.delete(id);
  }
}