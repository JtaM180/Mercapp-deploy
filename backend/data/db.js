//data/db.js
let categories =[
    {id: 1,name: "Electrónica"},
    {id: 2,name: "Ropa"},
    {id: 3,name: "Alimentos"},
    {id: 4,name: "Hogar"},
];

let products = [
  { id: 1, name: "Audífonos Bluetooth", description: "Sonido HD inalámbrico", price: 49.99, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop", categoryId: 1, stock: 15 },
  { id: 2, name: "Camiseta Deportiva", description: "Tela transpirable", price: 19.99, imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop", categoryId: 2, stock: 30 },
  { id: 3, name: "Café Orgánico 500g", description: "Café de altura ecuatoriano", price: 8.50, imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=200&fit=crop", categoryId: 3, stock: 50 },
  { id: 4, name: "Lámpara LED", description: "Ahorra energía, luz cálida", price: 24.99, imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=200&fit=crop", categoryId: 4, stock: 20 },
  { id: 5, name: "Teclado Mecánico", description: "Retroiluminado RGB", price: 89.99, imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop", categoryId: 1, stock: 10 },
  { id: 6, name: "Pantalón Jeans", description: "Corte slim fit", price: 35.00, imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=200&fit=crop", categoryId: 2, stock: 25 },
  { id: 7, name: "Chocolate Artesanal", description: "70% cacao puro", price: 5.99, imageUrl: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=300&h=200&fit=crop", categoryId: 3, stock: 100 },
  { id: 8, name: "Almohada Ergonómica", description: "Soporte cervical", price: 29.99, imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop", categoryId: 4, stock: 18 },
  { id: 9, name: "Mouse Inalámbrico", description: "Silencioso y preciso", price: 22.00, imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop", categoryId: 1, stock: 35 },
  { id: 10, name: "Jugo de Maracuyá", description: "Natural sin conservantes", price: 3.50, imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=200&fit=crop", categoryId: 3, stock: 60 },
];

let nextId = 11;

module.exports = {categories, products, nextId, setNextId: (n) =>  nextId = n };