import database from '../database/index.js';

const filterByRange = (products, filter, queryParams) => {
  const min = Number(queryParams[`${filter.name}_min`]);
  const max = Number(queryParams[`${filter.name}_max`]);

  if (min) {
    products = products.filter(x => x[filter.property] >= min);
  }
  if (max) {
    products = products.filter(x => x[filter.property] <= max);
  }

  return products;
};

const filterByOptionsOrAutocomplete = (products, filter, queryParams) => {
  const options = [].concat(queryParams[filter.name]).filter(x => x !== undefined);
  if (options.length > 0) {
    products = products.filter(x => options.includes(x[filter.property]));
  }
  return products;
};

const filterFuctionMap = {
  range: filterByRange,
  options: filterByOptionsOrAutocomplete,
  autocomplete: filterByOptionsOrAutocomplete,
};

const mapWithFilterCollection = (products, filter, collections) => {
  const collection = collections[filter.collection];
  products = products.map(product => ({
    ...product,
    [filter.property]: collection.find(x => x.id === product[filter.property]).title,
  }));
  return products
}

export const getProducts = (req, res) => {
  const { products, categories, filters } = database.data;
  const {
    category: categoryId,
    limit,
    page,
    ...queryParams
  } = req.query;

  let selectedProducts = products
    .filter(x => x.category === categoryId)
    .map(({ category, ...product }) => product);
  const category = categories.find(x => x.id === categoryId);
  const categoryFilters = category.filters.map(filterId => filters.find(x => x.id === filterId));

  categoryFilters.forEach(filter => {
    selectedProducts = filterFuctionMap[filter.type](selectedProducts, filter, queryParams);
    if (filter.collection) {
      selectedProducts = mapWithFilterCollection(selectedProducts, filter, database.data);
    }
  });


  const infiniteScrollResponse = {
    total: selectedProducts.length,
    products: selectedProducts.slice((page - 1) * limit, page * limit),
  }

  res.status(200).json(infiniteScrollResponse);

  // res.status(200).json(selectedProducts);
}

