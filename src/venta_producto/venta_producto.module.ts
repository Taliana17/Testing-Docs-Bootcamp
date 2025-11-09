import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaProducto } from './venta_producto.entity';
import { VentaProductoService } from './venta_producto.service';
import { VentaProductoController } from './venta_producto.controller';
import { Ventas } from 'src/ventas/ventas.entity';
import { Producto } from 'src/producto/producto.entity';

/**
 * Module that groups all components related to sale-product relationships.
 * Manages the junction entity (VentaProducto) and its interactions with sales and products.
 */
@Module({
  imports: [TypeOrmModule.forFeature([VentaProducto, Ventas, Producto])],
  controllers: [VentaProductoController],
  providers: [VentaProductoService],
  exports: [VentaProductoService],
})
export class VentaProductoModule {}