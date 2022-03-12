/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';
import LocalStorage from './localStorage';

const initialState = LocalStorage.get('cart') ?? {
  cartItems: [],
  firstLoad: false,
};
// const initialState = {
  //   cartItems: [],
  // };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const result = state.cartItems.findIndex((x) => x.id === payload.id);
      const cart = current(state);
      // console.log(firstLoad);

      if (result > -1) {
        if (cart.cartItems[result].quantity < payload.inStock) {
          if ((cart.cartItems[result].quantity + payload.quantity) > payload.inStock) {
            state.cartItems[result].quantity = payload.inStock;
          } else {
            state.cartItems[result].quantity += payload.quantity;
          }
          // state.cartItems[result].quantity += 1;
        }
      } else {
        state.cartItems.push(payload);
      }
      if (!state.firstLoad) {
        LocalStorage.set('cart', state);
      }
    },
    addItemsToCart(state, { payload }) {
      const cartItems = current(state.cartItems);
      const fetchedCartItems = payload.fetchedCart;

      let allCartItems = [];
      if (!state.firstLoad) {
        allCartItems = [...cartItems, ...fetchedCartItems];
      } else {
        allCartItems = [...fetchedCartItems];
      }

      const removedCartDuplicates = Object.values(allCartItems.reduce((p, v) => {
        const old = p[v.id];
        if (!old) {
          p[v.id] = { ...v, count: 1 };
        } else if (old.sort > v.sort) {
          p[v.id] = { ...v, count: old.count + 1 };
          p[v.id].quantity += v.quantity;
        } else {
          p[v.id].count += 1;
          p[v.id].quantity += v.quantity;
        }
        return p;
      }, {}));

      const reducedCart = removedCartDuplicates.map((item) => {
        if (item.quantity > item.inStock) {
          item.quantity = item.inStock;
        }
        delete item.count;
        return item;
      });

      state.cartItems = reducedCart;
      state.firstLoad = true;
      // LocalStorage.set('cart', state);
      LocalStorage.clear('cart');
    },
    removeFromCart(state, { payload }) {
      const cartItem = state.cartItems.filter((x) => x.id !== payload);

      state.cartItems = cartItem;
      if (!state.firstLoad) {
        LocalStorage.set('cart', state);
      }
    },
    removeAllCart(state) {
      state.cartItems = [];
      LocalStorage.clear('cart');
      state.firstLoad = false;
    },
    removeAllCartAfterPurchase(state) {
      state.cartItems = [];
      LocalStorage.clear('cart');
    },
  },
});

export const {
  addToCart, addItemsToCart, removeFromCart, removeAllCart, removeAllCartAfterPurchase,
} = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
