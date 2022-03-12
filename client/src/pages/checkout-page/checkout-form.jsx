import React from 'react';
import {
  TextField,
  Grid,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import store from '../../store';
import * as cartSlice from '../../store/cart';

import APIService from '../../services/api-service';
import AuthForm from '../../components/auth/auth-form';
import routes from '../../routing/routes';
import { selectAuth } from '../../store/auth';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Is required')
    .min(3, 'At least 3 letters')
    .max(16, '16 letters maximum')
    .matches(/^[a-zA-Z]+$/, 'Should only contain English letters'),
  surname: yup
    .string()
    .required('Is required')
    .min(3, 'At least 3 letters')
    .max(16, '16 letters maximum')
    .matches(/^[a-zA-Z]+$/, 'Should only contain English letters'),
  address: yup
    .string()
    .required('Is required')
    .min(8, 'At least 8 letters'),
  postalcode: yup
    .string()
    .required('Is required')
    .min(5, 'At least 5 characters'),
  city: yup
    .string()
    .required('Is required')
    .min(3, 'At least 3 letters'),
  phone: yup
    .number('Must be number')
    .required('Is required')
    .positive()
    .integer()
    .test('len', 'Min 10 numbers', (val) => val && val.toString().length >= 10),
});

const CheckoutForm = ({ orderList }) => {
  const { user } = useSelector(selectAuth);
  const navigate = useNavigate();

  const initialValues = {
    name: user.name ?? '',
    surname: user.surname ?? '',
    address: user.address ?? '',
    postalcode: '',
    city: '',
    phone: '',
  };

  const onSubmit = async (formData) => {
    await APIService.placeOrder({ userId: user.id, ...formData, orderList });
    const reduxAction = cartSlice.removeAllCartAfterPurchase();
    store.dispatch(reduxAction);
    navigate(routes.ThankYouPage);
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
    <AuthForm
      buttonTitle="Order"
      maxWidth="sm"
      linkTo={routes.LoginPage}
      isValid={dirty && isValid}
      onSubmit={handleSubmit}
      loading={isSubmitting}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              disabled={isSubmitting}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Surname"
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
              error={touched.surname && Boolean(errors.surname)}
              helperText={touched.surname && errors.surname}
              disabled={isSubmitting}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Phone number"
              InputProps={{
                startAdornment: '+',
              }}
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
              disabled={isSubmitting}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Shipping Address"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
              disabled={isSubmitting}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Postalcode"
              name="postalcode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postalcode}
              error={touched.postalcode && Boolean(errors.postalcode)}
              helperText={touched.postalcode && errors.postalcode}
              disabled={isSubmitting}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              sx={{ mb: 5 }}
              label="City"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
              disabled={isSubmitting}
            />
          </Grid>
        </Grid>
      </Box>
    </AuthForm>
  );
};

export default CheckoutForm;
