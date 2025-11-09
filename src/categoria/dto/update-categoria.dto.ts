// Importa PartialType para reutilizar la estructura del DTO de creación
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';
/**
 * Data Transfer Object (DTO) for updating an existing category.
 * Extends CreateCategoriaDto and makes all fields optional using PartialType.
 */
// Esta clase define los datos permitidos al ACTUALIZAR una categoría existente.
// Extiende de CreateCategoriaDto, pero convierte todos sus campos en opcionales.
export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {}

/*
Explicación:
- "PartialType" crea una copia del CreateCategoriaDto
- donde todos los campos se vuelven opcionales.
- Esto evita tener que volver a escribir las validaciones (@IsString, @Length, etc.).
- Se usa normalmente en el método PATCH del controlador */