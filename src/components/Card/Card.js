import React from 'react';
import { CardWrapper, ImageContainer } from './CardStyles';
import image from '../../assets/images/lau6t7z4.bmp';

const Card = ({ country, active, cases, src }) => {
  return (
    <CardWrapper>
      <img src={`https://www.countryflags.io/${src}/flat/64.png`} />
      <h1>{country}</h1>
      <h2>{active}</h2>
      <h2>{cases}</h2>
    </CardWrapper>
  );
};

export default Card;
