import React from 'react';
import {
  TextField,
  Grid,
  Box,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import AuthForm from '../../components/auth/auth-form';
import APIService from '../../services/api-service';

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Is required'),
  brand: yup
    .string()
    .required('Is required'),
  category: yup
    .string()
    .required('Is required'),
  type: yup
    .string()
    .required('Is required'),
  size: yup
    .string()
    .required('Is required'),
  inStock: yup
    .number()
    .required('Is required'),
  price: yup
    .number()
    .required('Is required'),
  description: yup
    .string()
    .required('Is required'),
  images: yup
    .string()
    .required('Is required'),
});

const ProductInsertPage = () => {
  const initialValues = {
    title: '',
    brand: '',
    category: '',
    type: '',
    size: '',
    inStock: '',
    price: '',
    description: '',
    images: '',
  };

  const onSubmit = async (formData) => {
    await APIService.insertProduct(formData);
  };

  const {
    values, touched, errors, isValid, dirty, isSubmitting, handleSubmit,
    handleChange, handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box sx={{ mt: 6 }}>
      <AuthForm
        title="Product administration panel"
        buttonTitle="Insert product"
        maxWidth="sm"
        isValid={dirty && isValid}
        onSubmit={handleSubmit}
        loading={isSubmitting}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Product Title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Brand"
                name="brand"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.brand}
                error={touched.brand && Boolean(errors.brand)}
                helperText={touched.brand && errors.brand}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Category"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                error={touched.category && Boolean(errors.category)}
                helperText={touched.category && errors.category}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Type"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.type}
                error={touched.type && Boolean(errors.type)}
                helperText={touched.type && errors.type}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Size"
                name="size"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.size}
                error={touched.size && Boolean(errors.size)}
                helperText={touched.size && errors.size}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="In Stock"
                name="inStock"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.inStock}
                error={touched.inStock && Boolean(errors.inStock)}
                helperText={touched.inStock && errors.inStock}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Price"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                error={touched.price && Boolean(errors.price)}
                helperText={touched.price && errors.price}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                sx={{ mb: 5 }}
                label="Images"
                name="images"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.images}
                error={touched.images && Boolean(errors.images)}
                helperText={touched.images && errors.images}
                disabled={isSubmitting}
              />
            </Grid>
          </Grid>
        </Box>
      </AuthForm>
    </Box>
  );
};

export default ProductInsertPage;
