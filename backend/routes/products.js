//routes/products.js
const express = require('express');
const router = express.Router();
const db = require("../data/db");

// GET todos los productos
router.get("/", (req, res) => {
  res.json(db.products);
});

// POST crear producto
router.post("/", (req, res) => {
  const { name, description, price, imageUrl, categoryId, stock } = req.body;
  if (!name || !price || !categoryId) {
    return res.status(400).json({ error: "name, price y categoryId son obligatorios" });
  }
  if (price <= 0) return res.status(400).json({ error: "El precio debe ser mayor a 0" });
  if (stock < 0) return res.status(400).json({ error: "El stock no puede ser negativo" });

  const newProduct = { id: db.nextId, name, description, price, imageUrl, categoryId, stock: stock || 0 };
  db.setNextId(db.nextId + 1);
  db.products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT editar producto
router.put("/:id", (req, res) => {
  const index = db.products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Producto no encontrado" });

  db.products[index] = { ...db.products[index], ...req.body, id: db.products[index].id };
  res.json(db.products[index]);
});

// DELETE borrar producto
router.delete("/:id", (req, res) => {
  const index = db.products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Producto no encontrado" });

  db.products.splice(index, 1);
  res.json({ message: "Producto eliminado" });
});

module.exports = router;