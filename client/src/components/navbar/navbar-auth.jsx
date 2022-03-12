import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import routes from '../../routing/routes';
import { logout, selectAuth } from '../../store/auth';
import { removeAllCart } from '../../store/cart';

const NavbarAuth = () => {
  const { user } = useSelector(selectAuth);
  const iconButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    dispatch(removeAllCart());
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton
        size="large"
        onClick={() => setIsOpen(true)}
        color="inherit"
        sx={{ ml: '15px' }}
        ref={iconButtonRef}
      >
        <PersonIcon />
      </IconButton>
      <Menu
        anchorEl={iconButtonRef.current}
        keepMounted
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <MenuItem
          sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}
        >
          <Typography onClick={() => navigate(routes.ProfilePage)} textAlign="center">{`${user.name} ${user.surname}`}</Typography>
        </MenuItem>
        {
          user && user.role === 'ADMIN'
            ? (
              <MenuItem
                sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}
              >
                <Typography onClick={() => navigate(routes.ProductInsertPage)} textAlign="center">Admin Panel</Typography>
              </MenuItem>
            )
            : null
        }
        <MenuItem
          onClick={logoutUser}
          sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}
        >
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavbarAuth;
