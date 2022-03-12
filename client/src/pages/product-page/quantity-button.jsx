import React from 'react';
import styled from '@emotion/styled';
import { TextField, Box, Button } from '@mui/material';

const QuantitySelectorButton = styled(Button)({
  borderRadius: 0,
  minWidth: '42px',
});

const QuantityField = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '0',
  },
  '& .MuiInputBase-input': {
    textAlign: 'center',
  },
  width: '64px',
}));

const QuantityButton = ({
  inStock, quantity, setQuantity,
}) => {
  const increaseQuantity = () => {
    if (quantity === inStock) return;
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <Box sx={{ display: 'inline-flex' }}>
      <QuantitySelectorButton disabled={!inStock} variant="outlined" size="small" onClick={decreaseQuantity}>
        -
      </QuantitySelectorButton>
      <QuantityField disabled={!inStock} id="filled-basic" size="small" style={{ borderRadius: 0 }} value={quantity} />
      <QuantitySelectorButton disabled={!inStock} variant="outlined" onClick={increaseQuantity}>
        +
      </QuantitySelectorButton>
    </Box>
  );
};

export default QuantityButton;
