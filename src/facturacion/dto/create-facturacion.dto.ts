import { IsEnum, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { MetodoPago } from '../enums/metodo-pago.enum';
/**
 * Data  Transfer Objetc (DTO) for creating a new invoice.
 * Defines validation rules for invoices number, type, payment method, total, and optional references.
 */
export class CreateFacturacionDto {

  /**
   * Invoice number, required.
   * Must be a string between 2 and 50 Characters long
   */
  @IsString()
  @Length(2, 50)
  numero_factura!: string;

  /**
   * Type of invoice (e.g., "standard", "credit"), required.
   * Must be a string between 2 and 30 characters long.
   */

  @IsString()
  @Length(2, 30)
  tipo_factura!: string;

  /**
   * Payment method  for the invoice, required.
   * Must be one of the allowed values : efectivo, tarjeta, or transferencia.
   */

  @IsEnum(MetodoPago, { message: 'El método de pago debe ser efectivo, tarjeta o transferencia' })
  metodo_pago!: MetodoPago;

  /**
   * Total amount of the invoice, required.
   * Must be a  valid number.
   */
  @IsNumber()
  total!: number;

  /**
   * Optional ID of the associated sale.
   * if provided, must be a number.
   */
  @IsOptional()
  @IsNumber()
  id_venta?: number;

  /**
   * Optional ID of the user who created the invoice.
   * If provided, must be a number.
   */

  @IsOptional()
  @IsNumber()
  id_usuario?: number;
}