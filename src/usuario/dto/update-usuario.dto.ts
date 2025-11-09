// archivo que nos permitte modicar campos de un usuario que sean opcionales
import { PartialType } from '@nestjs/mapped-types'; // sirve para crear un tipo de clase basado en uno existente
import { CreateUsuarioDto } from './create-usuario.dto'; // importamos el DTO creado
// todas las propiedades de este DTO son opcionales
/**
 * Data Transfer Object (DTO) for updated an existing user.
 * Extends CreateUsuarioDto and makes all fields optional using PartialType.
 * Allows partial updates of user data (e.g., only name or only email).
 */
export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}