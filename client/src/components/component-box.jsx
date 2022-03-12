import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '25px',
  border: '1px solid',
  borderColor: theme.palette.gridColor.main,
}));

const ComponentBox = ({ children, minW, maxW }) => (
  <StyledBox sx={{ minWidth: minW, maxWidth: maxW }}>
    {children}
  </StyledBox>
);

export default ComponentBox;
