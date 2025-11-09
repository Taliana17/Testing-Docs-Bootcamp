import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
/**
 * Guard that protects routes by validating JWT token.
 * Ensures only authenticated user an acces protected endpoints.
 */

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}