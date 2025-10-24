import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/products.css';
import '../styles/slider.css';

const ProductSlider = ({ title = 'New Arrivals', limit = 7 }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/products/new?limit=${limit}`)
    // fetch(`/api/products?limit=${limit}&sort=newest`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load products');
        setLoading(false);
      });
  }, [limit]);

  if (loading) return <p className="product-slider__loading">Loading {title}...</p>;
  if (error) return <p className="product-slider__error">{error}</p>;

  return (
    <section className="product-slider" aria-label={title}>
      <h2 className="product-slider__title">{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        aria-live="polite"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <article className="product-slider__item">
              <img
                className="product-slider__image"
                src={product.image}
                alt={product.name}
              />
              <div className="product-slider__details">
                <h3 className="product-slider__name">{product.name}</h3>
                <p className="product-slider__price">${product.price}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSlider;
