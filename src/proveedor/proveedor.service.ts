import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './proveedor.entity';

/**
 * Service that handles business logic for supplier management.
 * Automatically decrypts email addresses when retrieving supplier data.
 */
@Injectable()
export class ProveedorService {

  /**
   * Initializes the service with the  proveedor repository for database operations.
   * @param proveedorRepository - TypeORM repository for the Proveedor entity.
   */
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepository: Repository<Proveedor>,
  ) {}

  /**
   * Retrieves all suppliers from the database.
   * @returns An array of suppliers with decryprted wmail addresses and associated products.
   */
  async findAll(): Promise<any[]> {
    const proveedores = await this.proveedorRepository.find({ relations: ['productos'] });
    return proveedores.map((p) => ({
      ...p,
      correo: p.getDecryptedEmail(),
    }));
  }

  /**
   * Finds a single supplier by  ist ID.
   * @param id  - Unique identifier of the supplier.
   * @returns The supplier object with decrypted email and associated products,  or null if not found.
   */
  async findOne(id: number): Promise<any> {
    const proveedor = await this.proveedorRepository.findOne({
      where: { id_proveedor: id },
      relations: ['productos'],
    });

    if (!proveedor) return null;

    return {
      ...proveedor,
      correo: proveedor.getDecryptedEmail(),
    };
  }

  /**
   * Creates a new supplier in the database 
   * The email will be  automatically encrypted before saving (handled by the entity).
   * @param proveedor - Supplier object containing  name, phone, and email.
   * @returns The saved supplier object (with encrypted email in the database).
   */
  async create(proveedor: Proveedor): Promise<Proveedor> {
    return await this.proveedorRepository.save(proveedor);
  }

  /**
   * Updates an existing supplier by ID 
   * @param id - ID of the supplier to  update.
   * @param proveedor - Updated supplier data.
   * @returns The updated supplier object with decrypted email, or null if not found.
   */
  async update(id: number, proveedor: Proveedor): Promise<Proveedor | null> {
    await this.proveedorRepository.update(id, proveedor);
    const actualizado = await this.proveedorRepository.findOneBy({ id_proveedor: id });
    if (actualizado) {
      actualizado.correo = actualizado.getDecryptedEmail();
    }
    return actualizado;
  }

/**
 * Deletes a supplier by  its ID.
 * @param id - ID of the supplier to delete.
 * @returns void.
 */
  async remove(id: number): Promise<void> {
    await this.proveedorRepository.delete(id);
  }
}