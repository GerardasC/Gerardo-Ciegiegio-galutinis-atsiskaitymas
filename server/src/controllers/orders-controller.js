import database from '../database/index.js';

export const registerOrder = (req, res) => {
  const products = database.data.products;

  const order = req.body;
  console.log(order.orderList);
  database.data.orders.push(order);
  
  order.orderList.forEach(y => {
    const productsIndex = products.findIndex(x => { 
      return y.productId == x.id 
    });

    const updateList = {
      id: products[productsIndex].id,
      category: products[productsIndex].category,
      brand: products[productsIndex].brand,
      type: products[productsIndex].type,
      size: products[productsIndex].size,
      title: products[productsIndex].title,
      inStock: products[productsIndex].inStock - y.quantity,
      price: products[productsIndex].price,
      description: products[productsIndex].description,
      images: products[productsIndex].images,
    }

    database.data.products.splice(productsIndex, 1, updateList);
  })
  database.write();

  res.status(200).json(order);
}
