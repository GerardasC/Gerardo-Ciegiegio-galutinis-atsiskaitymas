import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { selectCart } from '../../store/cart';
import routes from '../../routing/routes';

const CartCheckoutSection = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector(selectCart);

  const cartCount = cartItems.reduce((quantity, item) => {
    const result = item.price * item.quantity;
    if (item.quantity > 1) {
      return quantity + result;
    }
    return quantity + result;
  }, 0);

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box fontSize="21px" fontWeight={500} color="primary.main">Total: </Box>
        <Box fontSize="21px" fontWeight={500} color="primary.main">
          {cartCount}
          &nbsp;
          EUR
        </Box>
      </Box>
      <Typography sx={{ mt: '40px', color: 'textColor.main' }}>Tax included. Shipping calculated at checkout</Typography>
      <Button
        disabled={!cartItems.length}
        onClick={() => navigate(routes.CheckoutPage)}
        sx={{
          mt: '30px',
          borderRadius: 0,
          color: 'white',
          width: '100%',
          height: '50px',
        }}
        variant="contained"
        size="large"
        color="btnBlue"
      >
        Checkout
      </Button>
    </>
  );
};

export default CartCheckoutSection;
