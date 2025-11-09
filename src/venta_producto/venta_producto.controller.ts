import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { VentaProductoService } from './venta_producto.service';

/**
 * Controller for managing sale-product relationship.
 * Handles adding, listing, and removing products from sales.
 */
@Controller('venta-producto')
export class VentaProductoController {

  /**
   * Initializes the controller with the VentaProductoService dependency.
   * @param ventaProductoService - Service that handles sale-product business logic.
   */
  constructor(private readonly ventaProductoService: VentaProductoService) {}

  /**
   * Adds a product to an existing sale.
   * @param body - Object containing sale ID, Product ID, and  quantily.
   * @returns The created sale-product association record.
   */
  //  Agregar producto a una venta
  @Post()
  async agregarProducto(
    @Body() body: { idVenta: number; idProducto: number; cantidad: number },
  ) {
    return this.ventaProductoService.agregarProductoAVenta(
      body.idVenta,
      body.idProducto,
      body.cantidad,
    );
  }

  /**
   * Retrieves all products associated with a specific sale.
   * @param idVenta - ID of the sale to query.
   * @returns An array of sale-product records with product details.
   */
  //  Listar productos de una venta
  @Get(':idVenta')
  async listar(@Param('idVenta') idVenta: number) {
    return this.ventaProductoService.listarPorVenta(idVenta);
  }

  /**
   * Removes a product from a sales by its association ID.
   * @param id - Unique identifier of the sale-product record.
   * @returns Result of the detetion operation.
   */
  //Eliminar producto de una venta
  @Delete(':id')
  async eliminar(@Param('id') id: number) {
    return this.ventaProductoService.eliminar(id);
  }
}