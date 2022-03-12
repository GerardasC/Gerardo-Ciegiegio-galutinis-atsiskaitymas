import React from 'react';
import {
  TextField,
  Grid,
  Box,
  InputAdornment,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import authService from '../services/auth-service';
import AuthForm from '../components/auth/auth-form';
import routes from '../routing/routes';

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
  email: yup
    .string()
    .required('Is required')
    .email('Is not valid email')
    .test(
      'emailAvailableTest',
      'Email is taken. Choose another',
      (_, { parent: { emailChecked, emailAvailable } }) => {
        if (!emailChecked) return true;
        return emailAvailable;
      },
    ),
  address: yup
    .string()
    .required('Is required')
    .min(8, 'At least 8 letters'),
  password: yup
    .string()
    .required('Is required')
    .min(8, 'At least 8 letters')
    .max(32, '32 letters maximum')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Should contain Capital letter')
    .matches(/^.*[0-9]+.*$/, 'Should contain number'),
  repeatPassword: yup
    .string()
    .required('Is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  emailChecked: yup
    .boolean()
    .required('Is required')
    .oneOf([true], 'Email must be checked'),
  emailAvailable: yup
    .boolean()
    .required('Is required')
    .oneOf([true], 'Email must be available'),
});

const initialValues = {
  name: '',
  surname: '',
  email: '',
  address: '',
  password: '',
  repeatPassword: '',
  emailChecked: false,
  emailAvailable: false,
};

const RegisterPage = () => {
  const onSubmit = async ({
    emailChecked, emailAvailable, subscribed, ...formData
  }) => {
    await authService.register(formData);
  };

  const {
    values, touched, errors, isValid, dirty, isSubmitting,
    handleChange, handleBlur, setFieldValue, setValues, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleEmailChange = (e) => {
    if (values.emailChecked) {
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false,
      }, true);
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur = (e) => {
    handleBlur(e);
    if (!errors.email) {
      (async () => {
        const emailAvailable = await authService.checkEmail(values.email);
        setFieldValue('emailChecked', true);
        setFieldValue('emailAvailable', emailAvailable);
      })();
    }
  };

  let emailEndAdornment;
  if (values.emailChecked) {
    emailEndAdornment = values.emailAvailable
      ? <InputAdornment position="end"><CheckCircleIcon color="success" /></InputAdornment>
      : <InputAdornment position="end"><ErrorIcon color="error" /></InputAdornment>;
  }

  return (
    <Box
      sx={{ pt: '7vh' }}
    >
      <AuthForm
        title="Register"
        buttonTitle="Register"
        maxWidth="xs"
        linkTo={routes.LoginPage}
        isValid={dirty && isValid}
        onSubmit={handleSubmit}
        loading={isSubmitting}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                fullWidth
                label="Email"
                InputProps={{
                  endAdornment: emailEndAdornment,
                }}
                name="email"
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                fullWidth
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                disabled={isSubmitting}
                autoComplete="on"
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <TextField
                variant="filled"
                fullWidth
                label="Repeat Password"
                type="password"
                name="repeatPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repeatPassword}
                error={touched.repeatPassword && Boolean(errors.repeatPassword)}
                helperText={touched.repeatPassword && errors.repeatPassword}
                disabled={isSubmitting}
                autoComplete="on"
              />
            </Grid>
          </Grid>
        </Box>
      </AuthForm>
    </Box>
  );
};

export default RegisterPage;
