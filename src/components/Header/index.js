import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import { Container, Navbar, NavLogo, Badge } from './styles';

import { toggleCart, toggleFilter } from '../../store/modules/drawer/actions';

export default function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  const handleFilterClick = () => {
    dispatch(toggleFilter());
  };

  return (
    <Container>
      <Navbar>
        <NavLogo to="/">FASHIONISTA</NavLogo>
        <div>
          <>
            <Badge onClick={handleFilterClick}>
              <FiSearch size={20} color="#000" />
            </Badge>
            <Badge cartItems={totalItems} onClick={handleCartClick}>
              <FiShoppingBag size={20} color="#000" />
            </Badge>
          </>
        </div>
      </Navbar>
    </Container>
  );
}
