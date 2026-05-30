// index.js
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/categories");

const app = express();
const PORT = process.env.PORT || 3000;

// CORS: permite el origen del frontend (variable de entorno) o localhost en dev
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:4173",
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origin (Postman, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  }
}));

app.use(express.json());

// Health check (requerido por la rúbrica)
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

// Ruta 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
