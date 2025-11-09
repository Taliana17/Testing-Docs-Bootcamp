import { Test, TestingModule } from '@nestjs/testing';
import { VentaProductoController } from '../venta_producto/venta_producto.controller';
import { VentaProductoService } from '../venta_producto/venta_producto.service';

describe('VentaProductoController', () => {
  let controller: VentaProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentaProductoController],
      providers: [
        {
          provide: VentaProductoService,
          useValue: { findAll: jest.fn().mockResolvedValue([]) },
        },
      ],
    }).compile();

    controller = module.get<VentaProductoController>(VentaProductoController);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});
