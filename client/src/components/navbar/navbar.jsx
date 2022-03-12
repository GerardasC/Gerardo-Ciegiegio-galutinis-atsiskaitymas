import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import routes from '../../routing/routes';
import WideContainer from '../wide-container';
import PageLayoutSearch from './navbar-search';
import NavbarLink from './navbar-link';
import NavbarMenu from './navbar-menu';
import NavbarAuth from './navbar-auth';
import NavbarCart from './navbar-cart';
import { selectAuth } from '../../store/auth';
import APIService from '../../services/api-service';

const Navbar = () => {
  const { loggedIn } = useSelector(selectAuth);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);

  const toggleSlider = () => {
    setOpen(!open);
  };
  useEffect(() => {
    (async () => {
      const categoryData = await APIService.fetchCategories();
      setCategory(categoryData);
    })();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavbarMenu toggleSlider={toggleSlider} open={open} />
      <AppBar position="static">
        <WideContainer>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: 'flex', sm: 'none' } }}
              onClick={toggleSlider}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <NavbarLink to={routes.HomePage}>Home</NavbarLink>
              <NavbarLink to={routes.EshopGridPage}>Catalog</NavbarLink>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: 600 }}>
              <PageLayoutSearch category={category} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
              <Box sx={{ display: 'flex', mr: 1 }}>
                {
                  loggedIn
                    ? <NavbarAuth />
                    : (
                      <>
                        <NavbarLink to={routes.LoginPage}>Login</NavbarLink>
                        <NavbarLink to={routes.RegisterPage}>Register</NavbarLink>
                      </>
                    )
                }
              </Box>
              <NavbarLink to={routes.CartView}>
                <NavbarCart />
              </NavbarLink>
            </Box>
          </Toolbar>
          <Toolbar style={{ minHeight: '55px' }} sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <PageLayoutSearch category={category} />
          </Toolbar>
        </WideContainer>
      </AppBar>
    </Box>
  );
};

export default Navbar;
