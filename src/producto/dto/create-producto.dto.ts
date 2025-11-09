/**
 * Data Transfer Object (DTO) for creating a new product.
 * Defines optional fields for product creation.
 */
export class CreateProductoDto {
  /**
   * Name of the product (optional).
   */
  nombre?: string;

  /**
   * Description of the product (optional).
   */
  descripcion?: string;

  /**
   * Price of the product in local currency (optional).
   */
  precio?: number;

  /**
   * Available stock quantity (optional).
   */
  stock?: number;

  /**
   * ID of the associated supplier (optional).
   */
  proveedorId?: number;

  /**
   * ID of the associated category (optional).
   */
  categoriaId?: number;
}