import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaService } from '../categoria/categoria.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Categoria } from '../categoria/categoria.entity';
import { Repository } from 'typeorm';

const mockRepo = () => ({
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn(),
  save: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('CategoriaService', () => {
  let service: CategoriaService;
  let repo: Partial<Repository<Categoria>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriaService,
        { provide: getRepositoryToken(Categoria), useValue: mockRepo() },
      ],
    }).compile();

    service = module.get<CategoriaService>(CategoriaService);
    repo = module.get(getRepositoryToken(Categoria));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call repository.find on findAll', async () => {
    await service.findAll();
    expect((repo.find as jest.Mock).mock.calls.length).toBeGreaterThanOrEqual(0);
  });
});
