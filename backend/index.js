const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const productRoutes = require('./routes/products')
const categoryRoutes = require('./routes/categories')

const app = express()
const PORT = process.env.PORT || 3000

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:4173',
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) return callback(null, true)
    callback(new Error('Not allowed by CORS'))
  }
}))

app.use(express.json())

// Conectar MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Error MongoDB:', err))

// Health check
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  res.json({ status: 'ok', database: dbStatus, timestamp: new Date().toISOString() })
})

app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})