import database from '../database/index.js';

export const getProduct = (req, res) => {
  const products = database.data.products;
  const product = products.find(x => x.id === req.params.name); 
  res.status(200).json(product);
};

