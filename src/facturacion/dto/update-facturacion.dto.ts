import { PartialType } from '@nestjs/mapped-types';
import { CreateFacturacionDto } from './create-facturacion.dto';

/**
 * Data Transfer Object (DTO) for updating an existing invoice.
 * Extends CreateFacturacionDto and makes all fields optional using PartialType.
 */
export class UpdateFacturacionDto extends PartialType(CreateFacturacionDto) {}
