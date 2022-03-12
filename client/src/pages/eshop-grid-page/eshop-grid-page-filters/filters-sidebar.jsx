/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@mui/material/';
import { useTheme } from '@emotion/react';
import {
  Apps,
  ContactMail,
  Home,
} from '@mui/icons-material/';
import EshopGridPageFilterMenu from './grid-page-filters';

const FiltersSidebar = ({ toggleSlider, open, setOpen }) => {

  return (
    <Drawer open={open} anchor="right" onClose={toggleSlider}>
      <Box>
        <Typography
          sx={{ cursor: 'pointer', p: '10px', display: 'inline' }}
          onClick={toggleSlider}
        >
          x
        </Typography>
      </Box>
      <Box sx={{ p: 3 }}>
        <Box component="div" sx={{ width: 250 }}>
          <EshopGridPageFilterMenu />
        </Box>
      </Box>
    </Drawer>
  );
};

export default FiltersSidebar;
