import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import store from '../../store';
import * as cartSlice from '../../store/cart';

const GridCard = styled(Box)(({ theme }) => ({
  padding: '20px',
  boxShadow: `1px 1px ${theme.palette.gridColor.main}`,
  display: 'flex',
  flexDirection: 'column',
}));

const EshopGridPageCard = ({ product }) => {
  const addToCart = () => {
    const reduxAction = cartSlice.addToCart({ ...product, quantity: 1 });
    store.dispatch(reduxAction);
  };

  const navigate = useNavigate();
  return (
    <GridCard>
      <Box sx={{ p: '10px', mb: '12px', mt: '25px' }}>
        <Box
          component="img"
          src={product.images[0]}
          sx={{
            width: '100%', maxHeight: '200px', objectFit: 'scale-down', cursor: 'pointer',
          }}
          onClick={() => navigate(`/catalog/${product.id}`)}
        />
      </Box>
      <Box>
        <Typography sx={{
          color: 'textColor.main', fontSize: 14, mb: '7px', textTransform: 'uppercase',
        }}
        >
          {product.brand}
        </Typography>
        <Typography
          color="primary.main"
          fontWeight="500"
          sx={{ cursor: 'pointer' }}
          mb="12px"
          onClick={() => navigate(`/catalog/${product.id}`)}
        >
          {product.title}
        </Typography>
        <Typography fontSize="21px" color="secondary.main">
          €&nbsp;
          {product.price.toFixed(2)}
        </Typography>
        <Box mt="8px">
          {
            product.inStock
              ? (
                <Typography color="green" fontWeight="500" fontSize="13px">
                  •  In stock,&nbsp;
                  {product.inStock}
                </Typography>
              )
              : <Typography color="red" fontWeight="500" fontSize="13px">•  Not available</Typography>
          }
        </Box>
      </Box>
      <Box sx={{ mt: 'auto', textAlign: 'end' }}>
        <IconButton color="textColor" aria-label="add to shopping cart" disabled={!product.inStock} onClick={() => addToCart()}>
          <AddShoppingCartIcon />
        </IconButton>
      </Box>
    </GridCard>
  );
};

export default EshopGridPageCard;
