import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
/**
 * Service that handles user authentication and registration logic.
 * Manages password hashing, JWT token generation, and user validation.
 */
@Injectable()
export class AuthService {
  /**
   * Initializes the AuthService with required dependencies.
   * @param usuarioService - Service for user management and password hashing.
   * @param jwtService - Service for JWT token generation and validation.
   */
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}
  /**
     * Registers a new user after checking email availability.
     * Password  hashing is handled by UsuarioService.
     * @param dto - Registration data incluiding name, email, password, and role.
     * @returns The  created user object without the password.
     */
  // Registro (usa el repo existente, que ya hace hashing)
  async register(dto: RegisterDto) {
    // Revisa si ya existe correo
    const existing = await this.usuarioService.findByEmail(dto.correo);
    if (existing) {
      throw new UnauthorizedException('Correo ya registrado');
    }
    
    // Usa el service que ya delega al repo (que hashea)
    const created = await this.usuarioService.createUser({
      nombre: dto.nombre,
      correo: dto.correo,
      contrasena: dto.contrasena,
      rol: dto.rol,
    } as any); // cast según tu DTO
    // no devolvemos contraseña
    const { contrasena, ...rest } = created as any;
    return rest;
  }
  /**
   * Validates use  credentials by comparing the provided password with the hashed one.
   * @param correo - User's email adrres.
   *  @param contrasena - Plain-text password to verify.
   * @returns User object without password if valid, null otherwise.
   */
  // Validar credenciales (devuelve usuario sin contraseña)
  async validateUser(correo: string, contrasena: string) {
    const user = await this.usuarioService.findByEmail(correo);
    if (!user) return null;
    const match = await bcrypt.compare(contrasena, user.contrasena);
    if (!match) return null;
    const { contrasena: _, ...result } = user as any;
    return result;
  }
    /**
   * Authenticates a user and generates a JWT acces token.
   * @param loginDto  - Login credentials (email and password).
   * @returns  An object containing the JWT acces token.
   * @throws UnauthorizedException if credentials are invalid.
   */
  // Generar token con payload
  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.correo, loginDto.contrasena);
    if (!user) throw new UnauthorizedException('Credenciales inválidas');

    const payload = { correo: user.correo, rol: user.rol, sub: user.id_usuario };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}