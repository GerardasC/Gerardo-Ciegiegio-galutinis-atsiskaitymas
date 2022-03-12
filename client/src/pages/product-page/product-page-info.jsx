import React, { useState } from 'react';
import {
  Typography, Box, Divider, Button,
} from '@mui/material';
import styled from '@emotion/styled';
import store from '../../store';
import * as cartSlice from '../../store/cart';
import QuantityButton from './quantity-button';

const TitleName = styled(Typography)(({ theme }) => ({
  variant: 'h4',
  width: '80px',
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: '15px',

}));

const TitleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px',
});

const ProductPageInfo = ({ product }) => {
  const [qty, setQty] = useState(1);

  const addToCart = () => {
    const reduxAction = cartSlice.addToCart({ ...product, quantity: qty });
    store.dispatch(reduxAction);
  };

  return (
    <>
      <Box>
        <Typography variant="h4" color="primary" fontWeight="500" sx={{ mb: '10px' }}>{product.title}</Typography>
      </Box>
      <Divider sx={{ my: '24px' }} />
      <TitleContainer>
        <TitleName>Price:</TitleName>
        <Typography fontSize="25px" color="secondary">
          €&nbsp;
          {product.price}
        </Typography>
      </TitleContainer>
      <TitleContainer>
        <TitleName>Stock:</TitleName>
        <Box>
          {
            product.inStock
              ? (
                <Typography color="green" fontWeight="500" fontSize="15px">
                  •  In stock,&nbsp;
                  {product.inStock}
                </Typography>
              )
              : <Typography color="red" fontWeight="500" fontSize="15px">•  Not available</Typography>
          }
        </Box>
      </TitleContainer>
      <TitleContainer>
        <TitleName>Quantity:</TitleName>
        <QuantityButton
          inStock={product.inStock}
          id={product.id}
          quantity={qty}
          setQuantity={setQty}
        />
      </TitleContainer>
      <Button
        variant="contained"
        size="large"
        color="btnBlue"
        disabled={!product.inStock}
        sx={{
          mt: '10px',
          borderRadius: 0,
          color: 'white',
          width: '180px',
          height: '50px',
        }}
        onClick={addToCart}
      >
        Add To Cart
      </Button>
    </>
  );
};

export default ProductPageInfo;
