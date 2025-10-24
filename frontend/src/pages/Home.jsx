import React from 'react';
import ProductSlider from '../components/ProductSlider';
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
          <ProductSlider title="" limit={7} />
          {/* Product cards will go here dynamically */}
      </section>
    </>
  );
};

export default Home;
