import React from 'react';
import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledNavbarLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  height: '100%',
  color: theme.palette.grey[200],
  textDecoration: 'none',
  ':hover': {
    background: theme.palette.action.hover,
  },
  '&.active': {
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
}));

const NavbarLink = ({ to, children }) => (
  <StyledNavbarLink to={to}>
    {children}
  </StyledNavbarLink>
);

export default NavbarLink;
