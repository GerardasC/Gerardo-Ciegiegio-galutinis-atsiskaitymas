import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from './carousel-image';

const StyledCarousel = styled(Carousel)(({ theme }) => ({
  position: 'relative',
  ...theme.mixins.productCarousel,
}));

const ProductCarousel = ({ images, title }) => {
  const theme = useTheme();
  return (
    <StyledCarousel
      animation="slide"
      autoPlay={false}
      IndicatorIcon={<span />}
      strictIndexing
      indicatorContainerProps={{
        style: {
          position: 'absolute',
          bottom: 10,
          zIndex: 5,
        },
      }}
      indicatorIconButtonProps={{
        style: {
          height: 12,
          width: 12,
          margin: 3,
          backgroundColor: '#dfdfdf',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: 'secondary',
          height: 50,
          width: 50,
          opacity: 0.8,
        },
      }}
    >
      {
        images.map((image) => (
          <CarouselImage
            key={title}
            src={image}
          />
        ))
      }
    </StyledCarousel>
  );
};

export default ProductCarousel;
