import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { VentasModule } from './ventas/ventas.module';
import { ProductoModule } from './producto/producto.module';
import { FacturacionModule } from './facturacion/facturacion.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { CategoriaModule } from './categoria/categoria.module';
import { VentaProductoModule } from './venta_producto/venta_producto.module';

@Module({
  imports: [
    // 🔹 Configuración global de la base de datos PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // tu usuario de pgAdmin
      password: '54321',    // tu contraseña real
      database: 'ferreteria', // nombre de tu base de datos
      autoLoadEntities: true, // carga automáticamente todas las entidades
      synchronize: true,      // ⚠️ solo usar en desarrollo
    }),

    // 📦 Módulos del proyecto
    UsuarioModule,
    VentasModule,
    ProductoModule,
    FacturacionModule,
    ProveedorModule,
    CategoriaModule,
    VentaProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
