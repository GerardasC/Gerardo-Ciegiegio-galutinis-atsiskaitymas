import database from '../database/index.js';

export const getUsers = (req, res) => {
  const users = database.data.users;
  res.status(200).json(users);
}
