import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.entity';

/**
 * Controller for managing suppliers (proveedores).
 * Handles CRUD operations: create, read, update, and  delete suppliers.
 */
@Controller('proveedores')
export class ProveedorController {
  /**
   * Initializes the controller with  the ProveedorService dependency.
   * @param proveedorService -Service that handles business logic for suppliers.
   */
  constructor(private readonly proveedorService: ProveedorService) {}

  /**
   * Retrieves all suppliers from the system.
   * @returns An array of all existing suppliers.
   */
  @Get()
  findAll() {
    return this.proveedorService.findAll();
  }

  /**
   * Retrieves a single supplier by its ID.
   * @param id - Unique identifier of the supplier.
   * @returns  The supplier object if found.
   * @throws NotFoundException if the supplier does not exist. 
   */
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.proveedorService.findOne(id);
  }

  /**
   * Creates a new supplier.
   * @param proveedor - Supplier objetc containing all required data.
   * @returns The Created supplier object.
   */
  @Post()
  create(@Body() proveedor: Proveedor) {
    return this.proveedorService.create(proveedor);
  }

  /**
   * Updates an existing supplier.
   * @param id - ID of the supplier to update.
   * @param proveedor - Updated supplier data.
   * @returns The Updated supplier object.
   * @throws NotFoundException if the supplier does not exist.
   */
  @Put(':id')
  update(@Param('id') id: number, @Body() proveedor: Proveedor) {
    return this.proveedorService.update(id, proveedor);
  }

  /**
   * Deletes a supplier by  its ID.
   * @param id - ID of the supplier to delete.
   * @returns  A confirmation of deletion.
   * @throws NotFoundException if the supplier does not exist.
   */
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.proveedorService.remove(id);
  }
}