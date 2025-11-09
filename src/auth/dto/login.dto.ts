
 import { IsEmail, IsString, MinLength } from 'class-validator';
/** 
 * Data transfer Object (DTO) for user authentucation.
 * Defines validation rules for email and password during login.
 */
export class LoginDto {
  /**
   * Email of the  user for login.
   */
  @IsEmail()
  correo: string;
/**
 * Password for authentication, must be at least 8 characters long.
 */
  @IsString()
  @MinLength(8)
  contrasena: string;
}