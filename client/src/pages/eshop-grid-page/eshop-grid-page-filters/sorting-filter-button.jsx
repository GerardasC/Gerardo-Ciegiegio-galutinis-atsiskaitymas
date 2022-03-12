import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ProductContext } from '../context/product-context';

const StyledBox = styled(FormControl)(({ theme }) => ({
  color: theme.palette.textColor.main,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
  '& .MuiSelect-select': {
    color: theme.palette.textColor.main,
  },
}));

const SortingFilterButton = () => {
  const { option, setOption } = useContext(ProductContext);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography>Sort:</Typography>
      <StyledBox sx={{ minWidth: 120 }}>
        <Select
          value={option}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={1}>Relevance</MenuItem>
          <MenuItem value={2}>Price, low to high</MenuItem>
          <MenuItem value={3}>Price, high to low</MenuItem>
        </Select>
      </StyledBox>
    </Box>
  );
};

export default SortingFilterButton;
