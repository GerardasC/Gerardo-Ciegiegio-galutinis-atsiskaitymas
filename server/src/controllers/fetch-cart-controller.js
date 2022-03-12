import database from '../database/index.js';

export const fetchCart = (req, res) => {
  const { userId } = req.query;
  const cart = database.data.cart;
  const products = database.data.products;
  
  const cartUser = cart.filter((x) => x.userId == userId)[0];
  const prductIds = cartUser.productId;
  
  let result = [];
  products.map((x) => {
    for (const property in prductIds) {
      if(property == x.id) {
        result.push({...x, quantity: prductIds[property]});
      } 
    }

    return;
  })

  res.status(200).json(result);
}
