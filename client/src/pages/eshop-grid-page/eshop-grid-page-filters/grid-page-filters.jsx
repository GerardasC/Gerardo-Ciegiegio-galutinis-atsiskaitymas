import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { ProductContext } from '../context/product-context';
import OptionsFilter from './options-filter';
import RangeFilter from './range-filter';

const FilterMap = {
  range: RangeFilter,
  options: OptionsFilter,
};

const EshopGridPageFilterMenu = () => {
  const { filters, changeFilter } = useContext(ProductContext);

  return (
    <>
      <Typography fontSize="21px" color="primary" fontWeight={500}>
        Filters
      </Typography>
      {
        filters.map(({ type, id, ...props }) => {
          const Filter = FilterMap[type];
          return (
            <React.Fragment key={id}>
              <Filter {...props} changeFilter={(newProps) => changeFilter(id, type, newProps)} />
            </React.Fragment>
          );
        })
      }
    </>
  );
};

export default EshopGridPageFilterMenu;
