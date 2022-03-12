import { useState, useEffect } from 'react';

const useSorting = (setProducts) => {
  const [option, setOption] = useState(1);

  const mapSorting = {
    1: (products) => products.sort((a, b) => (a.id - b.id)),
    2: (products) => products.sort((a, b) => (b.price - a.price)),
    3: (products) => products.sort((a, b) => (a.price - b.price)),
  };

  useEffect(() => {
    setProducts((products) => mapSorting[option]([...products]));
  }, [option]);

  return {
    option,
    setOption,
  };
};

export default useSorting;
