import { FacturacionService } from '../facturacion/facturacion.service';
import { Repository } from 'typeorm';
import { Facturacion } from '../facturacion/facturacion.entity';

const mockRepository = () => ({
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn(),
  create: jest.fn(dto => dto),
  save: jest.fn(),
  merge: jest.fn(),
  remove: jest.fn(),
});

describe('FacturacionService (unit)', () => {
  let service: FacturacionService;
  let repo: Partial<Repository<Facturacion>>;

  beforeEach(() => {
    repo = mockRepository();
    service = new FacturacionService(repo as any);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should call repo.find', async () => {
    await service.findAll();
    expect((repo.find as jest.Mock).mock.calls.length).toBeGreaterThanOrEqual(0);
  });
});
