/**
 * Data Transfer Object (DTO) for updating an existing product.
 * Contains optional fields to allow partial updates of product data.
 */
export class UpdateProductoDto {
  /**
   * Updated name of the product (optional).
   */
  nombre?: string;

  /**
   * Updated description of the product (optional).
   */
  descripcion?: string;

  /**
   * Updated price of the product in local currency (optional).
   */
  precio?: number;

  /**
   * Updated available stock quantity (optional).
   */
  stock?: number;

  /**
   * Updated ID of the associated supplier (optional).
   */
  proveedorId?: number;

  /**
   * Updated ID of the associated category (optional).
   */
  categoriaId?: number;
}