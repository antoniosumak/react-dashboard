import React from 'react';
import { SearchbarWrapper, SearchbarInput } from './SearchBarStyles';

const Searchbar = ({ onValueChange, placeholder }) => {
  return (
    <SearchbarWrapper>
      <SearchbarInput
        type="text"
        onChange={(input) => onValueChange(input.target.value)}
        placeholder={placeholder}
      />
    </SearchbarWrapper>
  );
};

export default Searchbar;
