/**
 * Enum representing the available payment methods for invoices.
 * Used for validation and cosistency across the application.
 */
export enum MetodoPago {
  /**
   * Cash payment method.
   */
  EFECTIVO = 'efectivo',
  /**
   * Credit or debit card payment method.
   */
  TARJETA = 'tarjeta',
  /**
   * Bank transfer payment method.
   */
  TRANSFERENCIA = 'transferencia',
  /**
   * Other payment method (fallback option).
   */
  OTRO = 'otro',
}