import database from '../database/index.js';
import { v4 as createId } from 'uuid';

export const insertProduct = (req, res) => {

  const { 
    category,
    brand,
    type,
    size,
    title,
    inStock,
    price,
    description,
    images } = req.body;

    const newProduct = {
      id: createId(),
      category,
      brand,
      type,
      size,
      title,
      inStock: Number(inStock),
      price: Number(price),
      description,
      images: [images]
    }
    
    database.data.products.push(newProduct);
    database.write();

  res.status(200).json(newProduct);
}
