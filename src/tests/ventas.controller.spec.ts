import { Test, TestingModule } from '@nestjs/testing';
import { VentasController } from '../ventas/ventas.controller';
import { VentasService } from '../ventas/ventas.service';

describe('VentasController', () => {
  let controller: VentasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentasController],
      providers: [
        {
          provide: VentasService,
          useValue: { findAll: jest.fn().mockResolvedValue([]) },
        },
      ],
    }).compile();

    controller = module.get<VentasController>(VentasController);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});
