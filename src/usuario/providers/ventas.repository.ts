import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ventas } from 'src/ventas/ventas.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Facturacion } from 'src/facturacion/facturacion.entity';
import { CreateVentaDto } from 'src/ventas/dto/create-venta.dto';
import { UpdateVentaDto } from 'src/ventas/dto/update-venta.dto';

/**
 * Custom repository for sale-related database operations.
 * Automatically creates an associated invoice when a sale is created.
 */
@Injectable()
export class VentasRepository {
  
  /**
   * Initializes the repository with dependencies for Ventas, Usuario, and Facturacion entities.
   * @param ventasRepo - Repository for sale operations.
   * @param usuarioRepo - Repository to fetch user data for sale association.
   * @param facturacionRepo - Repository to automatically generate invoices after sales.
   */
  constructor(
    //inyección de dependencias
    // 1. ventasRepo: Repositorio principal para la entidad Ventas
    // 2. usuarioRepo: Repositorio para buscar el Usuario asociado a la venta
    // 3. facturacionRepo: Repositorio para crear automáticamente la Factura después de la venta
    @InjectRepository(Ventas)
    private ventasRepo: Repository<Ventas>,

    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,

    @InjectRepository(Facturacion)
    private facturacionRepo: Repository<Facturacion>,
  ) {}

  /**
   * Creates a new sale and automatically generates an associated invoice.
   * @param data - Data Transfer Object containing sale details, including user ID and total.
   * @returns The created sale with its associated user, invoice, and products.
   * @throws NotFoundException if the user does not exist.
   */
// Crea una nueva Venta y automáticamente crea la Factura asociada en la misma
  async createVenta(data: CreateVentaDto) {
    // Buscar usuario
    const usuario = await this.usuarioRepo.findOne({
      where: { id_usuario: data.id_usuario },
    });
    // Si no existe, lanzar error
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    // Crear la venta
    const nuevaVenta = this.ventasRepo.create({
      total: data.total,
      // Asignar el usuario
      usuario,
    });
    // Guardar la venta
    const ventaGuardada = await this.ventasRepo.save(nuevaVenta);

    // Crear la factura asociada automáticamente
    const nuevaFactura = this.facturacionRepo.create({
      total: ventaGuardada.total,
      fecha_emision: new Date(), // Fecha de emisión de la factura
      venta: ventaGuardada,
      usuario,
    });
// Guardar la factura
    await this.facturacionRepo.save(nuevaFactura);

    // Retornar la venta con su factura y usuario
    return await this.ventasRepo.findOne({
      where: { id_venta: ventaGuardada.id_venta },
      relations: ['usuario', 'facturacion', 'ventaProductos'],
    });
  }

  /**
   * Retrieves all sales with associated user, invoice, and product details.
   * @returns An array of all sales including related entities.
   */

// Listar todas las ventas
  async findAll() {
    return await this.ventasRepo.find({
      // Carga las relaciones para mostrar quién compró, qué facturó y qué productos incluyó
      relations: ['usuario', 'facturacion', 'ventaProductos'],
    });
  }

   /**
   * Finds a single sale by its ID.
   * @param id - Unique identifier of the sale.
   * @returns The sale object with user, invoice, and product details.
   */
// Obtener una venta por ID
  async findOne(id: number) {
    return await this.ventasRepo.findOne({
      where: { id_venta: id },
      relations: ['usuario', 'facturacion', 'ventaProductos'],
    });
  }

  /**
   * Updates an existing sale by ID.
   * @param id - ID of the sale to update.
   * @param data - Partial sale data to update.
   * @returns The updated sale object with related entities.
   */

// Actualizar una venta
  async updateVenta(id: number, data: UpdateVentaDto) {
    await this.ventasRepo.update(id, data);
    return this.findOne(id);
  }
  
/**
   * Deletes a sale by its ID.
   * @param id - ID of the sale to delete.
   * @returns Result of the delete operation.
   */
// Eliminar una venta
  async deleteVenta(id: number) {
    return await this.ventasRepo.delete(id);
  }
}