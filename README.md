# MercApp - Catálogo de Productos

## Datos del Estudiante
- **Nombre:** Julio Tamayo
- **Carrera:** Software
- **Materia:** Aplicaciones Web
- **Universidad:** Universidad Politécnica Salesiana

## URLs de Producción
| Servicio | URL |
|---|---|
| 🌐 Frontend (Netlify) | *(completar tras deploy)* |
| ⚙️ Backend API (Railway) | *(completar tras deploy)* |
| 📄 Micrositio (GitHub Pages) | *(completar tras deploy)* |

## Funcionalidades
- API REST con Express (productos y categorías)
- CRUD completo de productos
- Catálogo con buscador y filtro por categoría
- Detalle de producto
- Carrito de compras con localStorage
- Formulario para crear y editar productos
- Vue Router con rutas dinámicas y fallback SPA
- CORS configurado por variable de entorno
- Health check en `/health`

## Arquitectura de Despliegue
```
[Usuario] → [Netlify - Vue 3 SPA]
                    ↓ HTTPS + CORS
              [Railway - Express API]
                    ↓ datos en memoria
              [In-Memory Store]
```

## Variables de Entorno

### Backend (Railway)
```
PORT=3000
FRONTEND_URL=https://tu-app.netlify.app
```

### Frontend (Netlify)
```
VITE_API_URL=https://tu-api.railway.app
```

## Ejecución Local

### Backend
```bash
cd backend
npm install
npm run dev       # con nodemon (auto-reload)
# o
npm start         # producción
```

### Frontend
```bash
cd frontend
npm install
npm run dev       # desarrollo en localhost:5173
npm run build     # genera /dist para producción
npm run preview   # previsualizar build
```

## Rutas API
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /health | Health check |
| GET | /api/products | Listar productos |
| GET | /api/products/:id | Detalle de producto |
| POST | /api/products | Crear producto |
| PUT | /api/products/:id | Editar producto |
| DELETE | /api/products/:id | Eliminar producto |
| GET | /api/categories | Listar categorías |

## Rutas de la App
- `/` - Catálogo principal (búsqueda + filtros)
- `/product/:id` - Detalle de producto
- `/product/new` - Crear producto
- `/product/:id/edit` - Editar producto
- `/cart` - Carrito de compras
- `/about` - Acerca de
