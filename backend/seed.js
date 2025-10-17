// Seed Script
// Loading products.json into MySQL
const fs = require('fs');
const mysql = require('mysql2');

const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', 
  database: 'sznProducts'        
});

products.forEach((product) => {
  const { name, description, price, image } = product;

  const sql = `INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)`;

  connection.query(sql, [name, description, price, image], (err) => {
    if (err) console.error(err);
  });
});

console.log('Products seeded!');
connection.end();
