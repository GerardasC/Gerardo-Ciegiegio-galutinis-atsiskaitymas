import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import users from './users';
import cart from './cart';

const store = configureStore({
  reducer: {
    users,
    auth,
    cart,
  },
});

export default store;
