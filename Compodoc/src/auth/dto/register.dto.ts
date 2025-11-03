
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Roles } from 'src/usuario/enums/roles.enum';
/**
 * Data Transfer Object (DTO) for user registration.
 * Defines validation rules for name, email, password, and role when creating a new user.
 */
export class RegisterDto {
  /**
   * Full name of the user, must be at least 3 characters long.
   */
  @IsString()
  @MinLength(3)
  nombre: string;
  /**
   * Email address of the user, must be unique and valid.
   */
  @IsEmail()
  correo: string;
  /**
   * Password for the account, must be at least 8 characters long.
   */
  @IsString()
  @MinLength(8)
  contrasena: string;
   /**
   * Role assigned to the user (e.g., ADMIN, USER).
   */
    @IsEnum(Roles)
  rol: Roles;
 
}