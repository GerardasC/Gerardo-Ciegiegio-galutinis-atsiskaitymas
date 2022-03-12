import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import WideContainer from '../../components/wide-container';
import { ProductContext } from './context/product-context';

const CategoryButton = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  marginRight: '35px',
});

const GridPageCategories = () => {
  const { categories, selectedCategory, changeCategory } = useContext(ProductContext);

  return (
    <Box sx={{
      backgroundColor: 'white',
      borderBottom: '1px solid',
      borderColor: 'gridColor.main',
      cursor: 'pointer',
      mb: '40px',
    }}
    >
      <WideContainer>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
          {categories.map(({ id, title }) => (
            <React.Fragment key={title}>
              <CategoryButton
                color={id === selectedCategory ? 'secondary' : 'textColor.main'}
                onClick={() => changeCategory(id)}
              >
                {title}
              </CategoryButton>
            </React.Fragment>
          ))}
        </Toolbar>
      </WideContainer>
    </Box>
  );
};

export default GridPageCategories;
