import React from 'react';
import {
  Container,
  Box,
  Typography,
} from '@mui/material';
import Button from './auth-form-button';

const AuthForm = ({
  children,
  title,
  buttonTitle,
  isValid,
  onSubmit,
  maxWidth,
}) => (
  <Container
    maxWidth={maxWidth}
    component="main"
  >
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Typography component="h1" variant="h5" color="textColor.main">
          {title}
        </Typography>
      </Box>
      {children}
      <Box sx={{ textAlign: 'center' }}>
        <Button disabled={!isValid}>
          {buttonTitle}
        </Button>
      </Box>
    </Box>
  </Container>
);

export default AuthForm;
