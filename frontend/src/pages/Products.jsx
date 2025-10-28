import React, { useEffect, useState } from 'react';
import '../styles/products.css'; 
import '../styles/shared.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [showFilters, setShowFilters] = useState(false); // Mobile dropdown toggle
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  // Fetch products
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`) // uses proxy!
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
  }, [API_BASE_URL]);

  // Filter logic
  useEffect(() => {
    let filtered = [...products];

    if (selectedType !== 'All') {
      filtered = filtered.filter(p => p.type === selectedType);
    }

    if (priceRange !== 'All') {
      filtered = filtered.filter(p => {
        const price = parseFloat(p.price);
        if (priceRange === 'under1000') return price < 1000;
        if (priceRange === '1000to1500') return price >= 1000 && price <= 1500;
        if (priceRange === 'over1500') return price > 1500;
        return true;
      });
    }

    setFilteredProducts(filtered);
  }, [selectedType, priceRange, products]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

   return (
    <main className="products-page">
      {/* ---------- MOBILE FILTER TOGGLE ---------- */}
      <button
        className="filter-toggle"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? 'Hide Filters' : 'Filter Products'}
      </button>

      {/* ---------- FILTER SECTION ------------ */}
     <section
  className={`filter-dropdown ${showFilters ? 'show' : 'hide'}`}
>
    <div className="filter-group">
      <h3>Type</h3>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="All">All</option>
        <option value="tote">Tote</option>
        <option value="basket">Basket</option>
        <option value="hobo">Hobo</option>
        <option value="shoulder">Shoulder</option>
      </select>
    </div>

  <div className="filter-group">
    <h3>Price</h3>
    <select
      value={priceRange}
      onChange={(e) => setPriceRange(e.target.value)}
    >
      <option value="All">All</option>
      <option value="under1000">Under $1000</option>
      <option value="1000to1500">$1000 - $1500</option>
      <option value="over1500">Over $1500</option>
    </select>
  </div>
</section>

    {/* ---------- RIGHT PRODUCTS GRID ---------- */}
    <section className="products-container"> 
      <h1 className="heading--title">Products</h1>
      <section className="item--grid"> 
      {filteredProducts.length === 0 && <p>No products found.</p>}
      {filteredProducts.map((product) => (
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
  </main>
  );
};

export default Products;