import React from 'react';
import {
  Autocomplete,
  TextField,
  Typography,
  Box,
  Button,
} from '@mui/material';
import FilterContainer from './filter-container';

const AutocompleteFilter = ({ name, options, changeFilter }) => {
  const selectedOptions = options.filter((x) => x.selected);

  const handleChange = (_, option, action) => {
    if (action === 'selectOption') {
      changeFilter({ action: 'add', option });
    }
  };

  return (
    <FilterContainer name={name}>
      <Autocomplete
        sx={{ my: 1 }}
        options={options.map((x) => ({ ...x, label: x.title }))}
        size="small"
        renderInput={(params) => (
          <TextField {...params} />
        )}
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderOption={(allProps, option) => {
          const props = allProps;
          if (option.selected) {
            delete props.onClick;
            delete props.onMouseOver;
            delete props.onTouchStart;
          }

          const sx = option.selected ? {
            userSelect: 'none',
            cursor: 'not-allowed',
          } : {};

          return (
            <Box
              {...props}
              sx={sx}
            >
              {option.selected && '✓ '}
              {option.title}
            </Box>
          );
        }}
      />
      {selectedOptions.map((option) => (
        <Box
          key={option.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            px: 1,
            ':nth-of-type(2n -1)': {
              backgroundColor: '#fafafa',
            },
          }}
        >
          <Typography>{option.title}</Typography>
          <Button
            color="secondary"
            variant="contained"
            sx={{
              height: 16,
              minHeight: 16,
              minWidth: 16,
              width: 16,
              fontSize: 10,
            }}
            onClick={() => changeFilter({ action: 'remove', option })}
          >
            &#10005;
          </Button>
        </Box>
      ))}
    </FilterContainer>
  );
};

export default AutocompleteFilter;
