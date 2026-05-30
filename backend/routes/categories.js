// routes/categories.js
const express = require("express");
const router = express.Router();
const db = require("../data/db");

router.get("/", (req, res) => {
  res.json(db.categories);
});

module.exports = router;