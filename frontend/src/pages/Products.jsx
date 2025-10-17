import React, { useEffect, useState } from 'react';
import '../styles/products.css'; 
import '../styles/shared.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/products') // uses proxy!
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="products-container">
      {products.length === 0 && <p>No products found.</p>}
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            style={{ maxWidth: '300px' }}
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="product-price">${product.price}</p>
        </article>
      ))}
    </section>
  );
};

export default Products;

