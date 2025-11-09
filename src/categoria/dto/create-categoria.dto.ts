// Importamos decoradores del paquete class-validator
// Estos se usan para validar los datos que se reciben en las peticiones (por ejemplo, desde el frontend)
import { IsString, IsOptional, Length } from 'class-validator';
/**
 * Data Transfer Object (DTO) for creating a new category.
 * Defines validation rules for the category name and optional description.
 */

// Definimos un DTO (Data Transfer Object) para crear una categoría
// Sirve para controlar y validar qué datos se pueden enviar al backend
export class CreateCategoriaDto {
/**
 * Name of the category, required.
 * Must be  a string between 2 and 100 characters long.
 */
  // Campo obligatorio: nombre de la categoría
  // Debe ser una cadena (texto) con mínimo 2 y máximo 100 caracteres
  @IsString()
  @Length(2, 100)
  nombre!: string;
  /**
   * Optional description of the category.
   * If provided, must be a string.
   */

  // Campo opcional: descripción de la categoría
  // Si se envía, debe ser texto (string)
  @IsOptional()
  @IsString()
  descripcion?: string;
}