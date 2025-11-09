// Importamos decoradores y clases necesarias de NestJS y TypeORM
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Importamos la entidad y los DTOs (objetos para recibir datos)
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

/**
 * Service that handles business logic for category management.
 * Provides CRUD operations: create, read, update, and delete categories.
 */
//Este decorador indica que esta clase puede ser inyectada como un servicio
@Injectable()
export class CategoriaService {

  /**
   * Initializes the service with the Categoria repository  for  database operations.
   * @param repo - TypeORM repository for the Categoria entity.
   */
  // Se inyecta el repositorio de la entidad Categoria para interactuar con la base de datos
  constructor(
    @InjectRepository(Categoria)
    private readonly repo: Repository<Categoria>,
  ) {}

  /**
   * Creates a new category in the database.
   * @param dto - Data Transfer Object containing category name and optional description.
   * @returns The saved category object.
   */
  // Crear una nueva categoría
  create(dto: CreateCategoriaDto) {
    // Crea una nueva instancia de categoría usando los datos del DTO
    const entity = this.repo.create(dto);
    // Guarda la categoría en la base de datos
    return this.repo.save(entity);
  }

  /**
   * Retrieves all categories from the database.
   * @returns An array of all existing categories.
   */
  // Obtener todas las categorías registradas
  findAll() {
    // Devuelve un arreglo con todas las categorías encontradas
    return this.repo.find();
  }

  /**
   * Finds a single category by its ID.
   * @param id  - Unique identifier of the category.
   * @returns The category object if found.
   * @throws NotFoundException if no category exists with the given ID.
   */
  // Buscar una categoría específica por su ID
  async findOne(id: number) {
    // Busca la categoría por su id_categoria
    const cat = await this.repo.findOne({ where: { id_categoria: id } });

    // Si no existe, lanza  error 404 (no encontrada)
    if (!cat) throw new NotFoundException('Categoría no encontrada');

    // Si se encuentra, la devuelve
    return cat;
  }

  /**
   * Updates an existing category partially.
   * @param id -ID of the category to update.
   * @param dto -Partial data to update (name and/or description).
   * @returns The updated category object.
   * @throws NotFoundException if the category does not exist.
   */
  // Actualizar una categoría existente
  async update(id: number, dto: UpdateCategoriaDto) {
    // Verifica que la categoría exista antes de actualizarla
    const cat = await this.findOne(id);

    // Mezcla los nuevos datos (dto) con los datos existentes
    this.repo.merge(cat, dto);

    // Guarda los cambios en la base de datos
    return this.repo.save(cat);
  }
 
  /**
   * Deletes a category by its ID.
   * @param id -ID of category to delete.
   * @returns The deleted category object.
   * @throws NotFoundException if the category does not exist.
   */
  // Eliminar una categoría por su ID
  async remove(id: number) {
    // Verifica que la categoría exista antes de eliminarla
    const cat = await this.findOne(id);

    // Elimina la categoría de la base de datos
    return this.repo.remove(cat);
  }
}