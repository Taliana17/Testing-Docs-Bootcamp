// src/auth/auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

/**
 * AuthGuard
 *
 * Guarda de autenticación que protege rutas verificando la validez de un token JWT.
 *
 * @example
 * ```ts
 * @UseGuards(AuthGuard)
 * @Get('perfil')
 * getPerfil(@Request() req) {
 *   return req.user;
 * }
 * ```
 */
@Injectable()
export class AuthGuard implements CanActivate {
  /**
   * Crea una instancia del guard con el servicio JWT inyectado.
   *
   * @param jwtService - Servicio de JWT para verificar tokens.
   */
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Determina si la petición puede continuar.
   *
   * - Extrae el header `Authorization`.
   * - Valida el formato `Bearer <token>`.
   * - Verifica el token con `JwtService`.
   * - Adiciona `req.user` con el payload del token.
   *
   * @param context - Contexto de ejecución que contiene la petición.
   * @returns `true` si el token es válido; de lo contrario lanza `UnauthorizedException`.
   * @throws {UnauthorizedException} Si no hay token, el formato es inválido o la verificación falla.
   */
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers?.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Token no encontrado');
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
      throw new UnauthorizedException('Formato de token inválido');
    }
    const token = parts[1];

    try {
      const payload = this.jwtService.verify(token);
      req.user = payload;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
