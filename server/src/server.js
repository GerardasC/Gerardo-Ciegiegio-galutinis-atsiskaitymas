import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import authRouter from './routes/auth-router.js';
import usersRouter from './routes/users-router.js';
import productsRouter from './routes/products-router.js';
import productRouter from './routes/product-router.js';
import categoriesRouter from './routes/categories-router.js';
import filtersRouter from './routes/filters-router.js';
import fetchCartRouter from './routes/fetch-cart-router.js';
import updateCart from './routes/update-cart-router.js';
import registerOrder from './routes/orders-router.js';
import insertProduct from './routes/inser-product-router.js';

import cors from 'cors';
import './database/index.js';

config();
const server = express();
const { SERVER_PORT } = process.env;

server.use(morgan('tiny'));
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/products', productsRouter);
server.use('/api/product', productRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/filters', filtersRouter);
server.use('/api/cart', fetchCartRouter);
server.use('/api/updatecart', updateCart);
server.use('/api/registerorder', registerOrder);
server.use('/api/insertproduct', insertProduct);

server.listen(SERVER_PORT, () => {
  console.log(`serveris veikia ant http://localhost:${SERVER_PORT}/`);
});
