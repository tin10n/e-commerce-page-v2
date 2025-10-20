// routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../db');

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


module.exports = router;
