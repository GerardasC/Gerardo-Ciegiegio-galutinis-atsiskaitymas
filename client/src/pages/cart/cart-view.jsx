import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Grid } from '@mui/material';
import { selectCart } from '../../store/cart';
import ComponentBox from '../../components/component-box';
import WideContainer from '../../components/wide-container';
import CartTable from './cart-table';
import CartCheckoutSection from './cart-checkout-section';

const CartView = () => {
  const { cartItems } = useSelector(selectCart);
  return (
    <WideContainer>
      <Box sx={{ mt: 6 }}>
        <Box component="h2" color="primary.main" sx={{ mb: '12px' }}>My cart</Box>
        <Typography color="textColor.main">You are eligible for free shipping!</Typography>
      </Box>
      <Box mt="35px" sx={{ position: 'relative' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <CartTable cartItems={cartItems} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ComponentBox>
              <CartCheckoutSection />
            </ComponentBox>
          </Grid>
        </Grid>
      </Box>
    </WideContainer>
  );
};

export default CartView;
