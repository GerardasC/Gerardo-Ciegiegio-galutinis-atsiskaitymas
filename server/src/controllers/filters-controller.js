import database from '../database/index.js';

export const getFilters = (req, res) => {
  let filters = database.data.filters;
  const category = database.data.categories.find(x => x.id === req.query.category);

  if (!category) {
    res.status(200).json(filters);
    return;
  }

  if (category.filters) {
    filters = filters
      .filter(x => category.filters.includes(x.id))
      .map((filter) => {
        switch (filter.type) {
          case 'autocomplete':
          case 'options':
            filter.options = database.data[filter.collection];
            break;
          case 'range':
            let products = database.data.products;
            if (category && category.id) products = products.filter(x => x.category === category.id);
            filter.min = 0;
            filter.max = 0;
            if (products.length > 0) {
              products.sort((a, b) => a[filter.property] - b[filter.property]);
              filter.min = Math.floor(products[0][filter.property]);
              filter.max = Math.ceil(products[products.length - 1][filter.property]);
            }
            break;
        }
        return filter;
      });

    res.status(200).json(filters);
  } else {
    res.status(200).json([]);
  }
}

