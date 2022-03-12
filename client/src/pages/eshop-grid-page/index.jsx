import React from 'react';
import ProductProvider from './context/product-context';
import GridPage from './grid-page';

const EshopGridPage = () => (
  <ProductProvider>
    <GridPage />
  </ProductProvider>
);

export default EshopGridPage;
