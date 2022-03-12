import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import APIService from '../../services/api-service';

const StyledBox = styled(FormControl)(({ theme }) => ({
  color: theme.palette.textColor.main,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
  '& .MuiSelect-select': {
    color: theme.palette.textColor.main,
  },
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderTop: 0,
  borderBottom: 0,
  borderLeft: '1px',
  borderRight: '1px',
  borderColor: theme.palette.gridColor.main,
  borderStyle: 'solid',
  height: '38px',
}));

const SearchBarCategoryPicker = () => {
  const [category, setCategory] = useState([]);
  const [option, setOption] = useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  useEffect(() => {
    (async () => {
      const categoryData = await APIService.fetchCategories();
      setCategory(categoryData);
      setOption(1);
    })();
  }, []);

  return (
    <StyledContainer sx={{
      display: 'flex',
      alignItems: 'center',
      borderTop: 0,
      borderBottom: 0,
      borderLeft: '1px',
      borderRight: '1px',
      borderColor: 'grey',
      borderStyle: 'solid',
      height: '38px',
    }}
    >
      <StyledBox>
        <Select
          value={category && option}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {
            category.map((x) => (
              <MenuItem value={x.id} key={x.title}>{x.title}</MenuItem>
            ))
          }
        </Select>
      </StyledBox>
    </StyledContainer>
  );
};

export default SearchBarCategoryPicker;
