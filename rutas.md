# Documentación de Rutas — Módulo de Categorías #
---
**1. Crear nueva categoría**

- Método: POST
- Endpoint: /categorias
- Descripción: Crea una nueva categoría en el sistema.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "nombre": "Materiales de construcción",
  "descripcion": "Cemento, arena, yeso y otros materiales básicos"
}

- Respuesta exitosa (201 - Created):
{
  "id": 1,
  "nombre": "Materiales de construcción",
  "descripcion": "Cemento, arena, yeso y otros materiales básicos",
  "createdAt": "2025-11-02T16:30:00Z"
}

**2. Listar todas las categorías**

- Método: GET
- Endpoint: /categorias
- Descripción: Devuelve la lista completa de categorías registradas.

- Respuesta (200 - OK):
[
  {
    "id": 1,
    "nombre": "Materiales de construcción",
    "descripcion": "Cemento, arena, yeso y otros materiales básicos"
  },
  {
    "id": 2,
    "nombre": "Pinturas",
    "descripcion": "Pinturas y esmaltes para interiores y exteriores"
  }
]

**3. Buscar categoría por ID**

- Método: GET
- Endpoint: /categorias/:id
- Descripción: Busca una categoría específica por su identificador numérico.

- Parámetros:
Nombre: id	Tipo: number	Descripción: Identificador de la categoría

- Respuesta (200 - OK):
{
  "id": 1,
  "nombre": "Materiales de construcción",
  "descripcion": "Cemento, arena, yeso y otros materiales básicos"
}

- Respuesta (404 - Not Found):
{
  "message": "Categoría no encontrada"
}

**4. Actualizar una categoría**

- Método: PATCH
- Endpoint: /categorias/:id
- Descripción: Modifica los datos de una categoría existente.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "nombre": "Cementos tradicionales",
  "descripcion": "Cemento gris y blanco para usos generales"
}

- Respuesta (200 - OK):
{
  "id": 1,
  "nombre": "Cementos tradicionales",
  "descripcion": "Cemento gris y blanco para usos generales",
  "updatedAt": "2025-11-02T16:40:00Z"
}

**5. Eliminar una categoría**

- Método: DELETE
- Endpoint: /categorias/:id
- Descripción: Elimina una categoría existente según su ID.

- Respuesta (200 - OK):
{
  "message": "Categoría eliminada correctamente"
}

- Respuesta (404 - Not Found):
{
  "message": "Categoría no encontrada"
}

**Tipos de datos (DTOs)**
- CreateCategoriaDto
{
  nombre: string;
  descripcion: string;
}

- UpdateCategoriaDto
{
  nombre?: string;
  descripcion?: string;
}

---

# Módulo de Facturación #

**1. Crear una nueva factura**

- Método: POST
- Endpoint: /facturacion
- Descripción: Crea una nueva factura en el sistema.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "numero_factura": "FAC-001",
  "tipo_factura": "efectivo",
  "metodo_pago": "tarjeta",
  "total": 15000.50,
  "id_venta": 1
}

- Respuesta exitosa (201 - Created):
{
  "id": 1,
  "numero_factura": "FAC-001",
  "tipo_factura": "efectivo",
  "metodo_pago": "tarjeta",
  "total": 15000.50,
  "id_venta": 1,
  "createdAt": "2025-11-02T17:00:00Z"
}

**2. Listar todas las facturas**

- Método: GET
- Endpoint: /facturacion
- Descripción: Devuelve la lista completa de facturas registradas.

- Respuesta (200 - OK):
[
  {
    "id": 1,
    "numero_factura": "FAC-001",
    "tipo_factura": "efectivo",
    "metodo_pago": "tarjeta",
    "total": 15000.50,
    "id_venta": 1
  },
  {
    "id": 2,
    "numero_factura": "FAC-002",
    "tipo_factura": "crédito",
    "metodo_pago": "transferencia",
    "total": 23000.00,
    "id_venta": 2
  }
]

**3. Buscar una factura por ID**

- Método: GET
- Endpoint: /facturacion/:id
- Descripción: Obtiene los detalles de una factura específica por su identificador numérico.

- Parámetros:
Nombre: id	Tipo: number	Descripción: Identificador de la factura

- Respuesta (200 - OK):
{
  "id": 1,
  "numero_factura": "FAC-001",
  "tipo_factura": "efectivo",
  "metodo_pago": "tarjeta",
  "total": 15000.50,
  "id_venta": 1
}

- Respuesta (404 - Not Found):
{
  "message": "Factura no encontrada"
}

**4. Actualizar una factura**

- Método: PATCH
- Endpoint: /facturacion/:id
- Descripción: Actualiza los datos de una factura existente.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "metodo_pago": "efectivo"
}

- Respuesta (200 - OK):
{
  "id": 1,
  "numero_factura": "FAC-001",
  "tipo_factura": "efectivo",
  "metodo_pago": "efectivo",
  "total": 15000.50,
  "id_venta": 1,
  "updatedAt": "2025-11-02T17:15:00Z"
}

**5. Eliminar una factura**

- Método: DELETE
- Endpoint: /facturacion/:id
- Descripción: Elimina una factura del sistema según su ID.

- Respuesta (200 - OK):
{
  "message": "Factura eliminada correctamente"
}

- Respuesta (404 - Not Found):
{
  "message": "Factura no encontrada"
}

**Tipos de datos (DTOs)**
- CreateFacturacionDto
{
  numero_factura: string;
  tipo_factura: string;
  metodo_pago: string;
  total: number;
  id_venta: number;
}

- UpdateFacturacionDto
{
  numero_factura?: string;
  tipo_factura?: string;
  metodo_pago?: string;
  total?: number;
  id_venta?: number;
}

---

# Módulo de Productos #

**1. Crear nuevo producto**

- Método: POST
- Endpoint: /productos
- Descripción: Crea un nuevo producto en el sistema.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "nombre": "Tornillos",
  "descripcion": "De 5 milímetros",
  "precio": 1500,
  "stock": 50,
  "proveedorId": 1,
  "categoriaId": 1
}

- Respuesta exitosa (201 - Created):
{
  "id": 1,
  "nombre": "Tornillos",
  "descripcion": "De 5 milímetros",
  "precio": 1500,
  "stock": 50,
  "proveedorId": 1,
  "categoriaId": 1,
  "createdAt": "2025-11-02T16:30:00Z"
}

**2. Listar todos los productos**

- Método: GET
- Endpoint: /productos
- Descripción: Devuelve la lista completa de productos registrados.

- Respuesta (200 - OK):
[
  {
    "id": 1,
    "nombre": "Tornillos",
    "descripcion": "De 5 milímetros",
    "precio": 1500,
    "stock": 50,
    "proveedorId": 1,
    "categoriaId": 1
  },
  {
    "id": 2,
    "nombre": "Tubo PVC",
    "descripcion": "Plástico resistente",
    "precio": 27000,
    "stock": 40,
    "proveedorId": 1,
    "categoriaId": 1
  }
]

**3. Buscar producto por ID**

- Método: GET
- Endpoint: /productos/:id
- Descripción: Busca un producto específico por su identificador numérico.

- Parámetros:
Nombre: id	Tipo: number	Descripción: Identificador del producto

- Respuesta (200 - OK):
{
  "id": 1,
  "nombre": "Tornillos",
  "descripcion": "De 5 milímetros",
  "precio": 1500,
  "stock": 50,
  "proveedorId": 1,
  "categoriaId": 1
}

- Respuesta (404 - Not Found):
{
  "message": "Producto no encontrado"
}

**4. Actualizar un producto**

- Método: PUT
- Endpoint: /productos/:id
- Descripción: Modifica los datos de un producto existente.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "nombre": "Tubo de PVC",
  "descripcion": "Plástico",
  "precio": 27000,
  "stock": 40,
  "proveedorId": 1,
  "categoriaId": 1
}

- Respuesta (200 - OK):
{
  "id": 1,
  "nombre": "Tubo de PVC",
  "descripcion": "Plástico",
  "precio": 27000,
  "stock": 40,
  "proveedorId": 1,
  "categoriaId": 1,
  "updatedAt": "2025-11-02T16:40:00Z"
}

- Respuesta (404 - Not Found):
{
  "message": "Producto no encontrado"
}

**5. Eliminar un producto**

- Método: DELETE
- Endpoint: /productos/:id
- Descripción: Elimina un producto existente según su ID.

- Respuesta (200 - OK):
{
  "message": "Producto eliminado correctamente"
}

- Respuesta (404 - Not Found):
{
  "message": "Producto no encontrado"
}

**Tipos de datos (DTOs)**

- CreateProductoDto
{
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  proveedorId: number;
  categoriaId: number;
}

- UpdateProductoDto
{
  nombre?: string;
  descripcion?: string;
  precio?: number;
  stock?: number;
  proveedorId?: number;
  categoriaId?: number;
}

---

# Módulo de Proveedores #

**1. Crear nuevo proveedor**

- Método: POST
- Endpoint: /proveedores
- Descripción: Crea un nuevo proveedor en el sistema.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "nombre": "NestJS Distribuciones",
  "telefono": "3201234567",
  "correo": "contacto@nestjs.com"
}

- Respuesta exitosa (201 - Created):
{
  "id": 1,
  "nombre": "NestJS Distribuciones",
  "telefono": "3201234567",
  "correo": "contacto@nestjs.com",
  "createdAt": "2025-11-02T16:30:00Z"
}

**2. Listar todos los proveedores**

- Método: GET
- Endpoint: /proveedores
- Descripción: Devuelve la lista completa de proveedores registrados en el sistema.

- Respuesta (200 - OK):
[
  {
    "id": 1,
    "nombre": "NestJS Distribuciones",
    "telefono": "3201234567",
    "correo": "contacto@nestjs.com"
  },
  {
    "id": 2,
    "nombre": "Proveedora Global",
    "telefono": "3156789012",
    "correo": "ventas@proveedora.com"
  }
]

**3. Buscar proveedor por ID**

- Método: GET
- Endpoint: /proveedores/:id
- Descripción: Busca un proveedor específico por su identificador numérico.

- Parámetros:
Nombre: id	Tipo: number	Descripción: Identificador del proveedor

- Respuesta (200 - OK):
{
  "id": 1,
  "nombre": "NestJS Distribuciones",
  "telefono": "3201234567",
  "correo": "contacto@nestjs.com"
}

- Respuesta (404 - Not Found):
{
  "message": "Proveedor no encontrado"
}

**4. Actualizar un proveedor**

- Método: PUT
- Endpoint: /proveedores/:id
- Descripción: Modifica los datos de un proveedor existente.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "nombre": "Distribuciones Actualizadas",
  "telefono": "3109876543",
  "correo": "nuevo@correo.com"
}

- Respuesta (200 - OK):
{
  "id": 1,
  "nombre": "Distribuciones Actualizadas",
  "telefono": "3109876543",
  "correo": "nuevo@correo.com",
  "updatedAt": "2025-11-02T16:40:00Z"
}

- Respuesta (404 - Not Found):
{
  "message": "Proveedor no encontrado"
}

**5. Eliminar un proveedor**

- Método: DELETE
- Endpoint: /proveedores/:id
- Descripción: Elimina un proveedor existente según su ID.

- Respuesta (200 - OK):
{
  "message": "Proveedor eliminado correctamente"
}

- Respuesta (404 - Not Found):
{
  "message": "Proveedor no encontrado"
}

**Tipos de datos (Entidad Proveedor)**

{
  id?: number;
  nombre: string;
  telefono: string;
  correo: string;
  createdAt?: Date;
  updatedAt?: Date;
}

---

# Módulo de Usuarios #

**1. Crear nuevo usuario**

- Método: POST
- Endpoint: /usuario/register
- Descripción: Registra un nuevo usuario en el sistema.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "nombre": "terry",
  "correo": "terry@mail.com",
  "contrasena": "terry123478",
  "rol": "admin"
}

- Respuesta exitosa (201 - Created):
{
  "id": 12,
  "nombre": "terry",
  "correo": "terry@mail.com",
  "rol": "admin",
  "createdAt": "2025-11-02T16:30:00Z"
}

- Respuesta (400 - Bad Request):
{
  "message": "El correo ya está registrado"
}

**2. Listar todos los usuarios**

- Método: GET
- Endpoint: /usuario/list
- Descripción: Devuelve la lista completa de usuarios registrados.

- Respuesta (200 - OK):
[
  {
    "id": 1,
    "nombre": "carolina",
    "correo": "caro@mail.com",
    "rol": "admin"
  },
  {
    "id": 2,
    "nombre": "terry",
    "correo": "terry@mail.com",
    "rol": "empleado"
  }
]

**3. Buscar usuario por ID**

- Método: GET
- Endpoint: /usuario/:id
- Descripción: Busca un usuario específico por su identificador numérico.

- Parámetros:
Nombre: id	Tipo: number	Descripción: Identificador del usuario

- Respuesta (200 - OK):
{
  "id": 12,
  "nombre": "terry",
  "correo": "terry@mail.com",
  "rol": "admin"
}

- Respuesta (404 - Not Found):
{
  "message": "Usuario 12 no encontrado"
}

**4. Actualizar un usuario**

- Método: PATCH
- Endpoint: /usuario/:id
- Descripción: Modifica los datos de un usuario existente.

## Headers: ##
- Content-Type: application/json

- Body (JSON):
{
  "nombre": "terrymoto"
}

- Respuesta (200 - OK):
{
  "id": 12,
  "nombre": "terrymoto",
  "correo": "terry@mail.com",
  "rol": "admin",
  "updatedAt": "2025-11-02T16:45:00Z"
}

- Respuesta (404 - Not Found):
{
  "message": "Usuario 12 no encontrado"
}

**5. Eliminar un usuario**

- Método: DELETE
- Endpoint: /usuario/:id
- Descripción: Elimina un usuario existente según su ID.

- Respuesta (200 - OK):
{
  "message": "Usuario 12 eliminado correctamente"
}

- Respuesta (404 - Not Found):
{
  "message": "Usuario 12 no encontrado"
}

**Tipos de datos (DTOs)**

- CreateUsuarioDto
{
  nombre: string;
  correo: string;
  contrasena: string;
  rol: string;
}

- UpdateUsuarioDto
{
  nombre?: string;
  correo?: string;
  contrasena?: string;
  rol?: string;
}

---

# Módulo de venta_producto #

**1. Agregar producto a una venta**

- Método: POST
- Endpoint: http://localhost:3000/venta-producto
- Descripción:
Agrega un producto específico a una venta existente indicando la cantidad deseada.

- Body (JSON):
{
  "idVenta": 1,
  "idProducto": 2,
  "cantidad": 3
}

- Ejemplo de respuesta (200 OK):
{
  "message": "Producto agregado a la venta correctamente",
  "ventaProducto": {
    "id": 10,
    "idVenta": 1,
    "idProducto": 2,
    "cantidad": 3,
    "createdAt": "2025-11-02T18:10:00.000Z"
  }
}

- Posibles errores:
404 Not Found: Si la venta o el producto no existen.
400 Bad Request: Si faltan campos obligatorios o la cantidad no es válida.

**2. Listar productos de una venta**

- Método: GET
- Endpoint: http://localhost:3000/venta-producto/:idVenta

- Ejemplo de uso:
GET http://localhost:3000/venta-producto/1

- Descripción:
Obtiene todos los productos asociados a una venta específica.

- Ejemplo de respuesta (200 OK):
[
  {
    "id": 10,
    "idVenta": 1,
    "idProducto": 2,
    "nombreProducto": "Café Americano",
    "cantidad": 3,
    "precioUnitario": 5000,
    "subtotal": 15000
  },
  {
    "id": 11,
    "idVenta": 1,
    "idProducto": 5,
    "nombreProducto": "Croissant",
    "cantidad": 2,
    "precioUnitario": 3500,
    "subtotal": 7000
  }
]

- Posibles errores:
404 Not Found: Si no hay productos asociados a esa venta.

**3. Eliminar un producto de una venta**

- Método: DELETE
Endpoint: http://localhost:3000/venta-producto/:id

- Ejemplo de uso:
DELETE http://localhost:3000/venta-producto/5

- Descripción:
Elimina un producto específico de una venta.

- Ejemplo de respuesta (200 OK):
{
  "message": "Producto eliminado de la venta correctamente",
  "deletedId": 5
}

- Posibles errores:
404 Not Found: Si el registro no existe.

---

# Módulo de ventas #

**1. Crear una venta**

- Método: POST
- Endpoint: http://localhost:3000/ventas/crear
- Descripción:
Crea una nueva venta asociada a un usuario, registrando el total de la transacción.

- Body (JSON):
{
  "total": 10000,
  "id_usuario": 16
}

- Ejemplo de respuesta (201 Created):
{
  "message": "Venta creada exitosamente",
  "venta": {
    "id": 4,
    "total": 10000,
    "id_usuario": 16,
    "fecha": "2025-11-02T20:05:00.000Z",
    "estado": "ACTIVA"
  }
}

- Posibles errores:
400 Bad Request: Si faltan campos requeridos (total, id_usuario).
404 Not Found: Si el usuario no existe.

**2. Listar todas las ventas**

- Método: GET
- Endpoint: http://localhost:3000/ventas/listar
- Descripción:
Devuelve un listado completo de todas las ventas registradas.

- Ejemplo de respuesta (200 OK):
[
  {
    "id": 1,
    "total": 25000,
    "id_usuario": 10,
    "fecha": "2025-10-31T15:00:00.000Z",
    "estado": "ACTIVA"
  },
  {
    "id": 2,
    "total": 18000,
    "id_usuario": 12,
    "fecha": "2025-11-01T09:30:00.000Z",
    "estado": "ANULADA"
  }
]

- Posibles errores:
404 Not Found: Si no existen ventas registradas.

**3. Obtener una venta por ID**

- Método: GET
- Endpoint: http://localhost:3000/ventas/:id

- Ejemplo de uso:
GET http://localhost:3000/ventas/4

- Descripción:
Obtiene los datos detallados de una venta específica por su identificador.

- Ejemplo de respuesta (200 OK):
{
  "id": 4,
  "total": 50000,
  "id_usuario": 16,
  "fecha": "2025-11-02T19:45:00.000Z",
  "estado": "ACTIVA"
}

- Posibles errores:
404 Not Found: Si la venta no existe.

**4. Actualizar una venta**

- Método: PATCH
- Endpoint: http://localhost:3000/ventas/:id

- Ejemplo de uso:
PATCH http://localhost:3000/ventas/4

- Body (JSON):
{
  "total": 50000
}

- Descripción:
Permite modificar los datos de una venta existente, como su total u otros campos definidos en el DTO.

- Ejemplo de respuesta (200 OK):
{
  "message": "Venta actualizada correctamente",
  "ventaActualizada": {
    "id": 4,
    "total": 50000,
    "id_usuario": 16,
    "fecha": "2025-11-02T19:45:00.000Z",
    "estado": "ACTIVA"
  }
}

- Posibles errores:
400 Bad Request: Si los datos enviados no son válidos.
404 Not Found: Si la venta no existe.

**5. Eliminar una venta**

- Método: DELETE
- Endpoint: http://localhost:3000/ventas/:id

- Ejemplo de uso:
DELETE http://localhost:3000/ventas/4

- Descripción:
Elimina (o marca como anulada, según la implementación del servicio) una venta existente por su identificador.

- Ejemplo de respuesta (200 OK):
{
  "message": "Venta eliminada correctamente",
  "deletedId": 4
}

- Posibles errores:
404 Not Found: Si la venta no existe.