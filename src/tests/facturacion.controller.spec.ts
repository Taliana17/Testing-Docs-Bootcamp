import { Test, TestingModule } from '@nestjs/testing';
import { FacturacionController } from '../facturacion/facturacion.controller';
import { FacturacionService } from '../facturacion/facturacion.service';

describe('FacturacionController', () => {
  let controller: FacturacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacturacionController],
      providers: [
        {
          provide: FacturacionService,
          useValue: { findAll: jest.fn().mockResolvedValue([]) },
        },
      ],
    }).compile();

    controller = module.get<FacturacionController>(FacturacionController);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});
