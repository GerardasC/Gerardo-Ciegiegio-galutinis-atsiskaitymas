import React from 'react';
import SquareContainer from '../../components/square-container';

const CarouselImage = ({ alt, ...props }) => <SquareContainer><img {...props} alt={alt ?? 'No image'} /></SquareContainer>;

export default CarouselImage;
