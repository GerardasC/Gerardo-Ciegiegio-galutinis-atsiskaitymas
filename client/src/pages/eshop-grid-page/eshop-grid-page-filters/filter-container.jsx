import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

const FilterContainer = ({ name, children }) => (
  <Box sx={{ mt: '20px' }}>
    <Typography sx={{
      textTransform: 'capitalize', color: 'primary.main', fontSize: 16, fontWeight: 500,
    }}
    >
      {name}
    </Typography>
    {children}
  </Box>
);

export default FilterContainer;
