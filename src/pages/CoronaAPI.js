import React, { useState, useEffect } from 'react';
import Section from '../components/Section/Section';
import Card from '../components/Card/Card';
import Searchbar from '../components/SearchBar/SearchBar';

import { Grid, Center } from '../lib/styles/generalStyles';

const CoronaAPI = () => {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(24);
  useEffect(() => {
    fetch('https://corona.lmao.ninja/v3/covid-19/countries')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <Section>
      <Center>
        {' '}
        <Searchbar />
      </Center>
      <Grid>
        {data &&
          data.map(
            (values, index) =>
              index < counter && (
                <Card
                  key={index}
                  country={values.country}
                  active={values.active}
                  cases={values.cases}
                  src={values.countryInfo.iso2}
                />
              )
          )}
      </Grid>
      <button onClick={() => setCounter(counter + 12)}>Show more</button>
    </Section>
  );
};

export default CoronaAPI;
