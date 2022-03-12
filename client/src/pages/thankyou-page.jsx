import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import routes from '../routing/routes';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: 20 }}>
      <Typography color="primary" sx={{ textAlign: 'center', fontSize: 40 }}>
        Thank You for your purchase
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          color="btnBlue"
          sx={{
            mt: '10px',
            borderRadius: 0,
            color: 'white',
            width: '180px',
            height: '50px',
          }}
          onClick={() => navigate(routes.EshopGridPage)}
        >
          Go back
        </Button>
      </Box>
    </Box>
  );
};

export default ThankYouPage;
