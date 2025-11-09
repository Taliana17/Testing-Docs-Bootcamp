import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
/**
 * Controller for authentication-related endpoints.
 * handles user registration and login request.
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  /**
   * Register a new  user in the  system.
   * @param dto - Data Transfer Object containing user registration details.
   * @returns A promise with  the created user or an error messaje
   */

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }
 /**
  * Authenticates a user and returns a JWT token.
    * @param dto - Data Transfer Object containing email and password.
  * @returns  A promise with  the  authentication token or  an error.
  */
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}