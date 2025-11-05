import { Test, TestingModule } from '@nestjs/testing';
import { ProveedorService } from '../proveedor/proveedor.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Proveedor } from '../proveedor/proveedor.entity';
import { mockRepository } from './mock-repository';

describe('ProveedorService', () => {
  let service: ProveedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProveedorService,
        { provide: getRepositoryToken(Proveedor), useValue: mockRepository() },
      ],
    }).compile();

    service = module.get<ProveedorService>(ProveedorService);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });
});
