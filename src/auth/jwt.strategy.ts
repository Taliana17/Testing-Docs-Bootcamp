import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

/**
 * Strategy for validating JWT tokens in protected routes.
 * Extracts the token from the Authorization header and verifies its signature.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Initializes the JWT strategy with configuration options.
   * Sets up token extraction from the Authorization header and secret key.
   */
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'MI_SECRETO_LOCAL',
    });
  }

  /**
   * Validates the decoded JWT payload and returns user information.
   * This method is called after the token is verified as valid.
   * @param payload - Decoded JWT containing user data (e.g., id, email, role).
   * @returns A user object with id, email, and role.
   */
  async validate(payload: any) {
    // payload: { correo, rol, sub }
    return { id_usuario: payload.sub, correo: payload.correo, rol: payload.rol };
  }
}