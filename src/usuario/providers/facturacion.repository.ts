// abstrae utiliza la base de datos
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // decorador que inyecta repositorios genericos de typeORM
import { Repository } from 'typeorm';
import { Facturacion } from 'src/facturacion/facturacion.entity';

/**
 * Custom repository for invoice-related database operations.
 * Provides specialized methods beyond the basic TypeORM repository.
 */
@Injectable()
export class FacturacionRepository {

  /**
   * Initializes the repository the TypeORM repository for the Facturacion entity.
   * @param facturacionRepo - TypeORM repository for invoice database operations.
   */
  constructor( // inyecta las dependencias permitiendo la comunicación con la base de datos
    @InjectRepository(Facturacion)
    private readonly facturacionRepo: Repository<Facturacion>,
  ) {}

  /**
   * Finds an invoice by the associated sale ID.
   * @param id_venta - ID of the sale linked to the invoice.
   * @returns The invoice object with relatec sale and user data, or null if not found.
   */
  // Buscar factura por id_venta 
  async findByVentaId(id_venta: number): Promise<Facturacion | null> {
    return await this.facturacionRepo.findOne({
    // Consulta a través de la relación busca la factura donde la relación 'venta' tenga el id_venta especificado
      where: { venta: { id_venta } },
      relations: ['venta', 'usuario'], // carga relaciones
    });
  }

  /**
   * Creates a new invoice only if no invoice exists for the given sale.
   * Prevents deuplicate invoices for the same sale.
   * @param data - Partial invoice data including the associated sale.
   * @returns The existing invoice if found, or the newly created invoice.
   * @throws Error if sale information is missing.
   */
  // Crear factura solo si no existe una asociada
  async createFacturacion(data: Partial<Facturacion>): Promise<Facturacion> {
    //  Validar que la venta exista
    if (!data.venta || !data.venta.id_venta) {
      throw new Error('No se puede crear la factura, falta la información de la venta.');
    }

    // Verificar si ya existe factura para esa venta
    const facturaExistente = await this.findByVentaId(data.venta.id_venta);
    if (facturaExistente) {
      return facturaExistente; // Retorna la existente y evita error de duplicado
    }

    // Crear nueva factura
    const nuevaFactura = this.facturacionRepo.create(data);
    return await this.facturacionRepo.save(nuevaFactura); //.save(nuevaFactura): Guarda la nueva entidad en la base de datos
  }

  /**
   * Retrieves all invoices with their associated  sale and user data.
   * @returns An array of all invoices, including related entities.
   */
  // Métodos adicionales
  async listarFacturas() { // listar todas las facturas
    return await this.facturacionRepo.find({ relations: ['venta', 'usuario'] });
  }
 
  /**
   * Retrieves a single invoice by its ID.
   * @param id - Unique identifier of the invoice.
   * @returns The invoice object with related sale  and user data
   */
// obtener factura por id
  async obtenerFactura(id: number) {
    return await this.facturacionRepo.findOne({
      where: { id_facturacion: id },
      relations: ['venta', 'usuario'],
    });
  }
 
  /**
   * Deletes an invoice by its ID.
   * @param id - ID of the invoice to delete.
   * @returns Result of the delete operation.
   */
// eliminar factura por id
  async eliminarFactura(id: number) {
    return await this.facturacionRepo.delete(id);
  }

  /**
   * Generic method to find one invoice using custom TypeORM find options.
   * @param options - TypeORM  find options (e.g., where, relations, etc.).
   * @returns The invoice object or undefined.
   */
  async findOne(options: any) {
    return await this.facturacionRepo.findOne(options);
  }
}