import React from 'react';
import { Box, Typography } from '@mui/material';

const OfferBlock = ({
  promoImg, headerText, bodyText,
}) => (
  <Box sx={{
    minHeight: '168px',
    padding: '28px',
    display: 'flex',
    backgroundColor: 'backgroundColor.secondary',
    border: '1px solid',
    borderColor: 'gridColor.main',
  }}
  >
    <Box
      component="img"
      src={promoImg}
      sx={{
        width: '110px',
        marginRight: '30px',
        objectFit: 'contain',
      }}
    />
    <Box sx={{ color: 'textColor.main' }}>
      <Typography variant="h6" color="primary.main">{headerText}</Typography>
      <Typography sx={{ marginTop: '10px', marginBottom: '30px' }}>{bodyText}</Typography>
    </Box>
  </Box>
);

export default OfferBlock;
