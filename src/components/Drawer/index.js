import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from '../Cart';
import Filter from '../Filter';
import { toggleCart, toggleFilter } from '../../store/modules/drawer/actions';

import { Container } from './styles';

function Drawer() {
  const dispatch = useDispatch();
  const cartVisible = useSelector((state) => state.drawer.cartVisible);
  const filterVisible = useSelector((state) => state.drawer.filterVisible);

  const handleCartBack = () => {
    dispatch(toggleCart());
  };
  const handleFilterBack = () => {
    dispatch(toggleFilter());
  };

  return (
    <Container visible={cartVisible || filterVisible}>
      {cartVisible && <Cart handleBackClick={handleCartBack} />}
      {filterVisible && <Filter handleBackClick={handleFilterBack} />}
    </Container>
  );
}

export default Drawer;
