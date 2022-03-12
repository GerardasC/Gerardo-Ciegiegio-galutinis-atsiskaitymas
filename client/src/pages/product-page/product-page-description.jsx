import React from 'react';
import { Typography } from '@mui/material';

const PrductPageDescription = ({ description }) => (
  <>
    <Typography
      variant="h5"
      sx={{
        variant: 'h4',
        width: '80px',
        color: 'primary.main',
        fontWeight: 500,
        marginBottom: '17px',
      }}
    >
      Description
    </Typography>
    <Typography sx={{ color: 'textColor.main', lineHeight: 2 }}>{description}</Typography>
  </>
);

export default PrductPageDescription;
