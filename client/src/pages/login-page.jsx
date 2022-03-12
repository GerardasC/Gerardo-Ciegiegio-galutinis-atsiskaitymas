import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  TextField,
  Grid,
  Alert,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import * as yup from 'yup';
import routes from '../routing/routes';
import AuthForm from '../components/auth/auth-form';
import AuthService from '../services/auth-service';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Is not valid email')
    .required('Is required'),
  password: yup
    .string()
    .required('Is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = async ({ email, password }) => {
    try {
      const redirectTo = searchParams.get('redirectTo');
      await AuthService.login({ email, password }, redirectTo);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const {
    values, errors, touched, isValid, dirty, isSubmitting,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <Box
      sx={{ pt: '7vh' }}
    >
      <AuthForm
        title="Log in"
        buttonTitle="Log in"
        maxWidth="xs"
        linkTo={routes.RegisterPage}
        onSubmit={handleSubmit}
        loading={isSubmitting}
        isValid={dirty && isValid}
      >
        <Grid container spacing={4}>
          {
            errorMsg
              ? (
                <Grid item xs={12}>
                  <Alert
                    severity="error"
                    action={(
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => setErrorMsg(null)}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    )}

                  >
                    {errorMsg}
                  </Alert>
                </Grid>
              )
              : null
          }
          <Grid item xs={12}>
            <TextField
              variant="filled"
              fullWidth
              id="email"
              label="Email"
              autoFocus
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              disabled={isSubmitting}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 4 }}>
            <TextField
              variant="filled"
              fullWidth
              label="Password"
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              disabled={isSubmitting}
              autoComplete="on"
            />
          </Grid>
        </Grid>
      </AuthForm>
    </Box>
  );
};

export default LoginPage;
