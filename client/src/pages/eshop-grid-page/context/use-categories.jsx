import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import APIService from '../../../services/api-service';

const useCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const setCategoryFromUrl = (fetchedCategories) => {
    const categoryParam = searchParams.get('category');
    const foundCategory = fetchedCategories.find((x) => x.id === categoryParam);
    const category = foundCategory ?? fetchedCategories[0];
    if (!foundCategory) {
      setSearchParams({ category: category.id });
    }
    setSelectedCategory(category.id);
    setCategories(fetchedCategories);
  };

  const changeCategory = (id) => {
    setSearchParams({ category: id });
    setSelectedCategory(id);
  };

  useEffect(() => {
    (async () => {
      const categoryData = await APIService.fetchCategories();
      setCategoryFromUrl(categoryData);
    })();
  }, []);

  return {
    categories,
    selectedCategory,
    changeCategory,
  };
};

export default useCategories;
