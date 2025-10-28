import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="shared__footer">
      <div className="col__1">
        <h2>USEFUL LINKS</h2>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="col__2">
        <h2>NEWSLETTER</h2>
        <form>
          <input type="email" placeholder="Your Email Address" required />
          <br />
          <button type="submit">SUBSCRIBE NOW</button>
        </form>
      </div>

      <div className="col__3">
        <h2 id="h2-address">Physical Address:</h2>
        <address>
          1423 Autumn Tower 19 E 57th St,<br />
          New York, NY 10022
        </address>
        <p id="copyright">©2025 SZN: Autumn. All rights reserved.</p>
        <div className="social__links" aria-label="Social Media Links">
          <a href="https://www.snapchat.com/" aria-label="Snapchat"><i className="fa-brands fa-snapchat"></i></a>
          <a href="https://www.facebook.com/" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.x.com/" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.tiktok.com/explore" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
          <a href="https://www.pinterest.com/" aria-label="Pinterest"><i className="fa-brands fa-pinterest"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
