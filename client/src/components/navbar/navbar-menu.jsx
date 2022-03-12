import React from 'react';
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
import {
  Apps,
  Home,
} from '@mui/icons-material/';

const listItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    link: '/',
  },
  {
    listIcon: <Apps />,
    listText: 'Catalog',
    link: 'catalog',
  },
];

const NavbarMenu = ({ toggleSlider, open }) => {
  const navigate = useNavigate();

  const sideListLink = (i) => {
    toggleSlider();
    navigate(listItems[i].link);
  };

  return (
    <Drawer open={open} anchor="left" onClose={toggleSlider}>
      <Box sx={{ textAlign: 'right' }}>
        <Typography
          sx={{ cursor: 'pointer', p: '10px', display: 'inline' }}
          onClick={toggleSlider}
        >
          x
        </Typography>
      </Box>
      <Box component="div" sx={{ width: 250 }}>
        <List sx={{ mt: 3 }}>
          {listItems.map((listItem, i) => (
            <ListItem button onClick={() => sideListLink(i)} key={listItem.listText}>
              <ListItemIcon>
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={listItem.listText} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavbarMenu;
