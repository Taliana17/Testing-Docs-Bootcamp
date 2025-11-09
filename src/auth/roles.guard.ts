import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';

/**
 * Guard that restricts route access  based on user roles.
 * Checks if the authenticated user has one of  the required roles
 */
@Injectable()
export class RolesGuard implements CanActivate {
  /**
   * Initializes the RolesGuard with the Nestjs Reflector service.
   * @param reflector - Service used to read metadata (e.g., roles) from routes or controllers.
   */
  constructor(private reflector: Reflector) {}

  /**
   * Determines whether the current user can activate the route.
   * compares the user's role with the required roles defined via the @Roles() decorator.
   * @param context - Execution context of the current request.
   * @returns true if the user has the required role, false otherwise.
   */
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true;
    const { user } = context.switchToHttp().getRequest();
    if (!user) return false;
    return requiredRoles.includes(user.rol);
  }
}