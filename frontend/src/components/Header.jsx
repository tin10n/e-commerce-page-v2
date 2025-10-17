import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="shared__header">
      <Link to="/">
        <img id="header__logo--link" src="/images/logo.png" alt="SZN Logo" />
      </Link>
      <nav className="shared__nav" aria-label="Main Navigation">
        <ul className="shared__ul">
          <li className="link__page"><Link to="/">Home</Link></li>
          <li className="link__page"><Link to="/products">Products</Link></li>
          <li className="link__page"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

