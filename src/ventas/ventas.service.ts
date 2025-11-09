import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ventas } from './ventas.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Facturacion } from 'src/facturacion/facturacion.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';

/**
 * Service that handles business logic for sales management.
 * Automatically  creates invoices  when a sale is created.
 */
@Injectable()
export class VentasService {

  /**
   * Initializes the service with repositories for Ventas, Usuario, and Facturacion entities.
   * @param ventaRepo -Repository for sale operations.
   * @param usuarioRepo -Repository for validate user existence.
   * @param facturacionRepo -Repository to create associated invoices.
   */
  constructor(
    @InjectRepository(Ventas)
    private readonly ventaRepo: Repository<Ventas>,

    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,

    @InjectRepository(Facturacion)
    private readonly facturacionRepo: Repository<Facturacion>,
  ) {}

  /**
   * Creates a new sale and automatically  generates an associated invoice.
   * @param data - Object containing total amount and user ID.
   * @returns The created sale with user and invoice details.
   * @throws Error if user does not exist.
   */
  // ✅ Crear una venta y su facturación automáticamente
  async createVenta(data: { total: number; id_usuario: number }) {
    // 1️⃣ Buscar el usuario
    const usuario = await this.usuarioRepo.findOne({
      where: { id_usuario: data.id_usuario },
    });
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    // 2️⃣ Crear la venta
    const nuevaVenta = this.ventaRepo.create({
      total: data.total,
      usuario: usuario,
    });
    const ventaGuardada = await this.ventaRepo.save(nuevaVenta);

    // 3️⃣ Crear automáticamente la facturación asociada
    const nuevaFactura = this.facturacionRepo.create({
      venta: ventaGuardada,
      usuario: usuario,
      fecha_emision: new Date(),
      total: ventaGuardada.total,
    });
    await this.facturacionRepo.save(nuevaFactura);

    // 4️⃣ Volver a consultar la venta, pero incluyendo la relación
    const ventaConFactura = await this.ventaRepo.findOne({
      where: { id_venta: ventaGuardada.id_venta },
      relations: ['usuario', 'facturacion'],
    });

    return ventaConFactura;
  }

  /**
   * Retrieves all sales with associated user and invoices data.
   * @returns An array of  all sales including related entities.
   */
  // ✅ Listar todas las ventas con su facturación y usuario
  async listarVentas() {
    return await this.ventaRepo.find({
      relations: ['usuario', 'facturacion'],
    });
  }

  /**
   * Retrieves a single sale by its ID
   * @param id -Unique  identifier of the sale.
   * @returns The sale object with user and invoice details.
   */
  // ✅ Obtener una venta específica
  async getVenta(id: number) {
    return await this.ventaRepo.findOne({
      where: { id_venta: id },
      relations: ['usuario', 'facturacion'],
    });
  }

/**
   * Updates an existing sale partially by ID.
   * @param id - ID of the sale to update.
   * @param body - Partial sale data (e.g., total).
   * @returns The updated sale object.
   * @throws NotFoundException if the sale does not exist.
   */
  async updateVenta(id: number, body: UpdateVentaDto) {
    const venta = await this.ventaRepo.findOne({ where: { id_venta: id } });
    if (!venta) {
      throw new NotFoundException(`Sale with ID ${id} not found`);
    }

    Object.assign(venta, body);
    return await this.ventaRepo.save(venta);
  }
  /**
   * Deletes a sales by its ID.
   * @param id - ID of sale to delete.
   * @returns Result of the delete operation.
   */
  // ✅ Eliminar una venta
  async deleteVenta(id: number) {
    return await this.ventaRepo.delete(id);
  }
}