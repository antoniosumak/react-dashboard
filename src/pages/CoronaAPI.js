import React, { useState, useEffect } from 'react';
import Section from '../components/Section/Section';
import Card from '../components/Card/Card';
import Searchbar from '../components/SearchBar/SearchBar';

import {
  Grid,
  Center,
  Button,
  Loading,
  CenterOfScreen,
  DateRow,
  DateValue,
  DateLabel,
} from '../lib/styles/generalStyles';

const CoronaAPI = () => {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(12);
  const [searchResults, setSearchResults] = useState('');
  const [dateString, setDateString] = useState('');
  useEffect(() => {
    fetch('https://corona.lmao.ninja/v3/covid-19/countries')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSearchResults(data);

        let date = new Date(data[0].updated);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        setDateString(`${day}.${month}.${year} ${hours}:${minutes}`);
      });
  }, []);

  const handleSearch = (input) => {
    const filteredValue = searchResults.filter((country) =>
      country.country.toLowerCase().includes(input.toLowerCase())
    );
    setData(filteredValue);
  };
  console.log(data);
  return (
    <Section>
      <Center>
        {' '}
        <Searchbar
          onValueChange={handleSearch}
          placeholder={'Input wanted country...'}
        />
      </Center>
      <DateRow>
        <DateLabel>Updated at: </DateLabel>
        <DateValue>{dateString}</DateValue>
        {console.log(data)}
      </DateRow>
      {data ? (
        <Grid>
          {data.map(
            (values, index) =>
              index < counter && (
                <Card
                  key={index}
                  country={values.country}
                  active={values.active}
                  cases={values.cases}
                  deaths={values.deaths}
                  recovered={values.recovered}
                  population={values.population}
                  tests={values.tests}
                  deathsPerMill={values.deathsPerOneMillion}
                  recoveredPerMill={values.recoveredPerOneMillion}
                  src={values.countryInfo.iso2}
                />
              )
          )}
        </Grid>
      ) : (
        <CenterOfScreen>
          <Loading />
        </CenterOfScreen>
      )}

      <Center>
        {data && (
          <Button width={'250'} onClick={() => setCounter(counter + 12)}>
            Show more
          </Button>
        )}
      </Center>
    </Section>
  );
};

export default CoronaAPI;
