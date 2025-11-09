import { IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Roles } from '../enums/roles.enum';

/**
 * Data Transfer Object (DTO) for creating a new user.
 * Defines validation rules for name, email, password, and  role.
 */

// definimos la estructura de datos de un usuario
export class CreateUsuarioDto {

  /**
   * full name of the user.
   * Must be a non-empty string between 3 and 100 characters long.
   */
  @IsString() // cadena de texto
  @MinLength(3) // longitud mínima 3
  @MaxLength(100) // longitud máxima 100
  @IsNotEmpty() // no puede estar vacío
  nombre: string; // nombre

  /**
   * Email address of the user.
   * Must be a valid, non-empty email between 5 and 100 characters long.
   */
  @IsEmail() //formato para el correo
  @MinLength(5) // longitud mínima 5
  @MaxLength(100) // longitud máxima 100
  @IsNotEmpty() // no puede estar vacío
  correo: string; // correo

  /**
   * Password  for the user account.
   * Must be a non-empty string between 8 and 100 characters long.
   */
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  @IsNotEmpty()
  contrasena: string;

  /**
   * Role assigned to the user.
   * Must be one of the predefined roles : ADMIN, USER, etc.
   */
  @IsEnum(Roles) // validar que sea uno de los roles qu estan definidos en el enum
  @IsNotEmpty()
  rol: Roles;
}