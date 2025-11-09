// Importamos decoradores y clases necesarias de NestJS y TypeORM
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Importamos la entidad y los DTOs (objetos para recibir datos)
import { Facturacion } from './facturacion.entity';
import { CreateFacturacionDto } from './dto/create-facturacion.dto';
import { UpdateFacturacionDto } from './dto/update-facturacion.dto';

/**
 * Service that handles business logic for invoice management.
 * Provides CRUD operations : create, read, update, and delete invoice.
 */
//Este decorador indica que esta clase puede ser inyectada como un servicio
@Injectable()
export class FacturacionService {

  /**
   * Initializes the service with the facturacion repository for database operations.
   * @param repo - TypeORM repository for the Facturacion entity.
   */
  // Se inyecta el repositorio de la entidad facturación para interactuar con la base de datos
  constructor(
    @InjectRepository(Facturacion)
    private readonly repo: Repository<Facturacion>,
  ) {}

  /**
   * Creates a new invoice in the database.
   * @param dto - Data transfer Object containing invoice details.
   * @returns The saved invoice  objetc, including associated sale data.
   */

  // Crear una nueva factura
  create(dto: CreateFacturacionDto) {
    const nuevaFactura = this.repo.create(dto);
    return this.repo.save(nuevaFactura);
  }

  /**
   * Retrieves all invoices from the database.
   * @returns An array of all invoices, each including its associated sales.
   */  
  // Obtener todas las facturas
  findAll() {
    return this.repo.find({ relations: ['venta'] }); // Incluye los datos de la venta asociada
  }

  /**
   * Finds a single invoice by its ID.
   * @param id - Unique identifier of the invoice.
   * @returns The invoices object with its associated sale.
   * @throws NotFoundException if no invoice exists with the given ID.
   */
  // Buscar una factura por ID
  async findOne(id: number) {
    const factura = await this.repo.findOne({ where: { id_facturacion: id }, relations: ['venta'] });
    if (!factura) throw new NotFoundException('Factura no encontrada');
    return factura;
  }

  /**
   * Updates an existing invoice partially.
   * @param id - ID of the invoice ti update.
   * @param dto Partial data to update (any field from the invoice).
   * @returns The updated invoices object.
   * @throws NotFoundException if the invoice does not exist.
   */
  // Actualizar una factura existente
  async update(id: number, dto: UpdateFacturacionDto) {
    const factura = await this.findOne(id);
    this.repo.merge(factura, dto);
    return this.repo.save(factura);
  }

  /**
   * Delete an invoice by its ID.
   * @param id -ID of the invoice to delete.
   * @returns The deleted invoice object.
   * @throws NotFoundException if the invoice does not exist.
   */
  // Eliminar una factura
  async remove(id: number) {
    const factura = await this.findOne(id);
    return this.repo.remove(factura);
  }
}