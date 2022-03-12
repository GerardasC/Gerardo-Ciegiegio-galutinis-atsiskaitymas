import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import WideContainer from '../../components/wide-container';
import ComponentBox from '../../components/component-box';
import CheckoutForm from './checkout-form';
import CheckoutCartTable from './checkout-cart-table';
import { selectCart } from '../../store/cart';

const CheckoutPage = () => {
  const { cartItems } = useSelector(selectCart);

  const cartCount = cartItems.reduce((quantity, item) => {
    const result = item.price * item.quantity;
    if (item.quantity > 1) {
      return quantity + result;
    }
    return quantity + result;
  }, 0);

  const orderList = cartItems.reduce((prev, x) => {
    prev.push({ productId: x.id, quantity: x.quantity });
    return prev;
  }, []);

  return (
    <Box sx={{ mt: 5 }}>
      <WideContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ComponentBox>
              <Typography variant="h5" color="primary" sx={{ mt: 1, mb: 2 }}>
                Shipping details
              </Typography>
              <Box>
                <CheckoutForm orderList={orderList} />
              </Box>
            </ComponentBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <CheckoutCartTable cartItems={cartItems} />
            <Box display="flex" justifyContent="flex-end" sx={{ p: 2 }}>
              <Box fontSize="21px" fontWeight={500} color="primary.main">Total:&nbsp;&nbsp;</Box>
              <Box fontSize="21px" fontWeight={500} color="primary.main">
                {cartCount.toFixed(2)}
                &nbsp;
                EUR
              </Box>
            </Box>
          </Grid>
        </Grid>
      </WideContainer>
    </Box>
  );
};

export default CheckoutPage;
