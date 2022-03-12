import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortingFilterButton from './sorting-filter-button';
import FiltersSidebar from './filters-sidebar';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '25px',
  borderTop: '1px solid',
  borderRight: '1px solid',
  borderLeft: '1px solid',
  color: theme.palette.textColor.main,
  borderColor: theme.palette.gridColor.main,
}));

const SortingFilterMenu = ({ products }) => {
  const [open, setOpen] = useState(false);
  const toggleSlider = () => {
    setOpen(!open);
  };
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });

  const theme = useTheme();

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    if (dimensions.width > theme.breakpoints.values.md) {
      setOpen(false);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions]);

  return (
    <>
      <FiltersSidebar toggleSlider={toggleSlider} open={open} setOpen={setOpen} />
      <StyledBox sx={{ display: 'flex', justifyContent: 'space-between', height: '72px' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ display: { xs: 'none', sm: 'block' }, mr: '25px' }}>
            Products:&nbsp;
            {products.length}
          </Typography>
          <Box
            sx={{ display: { xs: 'flex', md: 'none', alignItems: 'center' }, cursor: 'pointer' }}
            onClick={toggleSlider}
          >
            <FilterAltOutlinedIcon fontSize="medium" sx={{ display: 'flex' }} />
            <Typography sx={{ display: { xs: 'none', xss: 'flex' }, alignItems: 'center', pl: 1 }} fontSize="15px">Filter</Typography>
          </Box>
        </Box>
        <SortingFilterButton />
      </StyledBox>
    </>
  );
};

export default SortingFilterMenu;
