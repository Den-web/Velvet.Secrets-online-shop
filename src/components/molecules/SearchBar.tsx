import React from 'react';
import { SearchInput } from '../atoms/index';

const SearchBar: React.FC = () => {
  return (
    <div className="hidden md:block">
      <SearchInput />
    </div>
  );
};

export default SearchBar;
