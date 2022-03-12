import database from '../database/index.js';

export const getCategories = (req, res) => {
  const categories = database.data.categories;
  res.status(200).json(categories);
}
