// routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Products 
router.get('/', async (req, res) => {
  try {
    const client = await db.connect();    
    const result = await client.query('SELECT * FROM products');    
    client.release();
    res.json(result.rows);
  } catch (err) {
    console.error(" Query error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Slider
  router.get('/new', async (req, res) => {
  const limit = parseInt(req.query.limit) || 7;
    try {
    const client = await db.connect();
    // Grabbing 7 products
    const query = `
      SELECT id, name, type, description, price, image
      FROM products
      LIMIT $1
    `;
    const result = await client.query(query, [limit]);
    client.release();
    res.json(result.rows);
  } catch (err) {
    console.error("New arrivals query error:", err.message);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
