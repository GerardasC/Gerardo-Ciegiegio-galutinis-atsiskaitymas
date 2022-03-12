import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const Footer = () => (
  <Box sx={{ mt: '80px', backgroundColor: 'backgroundColor.main' }}>
    <Divider />
    <Box sx={{ mt: '50px', textAlign: 'center' }}>
      <Typography color="primary.main" variant="h6" sx={{ mb: '10px' }}>ABOUT THE STORE</Typography>
      <Typography>
        Our mission statement is to provide the absolute best customer experience available
        in the Audio/Video industry without exception.
      </Typography>
      <Typography sx={{ mt: '30px', pb: '30px' }}>
        © 2022 Shop
      </Typography>
    </Box>
  </Box>
);

export default Footer;
