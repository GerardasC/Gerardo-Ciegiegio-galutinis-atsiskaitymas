/* eslint-disable */
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import hero from '../../img/hero.jpg';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Hero = styled(Box)({
  height: '450px',
  backgroundImage: `url(${hero})`,
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const HeroText = styled(Box)(({ theme }) => ({
  paddingLeft: { sm: '40px'},
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}));

const HeroContainer = () => {
  const navigate = useNavigate();

  return (
    <Hero>
      <HeroText>
        <Typography variant='h3' sx={{ paddingBottom: '15px' }}>Introducing brand new OLED TV's</Typography>
        <Typography variant='h6' sx={{ textAlign: 'center' }}>Discover all the masterpieces, selected by Warehouse</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button 
            variant="contained" 
            size="large" 
            color="btnBlue"
            onClick={() => {
              navigate('/catalog');
            }}
            sx={{          
              width: '180px',
              height: '50px',
            }}
          >Shop Now</Button>
        </Box>
      </HeroText>
    </Hero>
  )
};

export default HeroContainer;
