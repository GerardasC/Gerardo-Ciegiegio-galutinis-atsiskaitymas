import React from 'react';
import {
  TextField,
  Paper,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchBarCategoryPicker from './navbar-search-category';

const PageLayoutSearch = ({ category }) => (
  <Paper
    component="form"
    sx={{
      p: 0,
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      width: { xs: '100%' },
    }}
  >
    <TextField
      size="small"
      fullWidth
      InputProps={{
        sx: { pr: 0 },
        endAdornment: (
          <InputAdornment position="end">
            <SearchBarCategoryPicker category={category} />
            <IconButton
              color="btnWhite"
              sx={{
                backgroundColor: 'secondary.main',
                borderRadius: '0px',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
                '&:hover': { backgroundColor: 'secondary.main' },
              }}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  </Paper>
);

export default PageLayoutSearch;
