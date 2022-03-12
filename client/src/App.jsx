import React, { useEffect, useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import APIService from './services/api-service';
import { selectAuth } from './store/auth';
import Router from './routing/router';
import lightTheme from './styles/light-theme';
import Footer from './components/footer';
import { addItemsToCart, selectCart } from './store/cart';

const App = () => {
  const { user } = useSelector(selectAuth);
  const { cartItems } = useSelector(selectCart);
  const [isMount, setIsMount] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      (async () => {
        const fetchedCart = await APIService.fetchCart(user.id);
        dispatch(addItemsToCart({ fetchedCart }));
      })();
    }
  }, [user]);

  useEffect(() => {
    if (isMount) {
      setIsMount(false);
      return;
    }
    if (user) {
      (async () => {
        await APIService.updateCart(user.id, cartItems);
      })();
    }
  }, [cartItems]);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <Router />
        <Box>
          <Footer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
