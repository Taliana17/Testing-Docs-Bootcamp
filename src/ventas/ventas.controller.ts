// src/ventas/ventas.controller.ts
import { Controller, Post, Get, Delete, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { Ventas } from './ventas.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { CreateVentaDto } from './dto/create-venta.dto';

/**
 * Controller for managing sales (ventas).
 * Handles creation, listing, retrieval, update, and deletion of sales.
 */
@Controller('ventas')
export class VentasController {
  /**
   * Initializes the controller with the VentasService dependency.
   * @param ventasService - Service that handles sales business logic.
   */
  constructor(private readonly ventasService: VentasService) {}

  /**
   * Creates a new sale.
   * @param datos - Data Transfer Object containing sale details (user ID, total, optional date).
   * @returns The created sale object with assicuated user and invoice.
   */
  @Post('crear')
  async crear(@Body() datos: CreateVentaDto) {
    return this.ventasService.createVenta(datos);
  }

  /**
   * Retrieves a list of  all sales.
   * @returns An array of all sales, including associated user, invoices, and products.
   */
 @Get('listar')
async listar() {
  // Llamamos al método que devuelve todas las ventas
  return this.ventasService.listarVentas();; // pasar cualquier valor temporal
}

/**
 * Retrieves a single sale by its ID.
 * @param id -Unique identifier of the sale.
 * @returns The sale Object with full details (user, invoice, products).
 */
  @Get(':id')
  async obtener(@Param('id', ParseIntPipe) id: number) {
    return this.ventasService.getVenta(id);
  }

  /**
   * Updates an existing sale partially by ID.
   * @param id - ID of the sale to update.
   * @param body -Partial sale data (all fields optional).
   * @returns The updated sale object.
   */
  @Patch(':id')
  async actualizar(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateVentaDto) {
    return this.ventasService.updateVenta(id, body);
  }

  /**
   * Deletes  a sale by its ID.
   * @param id -ID of the sale to delete.
   * @returns Result of the delete operation.
   */
  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.ventasService.deleteVenta(id); // ✅ corregido
  }
}