import { VISITOR, LOGGED_IN, ADMIN } from './auth-types';

export default [
  {
    path: '/',
    pageName: 'HomePageLayout',
    children: [
      {
        path: null,
        pageName: 'HomePage',
      },
      {
        path: 'catalog',
        pageName: 'EshopGridPage',
      },
      {
        path: 'catalog/:id',
        pageName: 'ProductPage',
      },
      {
        path: 'login',
        pageName: 'LoginPage',
        auth: VISITOR,
      },
      {
        path: 'register',
        pageName: 'RegisterPage',
        auth: VISITOR,
      },
      {
        path: 'checkout',
        pageName: 'CheckoutPage',
        auth: LOGGED_IN,
      },
      {
        path: 'cart',
        pageName: 'CartView',
      },
      {
        path: 'thankyoupage',
        pageName: 'ThankYouPage',
        auth: LOGGED_IN,
      },
      {
        path: 'profile',
        pageName: 'ProfilePage',
        auth: LOGGED_IN,
      },
      {
        path: 'administration',
        pageName: 'ProductInsertPage',
        auth: ADMIN,
      },
      {
        path: '*',
        pageName: 'ErrorPage',
      },
    ],
  },
];
