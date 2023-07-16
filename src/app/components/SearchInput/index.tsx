import { SearchInputProps } from '@/@types';

import SearchButton from './components/SearchButton';

import './styles.scss';

export default function SearchInput({ inputRef, searchCharacter }: SearchInputProps): JSX.Element {
  const handleSearchCharacter = (): void => searchCharacter();

  return (
    <div className="search-input__wrapper">
      <div className="search-input__container">
        <input
          type="text"
          placeholder="Pesquise por um personagem"
          ref={inputRef}
        />
        <SearchButton clickEvent={handleSearchCharacter} />
      </div>
      <h3 className="search-obs">
        Pressione o botão de pesquisa ou pressione Enter para pesquisar
      </h3>
    </div>
  );
}
