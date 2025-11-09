import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from './providers/usuario.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject(UsuarioRepository)
    private readonly userRepo: UsuarioRepository,
  ) {}

  // Crear usuario (con logs y manejo de errores)
  async createUser(body: CreateUsuarioDto) {
    try {
      console.log('📥 Datos recibidos para crear usuario:', body);
      const nuevoUsuario = await this.userRepo.createUser(body);
      console.log('✅ Usuario creado exitosamente:', nuevoUsuario);
      return nuevoUsuario;
    } catch (error) {
      console.error('❌ Error al crear usuario:', error);
      throw new Error(error.message || 'Error interno al crear usuario');
    }
  }

  // Listar todos los usuarios
  listUsers() {
    return this.userRepo.findAll();
  }

  // Obtener usuario por ID
  async getUser(id: number) {
    const u = await this.userRepo.findOne(id);
    if (!u) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return u;
  }

  // Actualizar usuario
  async updateUser(id: number, body: UpdateUsuarioDto) {
    const u = await this.userRepo.findOne(id);
    if (!u) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return this.userRepo.updateUser(id, body);
  }

  // Eliminar usuario
  async deleteUser(id: number) {
    const u = await this.userRepo.findOne(id);
    if (!u) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return this.userRepo.deleteUser(id);
  }

  // Buscar usuario por correo
  async findByEmail(email: string) {
    return this.userRepo.findByEmail(email);
  }
}
