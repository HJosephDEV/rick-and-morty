import { SearchInputProps } from '@/@types/SearchInputProps';

import SearchButton from './components/SearchButton';

import './styles.scss';

export default function SearchInput({
  searchInputValue,
  setSearchInputValue
}: SearchInputProps): JSX.Element {
  const handleInput = (text: string) => setSearchInputValue(text);

  return (
    <div className="search-input__wrapper">
      <div className="search-input__container">
        <input
          type="text"
          placeholder="Pesquise por um personagem"
          value={searchInputValue}
          onChange={(e) => handleInput(e.target.value)}
        />
        <SearchButton />
      </div>
    </div>
  );
}
