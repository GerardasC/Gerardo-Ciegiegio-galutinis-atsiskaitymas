import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const CatalogGridPageGrid = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'grid',
  border: `1px solid ${theme.palette.gridColor.main}`,
  backgroundColor: 'white',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',

  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export default CatalogGridPageGrid;
