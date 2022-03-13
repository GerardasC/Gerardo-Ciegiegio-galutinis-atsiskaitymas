import database from '../database/index.js';

export const updateCart = (req, res) => {
  const reqBody = req.body;
  const reqParams = req.query.userId;
  const cart = database.data.cart;

  const updatedCart = {
    userId: reqParams,
    productId: reqBody
  };

  const productIndex = cart.findIndex(x => x.userId == reqParams);
  database.data.cart.splice(productIndex, 1, updatedCart);
  database.write();
  res.status(200).json({
    message: 'Success',
  });
}