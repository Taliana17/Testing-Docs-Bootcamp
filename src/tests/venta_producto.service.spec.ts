import { VentaProductoService } from '../venta_producto/venta_producto.service';
import { VentaProducto } from '../venta_producto/venta_producto.entity';
import { Venta } from '../ventas/ventas.entity';
import { Producto } from '../producto/producto.entity';

const mockRepo = () => ({
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn(),
  save: jest.fn(),
  create: jest.fn(dto => dto),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('VentaProductoService (unit)', () => {
  let service: VentaProductoService;

  beforeEach(() => {
  
    service = new VentaProductoService(mockRepo() as any, mockRepo() as any, mockRepo() as any);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
