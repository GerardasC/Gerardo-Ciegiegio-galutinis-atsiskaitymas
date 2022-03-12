import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import APIService from '../../../services/api-service';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState([]);
  const [searchParams] = useSearchParams();
  const [hasMore, setHasMore] = useState(true);
  const [pageNr, setPageNr] = useState(2);

  useEffect(() => {
    (async () => {
      if (searchParams.get('category')) {
        const fetchedProducts = await APIService.fetchProducts(searchParams);
        setProducts(fetchedProducts.products);
        setProductsCount(fetchedProducts.total);
      }
    })();
    setHasMore(true);
    setPageNr(2);
  }, [searchParams]);

  const lazyLoad = async (limit, page) => {
    const fetchedProducts = await APIService.fetchProducts(searchParams, limit, page);

    if (fetchedProducts.products.length === 0 || fetchedProducts.products.length < limit) {
      setHasMore(false);
    }
    setProducts([...products, ...fetchedProducts.products]);
  };

  return {
    products,
    hasMore,
    pageNr,
    lazyLoad,
    setPageNr,
    setProducts,
    productsCount,
  };
};

export default useProducts;
