import { Test, TestingModule } from '@nestjs/testing';
import { ProductoController } from '../producto/producto.controller';
import { ProductoService } from '../producto/producto.service';


describe('ProductoController', () => {
  let controller: ProductoController;
  let service: ProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoController],
      providers: [
        {
          provide: ProductoService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductoController>(ProductoController);
    service = module.get<ProductoService>(ProductoService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debería retornar lista vacía', async () => {
    const result = await controller.findAll?.();
    expect(result).toEqual([]);
  });
});
