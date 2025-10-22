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
      <h1 className="heading--title">Products</h1>
      <section className="item--grid"> 
      {products.length === 0 && <p>No products found.</p>}
      {products.map((product) => (
        <article key={product.id} className="item">
          <div className="item--img">
            <img src={product.image} alt={product.name} />
            <div className="item--action">
            </div>
          </div>
            <div className="item--details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
        </article>
      ))}
    </section>
  </section>
  );
};

export default Products;