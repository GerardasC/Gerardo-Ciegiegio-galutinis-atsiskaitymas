import React from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import FilterContainer from './filter-container';

const OptionsFilter = ({ options, name, changeFilter }) => (
  <FilterContainer name={name}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {
        options.map((x) => (
          <FormControlLabel
            key={x.id}
            control={<Checkbox size="small" checked={x.checked} />}
            label={x.title}
            onChange={(_, checked) => changeFilter({ id: x.id, checked })}
          />
        ))
      }
    </Box>
  </FilterContainer>
);

export default OptionsFilter;
