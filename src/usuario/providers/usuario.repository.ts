import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import * as bcrypt from 'bcrypt'; // librería para encriptar contraseñas

@Injectable()
export class UsuarioRepository {
  // Inyección del repositorio de TypeORM
  constructor(
    @InjectRepository(Usuario)
    private readonly repo: Repository<Usuario>,
  ) {}

  // 🔹 Crear usuario (con hash de contraseña)
  async createUser(body: CreateUsuarioDto) {
    const saltRounds = 10;
    const hashed = await bcrypt.hash(body.contrasena, saltRounds);

    const user = this.repo.create({
      nombre: body.nombre,
      correo: body.correo,
      contrasena: hashed, // se guarda el hash en lugar del texto plano
      rol: body.rol,
    });

    return this.repo.save(user);
  }

  // 🔹 Listar todos los usuarios
  findAll() {
    return this.repo.find();
  }

  // 🔹 Obtener usuario por ID
  findOne(id: number) {
    return this.repo.findOne({ where: { id_usuario: id } });
  }

  // 🔹 Obtener usuario por correo
  findByEmail(email: string) {
    return this.repo.findOne({ where: { correo: email } });
  }

  // 🔹 Actualizar usuario (si cambia la contraseña, vuelve a cifrarla)
  async updateUser(id: number, body: UpdateUsuarioDto) {
    if (body.contrasena) {
      const saltRounds = 10;
      body.contrasena = await bcrypt.hash(body.contrasena, saltRounds);
    }
    await this.repo.update({ id_usuario: id }, { ...body });
    return this.findOne(id);
  }

  // 🔹 Eliminar usuario por ID
  deleteUser(id: number) {
    return this.repo.delete({ id_usuario: id });
  }
}
