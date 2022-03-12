import React from 'react';
import {
  TextField,
  Grid,
  Box,
} from '@mui/material';
import AuthForm from '../components/auth/auth-form';

const ProfilePage = () => (
  <Box
    sx={{ pt: '7vh' }}
  >
    <AuthForm
      title="Profile"
      buttonTitle="Update"
      maxWidth="xs"
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              fullWidth
              label="Name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              fullWidth
              label="Surname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              fullWidth
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              fullWidth
              label="Address"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              fullWidth
              label="Password"
              type="password"
              autoComplete="on"
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 4 }}>
            <TextField
              variant="filled"
              fullWidth
              label="New Password"
              type="password"
              autoComplete="on"
            />
          </Grid>
        </Grid>
      </Box>
    </AuthForm>
  </Box>
);
export default ProfilePage;
