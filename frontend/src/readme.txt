# MercApp - Catálogo de Productos

## Datos del Estudiante
- **Nombre:** Julio Tamayo
- **Carrera:** Software
- **Materia:** Aplicaciones Web
- **Universidad:** Universidad Politécnica Salesiana

## Funcionalidades
- API REST con Express (productos y categorías)
- CRUD completo de productos
- Catálogo con buscador y filtro por categoría
- Detalle de producto
- Carrito de compras con localStorage
- Formulario para crear y editar productos
- Lazy loading con Suspense
- Vue Router con rutas dinámicas

## Instrucciones de Uso

### Backend
```bash
cd backend
npm install
node index.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Rutas API
- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id
- GET /api/categories

## Rutas de la App
- / - Catalogo principal
- /product/:id - Detalle de producto
- /product/new - Crear producto
- /product/:id/edit - Editar producto
- /cart - Carrito
- /about - Acerca de
