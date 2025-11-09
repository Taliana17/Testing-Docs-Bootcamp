import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Proveedor } from '../proveedor/proveedor.entity';
import { Categoria } from '../categoria/categoria.entity';

/**
 * Service that handles business logic for product management.
 * Provides CRUD operations and manages relationships with suppliers and categories.
 */
@Injectable()
export class ProductoService {
  /**
   * Initializes the service with repositories for Producto, Proveedor, and Categoria entities.
   * @param productoRepository - Repository for product database operations.
   * @param proveedorRepository - Repository for supplier lookups.
   * @param categoriaRepository -Repository for category lookups.
   */
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,

    @InjectRepository(Proveedor)
    private readonly proveedorRepository: Repository<Proveedor>,

    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

 /**
  * Retrieves all products from the database.
  * @returns An array of all products. Including their associated supplier and category.
  */
  // 🔹 Obtener todos los productos
  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find({
      relations: ['proveedor', 'categoria'], // carga relaciones
    });
  }
  
  /**
   * Finds a single product by its ID.
   * @param id - Unique identifier of the product.
   * @returns The product object with supplier and category.
   * @throws  NotFoundException if no product exist with the given ID
   */
  // 🔹 Obtener un producto por ID
  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOne({
      where: { id_producto: id },
      relations: ['proveedor', 'categoria'],
    });
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }

  /**
   * Creates a new product with associations to an existing supplier and category.
   * @param dto - Data Transfer Object containing product details and relationship IDs.
   * @returns The created product object with full supplier and category data.
   * @throws NotFoundException if the provided supplier or category ID does not exist.
   */
  // 🔹 Crear producto
  async create(dto: CreateProductoDto): Promise<Producto> {
    const { proveedorId, categoriaId, ...data } = dto;

    // Buscar entidades relacionadas
    const proveedor = await this.proveedorRepository.findOne({
      where: { id_proveedor: proveedorId },
    });
    const categoria = await this.categoriaRepository.findOne({
      where: { id_categoria: categoriaId },
    });

    if (!proveedor) throw new NotFoundException('Proveedor no encontrado');
    if (!categoria) throw new NotFoundException('Categoría no encontrada');

    const nuevoProducto = this.productoRepository.create({
      ...data,
      proveedor,
      categoria,
    });

    return this.productoRepository.save(nuevoProducto);
  }
 /**
  * Updates an existing product partially, including optional supplier or category changes.
  * @param id - ID of the product to  update.
  * @param dto - Partial data including optional new supplierId or categoriaId.
  * @returns The updated product object.
  * @throws NotFoundException if the product, supplier, or category is not found.
  */
  // 🔹 Actualizar producto
  async update(id: number, dto: CreateProductoDto): Promise<Producto> {
    const producto = await this.productoRepository.findOne({
      where: { id_producto: id },
      relations: ['proveedor', 'categoria'],
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    const { proveedorId, categoriaId, ...data } = dto;


    // Actualizar proveedor si viene un nuevo ID
    if (proveedorId) {
      const proveedor = await this.proveedorRepository.findOne({
        where: { id_proveedor: proveedorId },
      });
      if (!proveedor) throw new NotFoundException('Proveedor no encontrado');
      producto.proveedor = proveedor;
    }

    // Actualizar categoría si viene un nuevo ID
    if (categoriaId) {
      const categoria = await this.categoriaRepository.findOne({
        where: { id_categoria: categoriaId },
      });
      if (!categoria) throw new NotFoundException('Categoría no encontrada');
      producto.categoria = categoria;
    }

    // Actualizar los demás campos
    Object.assign(producto, data);

    return this.productoRepository.save(producto);
  }

  /**
   * Deletes a product by its ID.
   * @param id - ID of the product  to  delete.
   * @throws NotFoundException if the product does not exist.
   */
  // 🔹 Eliminar producto
  async remove(id: number): Promise<void> {
    const producto = await this.productoRepository.findOne({
      where: { id_producto: id },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    await this.productoRepository.remove(producto);
  }
}