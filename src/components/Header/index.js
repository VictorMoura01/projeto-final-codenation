import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Cart from '../Cart';

import './style.css';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.length);
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }
  return (
    <header className="nav__container">
      <nav className="nav__bar">
        <Link className="nav__logo" to="/">
          FASHIONISTA
        </Link>
        <div>
          <button className="nav__action-button" type="button">
            <FiSearch size={20} color="#000" />
          </button>
          <button
            className="nav__action-button"
            type="button"
            cartItems={cartItems}
            onClick={handleToggleVisible}
          >
            <FiShoppingBag size={20} color="#000" />
          </button>
        </div>
      </nav>
      <Cart visible={visible} />
    </header>
  );
}
