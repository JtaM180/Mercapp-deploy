const express = require('express')
const router = express.Router()
const { Product } = require('../data/db')

// GET todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET producto por ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' })
    res.json(product)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST crear producto
router.post('/', async (req, res) => {
  try {
    const { name, description, price, imageUrl, categoryId, stock } = req.body
    if (!name || !price || !categoryId) {
      return res.status(400).json({ error: 'name, price y categoryId son obligatorios' })
    }
    if (price <= 0) return res.status(400).json({ error: 'El precio debe ser mayor a 0' })
    if (stock < 0) return res.status(400).json({ error: 'El stock no puede ser negativo' })

    const product = new Product({ name, description, price, imageUrl, categoryId, stock: stock || 0 })
    await product.save()
    res.status(201).json(product)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// PUT editar producto
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' })
    res.json(product)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// DELETE eliminar producto
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' })
    res.json({ message: 'Producto eliminado' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router