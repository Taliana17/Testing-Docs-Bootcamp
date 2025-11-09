import { PartialType } from '@nestjs/mapped-types';
import { CreateVentaDto } from './create-venta.dto';

/**
 * Data Transfer Object (DTO) for updating an existing sale.
 * Extends CreateVentaDto and makes all fields optional using PartialType.
 * Allows partial updates (e.g., only total or only user ID).
 */
export class UpdateVentaDto extends PartialType(CreateVentaDto) {}