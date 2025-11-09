// definimos un enum para los roles de usuario
/**
 * Enum representing the available user roles in the system.
 * Used for access control and validation.
 */
export enum Roles {
  /**
   * Administrator  role with full system access.
   */
  ADMIN = 'admin',
  /**
   * Employee role with limited access (e.g., sales, inventory).
   */
  EMPLEADO = 'empleado',
}