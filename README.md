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

##  Testing

- Para ejecutar las pruebas unitarias:
npm run test

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

- Monica Ismelia Caña Reyes – Documentación CompoDoc

- Carolina Isabel Tovio Albernia – Documentación de rutas y readme

- Taliana Moreno Guzmán – Testing 
