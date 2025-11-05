
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import * as bcrypt from 'bcrypt';

const mockJwt = {
  sign: jest.fn().mockReturnValue('token-mock'),
  verify: jest.fn(),
} as unknown as JwtService;

const mockUsuarioService = {
  findByEmail: jest.fn(),
  create: jest.fn(),
};

describe('AuthService (unit)', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: mockJwt },
        { provide: UsuarioService, useValue: mockUsuarioService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return token from login when user valid', async () => {
    const plainPassword = 'secret';
    const hashed = await bcrypt.hash(plainPassword, 1);

    const user = {
      id_usuario: 1,
      correo: 'test@mail.com',
      contrasena: hashed,
      rol: 'admin',
    };

    // mock que devuelve el usuario con contraseña hashed
    (mockUsuarioService.findByEmail as jest.Mock).mockResolvedValue(user);

    const res = await service.login({ correo: user.correo, contrasena: plainPassword } as any);
    expect(mockJwt.sign).toHaveBeenCalled();
 
    expect(res).toEqual({ access_token: 'token-mock' });
  });

  it('should throw when user not found or invalid password', async () => {
    (mockUsuarioService.findByEmail as jest.Mock).mockResolvedValue(null);
    await expect(service.login({ correo: 'no@mail.com', contrasena: 'x' } as any)).rejects.toThrow();
  });
});
