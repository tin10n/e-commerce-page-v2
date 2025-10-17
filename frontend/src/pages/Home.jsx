import React from 'react';
import '../styles/style.css';
import '../styles/shared.css';

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <img
          id="main-img"
          src="/images/sl4.avif"
          alt="Model In Front Of Ice Cream Place"
        />
        <div className="hero--content">
          <h1>Home of Luxury</h1>
          <p>Designed for Elegance and Distinction</p>
          <a href="/products" className="hero--btn">Explore More</a>
        </div>
      </section>

      <section className="product__grid">
        <h2 className="product__grid--title">New Arrivals</h2>
        <div className="product__grid--container" id="products__grid--items">
          {/* Product cards will go here dynamically */}
        </div>
      </section>
    </>
  );
};

export default Home;
