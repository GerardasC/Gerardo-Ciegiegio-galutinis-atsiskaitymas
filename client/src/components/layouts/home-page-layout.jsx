import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';

const HomePageLayout = ({ children }) => (
  <Box component="main">
    <Navbar />
    {children}
    <Outlet />
  </Box>
);

export default HomePageLayout;
