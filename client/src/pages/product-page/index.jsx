import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import WideContainer from '../../components/wide-container';
import APIService from '../../services/api-service';
import ProductCarousel from './product-carousel';
import ComponentBox from '../../components/component-box';
import ProductPageInfo from './product-page-info';
import PrductPageDescription from './product-page-description';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const fetchedProduct = await APIService.fetchProduct(id);
      setProduct(fetchedProduct);
    })();
  }, []);

  return (
    <WideContainer>
      <Box mt="40px" sx={{ position: 'relative' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ComponentBox>
              {product && <ProductCarousel {...product} />}
            </ComponentBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <ComponentBox>
                  {product && <ProductPageInfo product={product} />}
                </ComponentBox>
              </Grid>
              <Grid item xs={12}>
                <ComponentBox>
                  {product && <PrductPageDescription description={product.description} />}
                </ComponentBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </WideContainer>

  );
};

export default ProductPage;
