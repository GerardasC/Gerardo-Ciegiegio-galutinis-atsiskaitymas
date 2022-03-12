import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { selectCart } from '../../store/cart';

const NavbarCart = () => {
  const { cartItems } = useSelector(selectCart);

  const cartCount = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

  return (
    <Badge badgeContent={cartCount} color="secondary" sx={{ alignSelf: 'center' }}>
      <ShoppingCartIcon color="inherit" />
    </Badge>
  );
};

export default NavbarCart;
