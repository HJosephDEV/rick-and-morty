import { SearchInputProps } from '@/@types';

import SearchButton from './components/SearchButton';

import './styles.scss';

export default function SearchInput({
  searchInputValue,
  setSearchInputValue,
  searchCharacter
}: SearchInputProps): JSX.Element {
  const handleInput = (text: string) => setSearchInputValue(text);

  const handleSearchCharacter = (): void => searchCharacter(searchInputValue);

  return (
    <div className="search-input__wrapper">
      <div className="search-input__container">
        <input
          type="text"
          placeholder="Pesquise por um personagem"
          value={searchInputValue}
          onChange={(e) => handleInput(e.target.value)}
        />
        <SearchButton clickEvent={handleSearchCharacter} />
      </div>
      <h3 className="search-obs">Pressione o botão de pesquisa ou aperte enter para pesquisar</h3>
    </div>
  );
}
