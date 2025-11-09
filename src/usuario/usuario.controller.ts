import {Body,Controller,Delete,Get,Param,ParseIntPipe,Patch,Post,NotFoundException,} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

/**
 * Controller for managing user accounts.
 * Handles registration, listing, retrieval, update, and deletion of users.
 */
@Controller('usuario') //definimos la ruta base para este controlador
export class UsuarioController {

  /**
   * Initializes the controller with the UsuarioService dependency.
   * @param userService - Service that handles user business logic.
   */
  constructor(private readonly userService: UsuarioService) {}

  /**
   * Registers a new user.
   * @param body - Data Transfer Object containing user registration details.
   * @returns The created user object (without password).
   */
  // Crear usuario
  @Post('register')
  createUser(@Body() body: CreateUsuarioDto) {
    return this.userService.createUser(body);
  }

   /**
   * Retrieves a list of all users.
   * @returns An array of user objects (passwords are excluded for security).
   */
  // Listar usuarios
  @Get('list')
  listUsers() {
    return this.userService.listUsers();
  }

  /**
   * Retrieves a single user by ID.
   * @param id - Unique identifier of the user.
   * @returns The user object if found.
   * @throws NotFoundException if the user does not exist.
   */
  
  // Obtener usuario por ID
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getUser(id);
    // Manejo de errores: Si el Servicio devuelve null/undefined
    if (!user) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return user;
  }

  /**
   * Updates an existing user partially by ID.
   * @param id - ID of the user to update.
   * @param body - Partial user data (all fields optional).
   * @returns The updated user object.
   * @throws NotFoundException if the user does not exist.
   */
  // Actualizar usuario
  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUsuarioDto, //// El Body se valida con UpdateUsuarioDto todos los campos opcionales
  ) {
    const updated = await this.userService.updateUser(id, body);
    // verifica si la actualización fue exitosa
    if (!updated) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return updated;
  }

  /**
   * Deletes a user by ID.
   * @param id - ID of the user to delete.
   * @returns A success message confirming deletion.
   * @throws NotFoundException if the user does not exist.
   */
  // Eliminar usuario
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const result = await this.userService.deleteUser(id);
    if (!result) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return { message: `Usuario ${id} eliminado correctamente` };
  }
}