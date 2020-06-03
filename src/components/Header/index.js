import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import Cart from '../Cart';
import Filter from '../Filter';

import { Container, Navbar, NavLogo, Badge } from './styles';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.length);
  const [cartVisible, setCartVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <Container>
      <Navbar>
        <NavLogo to="/">FASHIONISTA</NavLogo>
        <div>
          <>
            <Badge onClick={() => setFilterVisible(!filterVisible)}>
              <FiSearch size={20} color="#000" />
            </Badge>
            <Badge
              cartItems={cartItems}
              onClick={() => setCartVisible(!cartVisible)}
            >
              <FiShoppingBag size={20} color="#000" />
            </Badge>
          </>
        </div>
      </Navbar>
      <Cart
        visible={cartVisible}
        handleBackClick={() => setCartVisible(!cartVisible)}
      />
      <Filter
        visible={filterVisible}
        handleBackClick={() => setFilterVisible(!filterVisible)}
      />
    </Container>
  );
}
