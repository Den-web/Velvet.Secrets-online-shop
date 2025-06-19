// // src/components/molecules/SearchBar.tsx
import React from 'react';
import SearchInput from '../atoms/SearchInput';

const SearchBar: React.FC = () => {
  return (
    <div className="hidden md:block">
      <SearchInput />
    </div>
  );
};

export default SearchBar;
