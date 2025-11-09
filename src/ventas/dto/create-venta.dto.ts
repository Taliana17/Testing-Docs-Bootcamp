import { IsNumber, IsOptional } from 'class-validator';

/**
 * Data Transfer Object (DTO) for creating a new sale.
 * Defines the required and optional fields for sale creation.
 */
export class CreateVentaDto {
  
  /**
   * Date of the sale (optional).
   * If not provided, the current date will be  used by the system.
   */
  @IsOptional()
  fecha?: Date;

  /**
   * Total amount of the sale, required. 
   * Must be a valid number.
   */
  @IsNumber()
  total: number;

  /**
   * ID of the user who made the sale, required.
   * Must be a valid number referencing an existing user.
   */
  @IsNumber()
  id_usuario: number;
}