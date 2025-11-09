/**
 * Custom decorator to define required roles for route access control.
 * Used together with RolesGuard to protect endponts based on user roles.
 */
import { SetMetadata } from '@nestjs/common';
/**
 * Metadata key used to store required roles in route handlers.
 */
export const ROLES_KEY = 'roles';
/**
 * Decorator that assigns required roles to a route or controller.
 * @param roles - List of role names (e.g., 'ADMIN', 'USER') allowed to access the route.
 * @returns A metadata deocorator thet attaches roles to the route.
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);