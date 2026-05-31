# MercApp - Catálogo de Productos

## Datos del Estudiante
- **Nombre:** Julio Tamayo
- **Carrera:** Software
- **Materia:** Aplicaciones Web
- **Universidad:** Universidad Politécnica Salesiana

## URLs de Producción
| Servicio | URL |
|---|---|
| 🌐 Frontend (Netlify) | https://chic-cranachan-97e1fe.netlify.app |
| ⚙️ Backend API (Railway) | https://mercapp-deploy-production.up.railway.app |
| 📄 Micrositio (GitHub Pages) | https://jtam180.github.io/Mercapp-deploy |

## Funcionalidades
- API REST con Express y MongoDB Atlas (productos y categorías)
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
                    ↓ MongoDB Atlas (Mongoose)
              [MongoDB Atlas - Base de datos]
```

## Variables de Entorno

### Backend (Railway)
```
PORT=3000
MONGODB_URI=mongodb+srv://...
FRONTEND_URL=https://chic-cranachan-97e1fe.netlify.app
```

### Frontend (Netlify)
```
VITE_API_URL=https://mercapp-deploy-production.up.railway.app
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
| POST | /api/categories | Crear categoría |

## Rutas de la App
- `/` - Catálogo principal (búsqueda + filtros)
- `/product/:id` - Detalle de producto
- `/product/new` - Crear producto
- `/product/:id/edit` - Editar producto
- `/cart` - Carrito de compras
- `/about` - Acerca de