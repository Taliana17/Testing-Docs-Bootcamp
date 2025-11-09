import {
  Controller, Get, Post, Body, Param, Patch, Delete,
  ParseIntPipe, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { FacturacionService } from './facturacion.service';
import { CreateFacturacionDto } from './dto/create-facturacion.dto';
import { UpdateFacturacionDto } from './dto/update-facturacion.dto';

/**
 *Controller for managing invoices (facturación).
 *Handles CRUD operations : create, read, update, and delete invoices.
 */
// El decorador @Controller define la ruta base para este controlador
// En este caso, todas las rutas empezarán con /facturacion
@Controller('facturacion')
export class FacturacionController {
/**
 * Initializes the controller with the FacturacionService dependency.
 * @param service - Service that handles business logic for invoices.
 */

// Inyectamos el servicio de facturación para usar su lógica
  constructor(private readonly service: FacturacionService) {}

/**
 * Create a new invoice.
 * @param dto - Data Transfer Object containing invoice details (number, type, payment method, total, etc.).
 * @returns The created invoice object.
 */
  // Crear una nueva factura
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() dto: CreateFacturacionDto) {
    return this.service.create(dto);
  }
  
  /**
   * Retrieves all invoices from the system.
   * @returns An array of all existing invoices.
   */
  // Obtener todas las facturas
  @Get()
  findAll() {
    return this.service.findAll();
  }

  /**
   * Retrieves a single invoices by its ID.
   * @param id - Unique identifier or the invoice.
   * @returns The invoice object if found.
   * @throws NotFoundException if the invoice does not exist.
   */
  // Obtener una factura específica por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
 
  /**
   * Updates an existing invoice partially.
   * @param id - ID of the invoice  to update.
   * @param dto - Partial data to update (any field from the invoice).
   * @returns The updated invoice object.
   * @throws NotFoundException if the invoice does not exist.
   */
  // Actualizar una factura existente
  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateFacturacionDto) {
    return this.service.update(id, dto);
  }

/**
 * Deletes an invoice by its ID.
 * @param id - ID of the invoice to delete.
 * @returns The deleted invoice object.
 * @throws NotFoundException if the invoice does not exist.
 */
  // Eliminar una factura
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}