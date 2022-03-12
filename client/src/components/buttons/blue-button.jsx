import React from 'react';
import Button from '@mui/material/Button';

const BlueButton = ({ title, onClick, color }) => (
  <Button
    variant="contained"
    size="large"
    color={color}
    sx={{
      borderRadius: 0,
    }}
    onClick={onClick}
  >
    {title}
  </Button>
);

export default BlueButton;
