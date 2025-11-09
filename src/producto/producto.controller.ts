import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
/**
 * Controller for managing products.
 * Handles CRUD operations : create, read, update, and delete products.
 */

@Controller('productos')
export class ProductoController {
  /**
   * Initializes the controller with the ProductoService dependency.
   * @param productoService - Service that handles business logic for products.
   */
  constructor(private readonly productoService: ProductoService) {}

  /**
   * Retrieves all products from the  system.
   * @returns An array of all existing products.
   */
  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  /**
   * Retrieves a single product by its ID.
   * @param id - Unique identifier of the product.
   * @returns The product object if found.
   * @throws NotFoundException if the product does not exist.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // 👆 convierte el id automáticamente a número
    return this.productoService.findOne(id);
  }

  /**
   * Createa a new product.
   * @param data - Data Transfer Object containing product details (name, description, price, etc.).
   * @returns The created product object.
   */
  @Post()
  create(@Body() data: CreateProductoDto) {
    return this.productoService.create(data);
  }

/**
 * Updates an existing product partially.
 * @param id - ID of the  product to ipdate.
 * @param data - Partial data to update (any field from the  product).
 * @returns The updated product object.
 * @throws NotFoundException if the prouct does not exist.
 */
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateProductoDto) {
    return this.productoService.update(id, data);
  }

  /**
   * Deletes a product by its ID.
   * @param id - ID of the product to delete.
   * @returns The deleted product object.
   * @throws NotFoundException if the product  does not exist.
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.remove(id);
  }
}