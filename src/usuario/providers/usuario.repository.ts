import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import * as bcrypt from 'bcrypt'; // librería para encriptar contraseñas

/**
 * Custom repository for user-related database operations.
 * Handles password hashing and provides specialized user management methods.
 */
@Injectable()
export class UsuarioRepository {

  /**
   * Initializes the repository with the TypeORM repository for the Usuario entity.
   * @param repo - TypeORM repository for user database operations.
   */
  // inyecta dependencias
  constructor(
    @InjectRepository(Usuario)
    private readonly repo: Repository<Usuario>,
  ) {}

   /**
   * Creates a new user with a hashed password.
   * The plain-text password is never stored in the database.
   * @param body - Data Transfer Object containing user registration details.
   * @returns The created user object with hashed password.
   */
  // Crea usuario (hashea contraseña)
  async createUser(body: CreateUsuarioDto) { // Crea un nuevo registro de Usuario en la base de datos
   // La parte crítica es hashear (cifrar) la contraseña antes de guardarla
    const saltRounds = 10; // número de iteraciones para cifrar la contraseña
    const hashed = await bcrypt.hash(body.contrasena, saltRounds);
    const user = this.repo.create({
      nombre: body.nombre,
      correo: body.correo,
      contrasena: hashed, //se almacena el hash de la contraseña
      rol: body.rol,
    });
    return this.repo.save(user);
  }

  /**
   * Retrieves all users from the database.
   * @returns An array of all user objects (passwords remain hashed).
   */
// Listar todos los usuarios
  findAll() {
    return this.repo.find();
  }

  /**
   * Finds a user by their unique ID.
   * @param id - Unique identifier of the user.
   * @returns The user object if found, or undefined otherwise.
   */
// Obtener usuario por ID
  findOne(id: number) {
    return this.repo.findOne({ where: { id_usuario: id } });
  }

  /**
   * Finds a user by their email address.
   * @param email - Email address of the user.
   * @returns The user object if found, or undefined otherwise.
   */
// Obtener usuario por correo
  findByEmail(email: string) {
    return this.repo.findOne({ where: { correo: email } });
  }

  /**
   * Updates an existing user by ID.
   * If a new password is provided, it is automatically hashed before saving.
   * @param id - ID of the user to update.
   * @param body - Partial user data including optional new password.
   * @returns The updated user object.
   */
// Actualizar los datos de un usuario por ID
  async updateUser(id: number, body: UpdateUsuarioDto) {
    // si actualiza contraseña, hashearla
    if (body.contrasena) {
      // si la incluye, se volvera a hashear antes de guardar
      const saltRounds = 10;
      body.contrasena = await bcrypt.hash(body.contrasena, saltRounds);
    }
    await this.repo.update({ id_usuario: id }, { ...body });
    return this.findOne(id);
  }

  /**
   * Deletes a user by their ID.
   * @param id - ID of the user to delete.
   * @returns Result of the delete operation.
   */
// Eliminar usuario por ID
  deleteUser(id: number) {
    return this.repo.delete({ id_usuario: id });
  }
}