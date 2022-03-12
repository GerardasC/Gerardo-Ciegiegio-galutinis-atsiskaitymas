import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const PromoBlock = ({
  color, promoImg, headerText, bodyText,
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      height: '310px',
      backgroundColor: `${color}`,
      padding: '26px 30px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '5px',
    }}
    >
      <Box sx={{ color: 'white', position: 'relative', zIndex: 1 }}>
        <Typography variant="h5">{headerText}</Typography>
        <Typography sx={{ marginTop: '10px', marginBottom: '30px', fontSize: '17px' }}>{bodyText}</Typography>
      </Box>
      <Button
        variant="contained"
        size="large"
        color="btnWhite"
        sx={{
          color: `${color}`,
          zIndex: 1,
          width: '180px',
          height: '50px',
        }}
        onClick={() => {
          navigate('/catalog');
        }}
      >
        {`Shop ${headerText}`}
      </Button>
      <Box
        component="img"
        src={promoImg}
        sx={{
          width: '250px', position: 'absolute', bottom: '0', right: '0',
        }}
      />
    </Box>
  );
};

export default PromoBlock;
