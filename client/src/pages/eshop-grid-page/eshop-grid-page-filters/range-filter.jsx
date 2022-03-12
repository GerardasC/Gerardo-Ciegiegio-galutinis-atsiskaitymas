import React, { useState, useEffect } from 'react';
import {
  Box,
  Slider,
  TextField,
} from '@mui/material';
import FilterContainer from './filter-container';

const RangeFilter = ({
  name,
  min,
  max,
  currMin,
  currMax,
  changeFilter,
}) => {
  const [currRange, setCurrRange] = useState([currMin, currMax]);
  const [minInputValue, setMinInputValue] = useState(currMin);
  const [maxInputValue, setMaxInputValue] = useState(currMax);

  const handleMinInputValueChange = (e) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value)) {
      setMinInputValue(value);
    }
  };

  const handleMinInputBlur = () => {
    if (minInputValue >= min && minInputValue <= currMax) {
      changeFilter([minInputValue, currMax]);
    } else {
      setMinInputValue(currMin);
    }
  };

  const handleMaxInputValueChange = (e) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value)) {
      setMaxInputValue(value);
    }
  };

  const handleMaxInputBlur = () => {
    if (maxInputValue >= currMin && maxInputValue <= max) {
      changeFilter([currMin, maxInputValue]);
    } else {
      setMaxInputValue(currMax);
    }
  };

  useEffect(() => {
    setCurrRange([currMin, currMax]);
    setMinInputValue(currMin);
    setMaxInputValue(currMax);
  }, [currMin, currMax]);

  return (
    <FilterContainer name={name}>
      <Box sx={{ px: 1, mt: 1 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={currRange}
          valueLabelDisplay="auto"
          min={min}
          max={max}
          onChange={(_, range) => setCurrRange(range)}
          onChangeCommitted={(_, range) => changeFilter(range)}
        />
      </Box>
      <Box sx={{
        display: 'flex', justifyContent: 'center', gap: 2, mb: 1, pt: '5px',
      }}
      >
        <TextField
          size="small"
          label="Min"
          value={minInputValue}
          onChange={handleMinInputValueChange}
          onBlur={handleMinInputBlur}
        />
        <TextField
          size="small"
          label="Max"
          value={maxInputValue}
          onChange={handleMaxInputValueChange}
          onBlur={handleMaxInputBlur}
        />
      </Box>
    </FilterContainer>
  );
};

export default RangeFilter;
