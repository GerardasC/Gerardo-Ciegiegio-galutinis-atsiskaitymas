import { styled } from '@mui/material/styles';

const SquareContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  borderRadius: 12,
  overflow: 'hidden',
  cursor: 'pointer',
  ...theme.mixins.productCarousel,
  ':before': {
    content: '""',
    display: 'block',
    width: '100%',
    paddingTop: '100%',
  },
  '>*': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
  },
}));

export default SquareContainer;
