import searchIcon from '../../assets/search.svg';
import { useState, useEffect } from 'react';

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  searchText,
  setSearchText,
}: SearchBarProps) {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => console.log(searchText), [searchText]);

  return (
    <div className="wrapper">
      <select name="" id=""></select>

      <input
        type="text"
        placeholder="number or name"
        onChange={handleTextChange}
      />

      <button>
        <img src={searchIcon} alt="pesquisa" width={16} height={16} />
      </button>
    </div>
  );
}
