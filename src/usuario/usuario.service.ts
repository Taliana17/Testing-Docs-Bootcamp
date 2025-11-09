// Clase Servicio: Contiene la Lógica de Negocio central de la entidad Usuario.
// Este servicio actúa como intermediario: recibe peticiones del Controlador y
// delega las operaciones de DB al Repositorio.
// Se encarga de la validación de existencia (ej. antes de actualizar o eliminar).

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from './providers/usuario.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';


/**
 * Service that handles business logic for user management.
 * Acts as an intermediary between the controller and the custom repository.
 * Validates user existence before update or deletion operations.
 */
@Injectable()
export class UsuarioService {

  /**
   * Initializes the service with the custom UsuarioRepository.
   * @param userRepo - Custrom repository for user database operations.
   */
  constructor(
    @Inject(UsuarioRepository)
    private readonly userRepo: UsuarioRepository,   
  ) {}

  /**
   * Creates  a new user by delegating to the repository.
   * Password hashing is handled by the repository.
   * @param body - Data Transfer Object containing user registration details.
   * @returns The created user object (Without plain-text password).
   */

  createUser(body: CreateUsuarioDto) {
    return this.userRepo.createUser(body);
  }

  /**
   * Retrieves a list of all users from the repository.
   * @returns An array of user object (passwords remain hashed).
   */
  listUsers() {
    return this.userRepo.findAll();
  }
/**
 * Retrieves a single user by ID.
 * @param id - Unique identifier of the user.
 * @returns  The user object if found.
 * @throws NotFoundException if the user does not exist.
 */
  async getUser(id: number) {
    const u = await this.userRepo.findOne(id);
    if (!u) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return u;
  }

  /**
   * Updates an existing user by ID after verifyiing existence.
   * @param id - ID of the user to update.
   * @param body - Partial user data for update (all fields optional).
   * @returns The updated user object.
   * @throws NotFoundException if the user does not exist.
   */

  async updateUser(id: number, body: UpdateUsuarioDto) {
    const u = await this.userRepo.findOne(id);
    if (!u) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return this.userRepo.updateUser(id, body);
  }

  /**
   * Deletes a user by ID after verifying existence.
   * @param id - ID of the user to delete.
   * @returns Result of the delete operation.
   * @throws NotFoundException if the user does not exist.
   */
  async deleteUser(id: number) {
    const u = await this.userRepo.findOne(id);
    if (!u) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return this.userRepo.deleteUser(id);
  }

  /**
   * Finds a user by email addrees (used for authentication).
   * @param email - Email address of the user.
   * @returns The user object if found, or null otherwise.
   */
  // agrega este método en UsuarioService para auth
async findByEmail(email: string) {
  return this.userRepo.findByEmail(email);
}

}