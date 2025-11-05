import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from '../usuario/usuario.controller';
import { UsuarioService } from '../usuario/usuario.service';

describe('UsuarioController', () => {
  let controller: UsuarioController;
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [
        {
          provide: UsuarioService,
          useValue: { findAll: jest.fn().mockResolvedValue([]) },
        },
      ],
    }).compile();

    controller = module.get<UsuarioController>(UsuarioController);
    service = module.get<UsuarioService>(UsuarioService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});
