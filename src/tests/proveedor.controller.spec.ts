import { Test, TestingModule } from '@nestjs/testing';
import { ProveedorController } from '../proveedor/proveedor.controller';
import { ProveedorService } from '../proveedor/proveedor.service';

describe('ProveedorController', () => {
  let controller: ProveedorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProveedorController],
      providers: [
        {
          provide: ProveedorService,
          useValue: { findAll: jest.fn().mockResolvedValue([]) },
        },
      ],
    }).compile();

    controller = module.get<ProveedorController>(ProveedorController);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});
