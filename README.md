#  Proyecto Taller 4 - Backend con NestJS

Este proyecto forma parte del **Taller 3**, desarrollado con **NestJS** bajo una arquitectura modular y orientada a controladores, servicios y guards.  
El objetivo principal es implementar endpoints funcionales, pruebas (testing) y documentación técnica automatizada.

---

##  Stack del proyecto

- **Framework:** NestJS (Node.js + TypeScript)
- **Base de datos:** MySQL / PostgreSQL (según configuración del `.env`)
- **ORM:** TypeORM
- **Lenguaje:** TypeScript
- **Testing:** Jest
- **Documentación:** Compodoc
- **Gestor de dependencias:** npm o yarn

---

##  Instalación del proyecto

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/carolinatovio1-cloud/CAROLINA-ISABEL-TOVIO.git
   cd taller3

2. Instalar las dependencias:
npm install

3. Crear el archivo de entorno en la raíz del proyecto con las variables necesarias:
      type: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: '****',
      host: 'localhost',
      database: 'social-media',

---

##  Ejecución del proyecto

- **Modo desarrollo:**
npm run start:dev

- **Modo producción:**
npm run start:prod

- **Verificar el servidor activo en:**
http://localhost:3000

---

##  Uso del proyecto

El proyecto contiene módulos organizados por entidades.
Cada módulo incluye:

- **Controller** → Define las rutas (endpoints)
- **Service** → Contiene la lógica del negocio
- **Entity** → Mapea las tablas de la base de datos
- **DTOs** → Validan y tipan los datos de entrada
- **Guards** → Protegen las rutas mediante autenticación/autorización

Ejemplo de endpoints básicos (según entidad):
GET    /api/entidad        # Listar todos
GET    /api/entidad/:id    # Obtener uno
POST   /api/entidad        # Crear nuevo
PUT    /api/entidad/:id    # Actualizar
DELETE /api/entidad/:id    # Eliminar

---

## Documentación de rutas (Swagger)

La documentación de las rutas se generó automáticamente con Swagger, usando los decoradores de NestJS como @ApiTags, @ApiOperation, @ApiResponse y @ApiBody.

Cómo visualizar la documentación Swagger

- **Inicia el servidor con:** npm run start:dev
- **Abre en tu navegador:** http://localhost:3000/api/docs

Allí encontrarás todos los endpoints documentados con su descripción, parámetros y ejemplos de request/response.

Ejemplo de endpoint documentado:
@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  @Post('register')
  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  createUser(@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.createUser(dto);
  }
}

- **Resultado esperado:**
Cuando el servidor esté corriendo, Swagger mostrará automáticamente todos los endpoints del módulo usuario (registro, login, listar, actualizar, eliminar) con sus ejemplos y descripciones.

---

##  Testing

- Para ejecutar las pruebas unitarias:
npm test

- Para generar el coverage (cobertura de código):
npm run test:cov

Las pruebas incluyen:
Controllers
Services / Providers
Guards
Documentación del código (Compodoc)

---

## Documentación técnica (Compodoc)

Para generar la documentación técnica completa del proyecto (controladores, servicios, módulos, entidades y dependencias):

npx compodoc -p tsconfig.json -s
Luego, abre en el navegador la URL: http://127.0.0.1:8080

---

##  Contribución al proyecto

Para aportar al proyecto:

- **Crear una rama para tu trabajo:**
git checkout -b 

- Realizar tus cambios y commits.

- **Hacer push de la rama:**
git push origin 

Crear un Pull Request hacia develop o main.

##  Roles

- Monica Ismelia Caña Reyes – Documentación técnica (CompoDoc)

- Carolina Isabel Tovio Albernia – Documentación de rutas(Swagger) y Readme

- Taliana Moreno Guzmán – Testing 
