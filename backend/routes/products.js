// routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  // console.log("📥 GET /api/products hit");

  try {
    const client = await db.connect();
    // console.log("✅ Database connected");
    
    const result = await client.query('SELECT * FROM products');
    // console.log("✅ Query success, found", result.rows.length, "products");
    
    client.release();
    res.json(result.rows);
  } catch (err) {
    console.error(" Query error:", err.message);
    // console.error("Stack trace:", err.stack);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
