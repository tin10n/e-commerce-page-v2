// server.js
const express = require('express');
const cors = require('cors');
// const db = require('./db'); // Optional - just to connect/test
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://e-commerce-page-v2-frontend.onrender.com',
  methods: ['GET', 'POST']
}));

// Use the route
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});

