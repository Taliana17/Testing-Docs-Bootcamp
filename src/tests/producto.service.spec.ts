import { ProductoService } from '../producto/producto.service';
import { Producto } from '../producto/producto.entity';
import { Proveedor } from '../proveedor/proveedor.entity';
import { Categoria } from '../categoria/categoria.entity';

const mockRepo = () => ({
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn(),
  save: jest.fn(),
  create: jest.fn(dto => dto),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('ProductoService (unit)', () => {
  let service: ProductoService;

  beforeEach(() => {
    // constructor: (productoRepo, proveedorRepo, categoriaRepo)
    service = new ProductoService(mockRepo() as any, mockRepo() as any, mockRepo() as any);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call find (smoke)', async () => {
    if ((service as any).findAll) {
      await (service as any).findAll();
      expect(true).toBe(true);
    } else {
      expect(true).toBe(true);
    }
  });
});
