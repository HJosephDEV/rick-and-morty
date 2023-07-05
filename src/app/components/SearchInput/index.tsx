import SearchButton from './components/SearchButton';

import './styles.scss';

export default function SearchInput(): JSX.Element {
  return (
    <div className="search-input__wrapper">
      <div className="search-input__container">
        <input
          type="text"
          placeholder="Pesquise por um personagem"
        />
        <SearchButton />
      </div>
    </div>
  );
}
