import React, { useState } from 'react';
import {
  CardWrapper,
  ImageContainer,
  FlagImage,
  InfoContainer,
  Country,
  InfoRow,
  ItemLabel,
  ItemValue,
  Column,
  ArrowDown,
  HiddenContainer,
} from './CardStyles';

import { DateRow } from '../../lib/styles/generalStyles';

import image from '../../assets/images/lau6t7z4.bmp';

const Card = ({
  country,
  active,
  cases,
  src,
  deaths,
  recovered,
  population,
  tests,
  deathsPerMill,
  recoveredPerMill,
}) => {
  const formating = 'de-DE';
  const [isOpened, setIsOpened] = useState(false);

  return (
    <CardWrapper active={active}>
      <DateRow>
        <ArrowDown opened={isOpened} onClick={() => setIsOpened(!isOpened)} />
      </DateRow>
      <ImageContainer>
        <FlagImage
          src={`https://www.countryflags.io/${src}/flat/64.png`}
          alt={country}
        />
      </ImageContainer>
      <Country>{country}</Country>
      <InfoContainer>
        <Column>
          <InfoRow>
            <ItemLabel>Total cases</ItemLabel>
            <ItemValue>{cases.toLocaleString(formating)}</ItemValue>
          </InfoRow>
          <InfoRow>
            <ItemLabel>Active</ItemLabel>
            <ItemValue>{active.toLocaleString(formating)}</ItemValue>
          </InfoRow>
        </Column>
        <Column>
          <InfoRow>
            <ItemLabel>Recovered</ItemLabel>
            <ItemValue>{recovered.toLocaleString(formating)}</ItemValue>
          </InfoRow>
          <InfoRow>
            <ItemLabel>Deaths</ItemLabel>
            <ItemValue>{deaths.toLocaleString(formating)}</ItemValue>
          </InfoRow>
        </Column>
      </InfoContainer>
      {isOpened && (
        <HiddenContainer opened={isOpened}>
          <Column>
            <InfoRow>
              <ItemLabel>Population</ItemLabel>
              <ItemValue>{population.toLocaleString(formating)}</ItemValue>
            </InfoRow>
            <InfoRow>
              <ItemLabel>Tests</ItemLabel>
              <ItemValue>{tests.toLocaleString(formating)}</ItemValue>
            </InfoRow>
          </Column>
          <Column>
            <InfoRow>
              <ItemLabel>Deaths 1M</ItemLabel>
              <ItemValue>{deathsPerMill.toLocaleString(formating)}</ItemValue>
            </InfoRow>
            <InfoRow>
              <ItemLabel>Recovered 1M</ItemLabel>
              <ItemValue>
                {recoveredPerMill.toLocaleString(formating)}
              </ItemValue>
            </InfoRow>
          </Column>
        </HiddenContainer>
      )}
    </CardWrapper>
  );
};

export default Card;
