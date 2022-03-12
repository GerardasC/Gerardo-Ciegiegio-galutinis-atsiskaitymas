import React, { useContext } from 'react';
import { Box } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import CatalogGridPageGrid from './eshop-grid-page-grid';
import EshopGridPageCard from './eshop-grid-page-card';
import WideContainer from '../../components/wide-container';
import EshopGridPageFilterMenu from './eshop-grid-page-filters/grid-page-filters';
import SortingFilterMenu from './eshop-grid-page-filters/sorting-filter-menu';
import GridPageCategories from './grid-page-categories';
import { ProductContext } from './context/product-context';
import ComponentBox from '../../components/component-box';

const GridPage = () => {
  const {
    products, lazyLoad, hasMore, pageNr, setPageNr,
  } = useContext(ProductContext);

  const fetchData = () => {
    lazyLoad(12, pageNr);
    setPageNr(pageNr + 1);
  };

  return (
    <Box>
      <GridPageCategories />
      <WideContainer>
        <Box sx={{
          display: 'flex', alignItems: 'flex-start', mt: 3, gap: '30px',
        }}
        >
          <Box sx={{
            display: { xs: 'none', md: 'block' },
          }}
          >
            <ComponentBox minW="250px" maxW="250px">
              <EshopGridPageFilterMenu />
            </ComponentBox>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <SortingFilterMenu products={products} />

            <InfiniteScroll
              dataLength={products.length}
              next={fetchData}
              hasMore={hasMore}
            >
              <CatalogGridPageGrid>
                {products.map((product) => (
                  <EshopGridPageCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </CatalogGridPageGrid>
            </InfiniteScroll>

          </Box>
        </Box>
      </WideContainer>
    </Box>
  );
};

export default GridPage;
