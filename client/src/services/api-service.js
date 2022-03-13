import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  mode: 'no-cors',
});

const fetchProducts = async (searchParams, limit = 12, page = 1) => {
  const response = await request.get(`products?limit=${limit}&page=${page}&${searchParams.toString()}`);
  return response.data;
};

const fetchProduct = async (id) => {
  const response = await request.get(`/product/${id}`);
  return response.data;
};

const fetchCategories = async () => {
  try {
    const { data } = await request.get('/categories');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchFilters = async (categoryId) => {
  let queryParams = '';
  if (categoryId) {
    queryParams = `?category=${categoryId}`;
  }
  try {
    const { data } = await request.get(`/filters${queryParams}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchCart = async (userId) => {
  try {
    const { data } = await request.get(`/cart?userId=${userId}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateCart = async (userId, body) => {
  try {
    const result = body.reduce((prev, x) => {
      // eslint-disable-next-line no-param-reassign
      prev[x.id] = x.quantity;
      return prev;
    }, {});
    const { status } = await request.put(`/updatecart?userId=${userId}`, result);
    return status;
  } catch (error) {
    throw new Error(error.message);
  }
};

const placeOrder = async (body) => {
  try {
    const { status } = await request.post('/registerorder', body);
    if (status === 200) {
      return true;
    }
  } catch (error) {
    throw new Error(error.message);
  }
  return true;
};

const insertProduct = async (body) => {
  const { data, status } = await request.post('/insertproduct', body);

  if (status === 200) {
    return status;
  }

  throw new Error(data.message);
};

const APIService = {
  fetchProducts,
  fetchProduct,
  fetchCategories,
  fetchFilters,
  fetchCart,
  updateCart,
  placeOrder,
  insertProduct,
};

export default APIService;
