import React, { createContext, useMemo } from 'react';
import useCategories from './use-categories';
import useFilters from './use-filters';
import useProducts from './use-products';
import useSorting from './use-sorting';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { categories, selectedCategory, changeCategory } = useCategories();
  const { filters, changeFilter } = useFilters(selectedCategory);
  const {
    products,
    lazyLoad,
    hasMore,
    pageNr,
    setPageNr,
    setPageNumber,
    setProducts,
  } = useProducts();
  const { option, setOption } = useSorting(setProducts);

  const contextValue = useMemo(() => ({
    products,
    filters,
    categories,
    selectedCategory,
    hasMore,
    pageNr,
    setPageNumber,
    option,
    changeCategory,
    changeFilter,
    lazyLoad,
    setPageNr,
    setOption,
  }), [
    categories,
    selectedCategory,
    filters,
    products,
    option,
  ]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
