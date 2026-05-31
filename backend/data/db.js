const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageUrl: String,
  categoryId: { type: Number, required: true },
  stock: { type: Number, default: 0 }
})

const categorySchema = new mongoose.Schema({
  id: Number,
  name: String
})

const Product = mongoose.model('Product', productSchema)
const Category = mongoose.model('Category', categorySchema)

module.exports = { Product, Category }