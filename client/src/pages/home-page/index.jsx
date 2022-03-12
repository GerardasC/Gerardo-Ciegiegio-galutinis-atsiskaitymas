import React from 'react';
import { Box, Grid } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import WideContainer from '../../components/wide-container';
import PromoBlock from './promo-block';
import HeroContainer from './hero-container';
import OfferBlock from './offer-block';
import promoImg1 from '../../img/promotion1.png';
import promoImg2 from '../../img/promotion2.png';
import promoImg3 from '../../img/promotion3.png';

const HomePage = () => {
  const theme = useTheme();

  return (
    <>
      <HeroContainer />
      <WideContainer>
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={4}>
              <PromoBlock
                color={theme.palette.lightRed.main}
                promoImg={promoImg1}
                headerText="OLED TV&apos;s"
                bodyText="Exclusive offers on TV&apos;s until March 31."
                link="/catalog?category=1"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <PromoBlock
                color={theme.palette.lightBlue.main}
                promoImg={promoImg2}
                headerText="Speakers"
                bodyText="Explore our range of high-quality speakers."
                link="/catalog?category=2"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <PromoBlock
                color={theme.palette.lightGreen.main}
                promoImg={promoImg3}
                headerText="Headphones"
                bodyText="Discover our new headphones. Up to 25% Off !"
                link="/catalog?category=3"
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 10 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <OfferBlock
                color={theme.palette.lightRed.main}
                promoImg={promoImg1}
                headerText="Exclusive offers on JBL products"
                bodyText="We offer you a lot of discounts on all our JLB speakers, including JBL Clip 3, JBL Flip 4 or JBL Link 20 !"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <OfferBlock
                color={theme.palette.lightBlue.main}
                promoImg={promoImg2}
                headerText="SpeaFree shipping for all orders overs $80"
                bodyText="We got you covered ! We deliver your goods using UPS expedited shipping, free of charge"
              />
            </Grid>
          </Grid>
        </Box>

      </WideContainer>
    </>
  );
};

export default HomePage;
