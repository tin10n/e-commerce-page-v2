// db Connection
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT ? Number(process.env.PGPORT) : 5432,
  ssl: {
    rejectUnauthorized: false // Required for Render
  }
  });

pool.query('SELECT COUNT(*) FROM products', (err, res) => {
  if (err) {
    console.error(' DB test failed:', err);
  } else {
    console.log(` Products count: ${res.rows[0].count}`);
  }
});

module.exports = pool;
