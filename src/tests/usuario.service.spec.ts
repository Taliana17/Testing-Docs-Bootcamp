import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario.entity';

const mockRepo = () => ({
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn(),
  save: jest.fn(),
  create: jest.fn(dto => dto),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('UsuarioService (unit)', () => {
  let service: UsuarioService;

  beforeEach(() => {
    service = new UsuarioService(mockRepo() as any);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
