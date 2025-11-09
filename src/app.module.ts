import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { VentasModule } from './ventas/ventas.module';
import { ProductoModule } from './producto/producto.module';
import { FacturacionModule } from './facturacion/facturacion.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { CategoriaModule } from './categoria/categoria.module';
import { VentaProductoModule } from './venta_producto/venta_producto.module';

/**
 * Root module of the application.
 * Aggregates all  feature modules (user, sales, product, billing, etc.) into a single application.
 */
@Module({
  imports: [UsuarioModule, VentasModule, ProductoModule, FacturacionModule, ProveedorModule, CategoriaModule, VentaProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}