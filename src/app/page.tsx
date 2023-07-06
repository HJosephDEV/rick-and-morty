import { CardProps } from '@/@types/CardComponentsTypes';

import CharacterList from './components/CharacterList';
import SearchInput from './components/SearchInput';
import useHome from './hooks/useHome';

import './styles.scss';

export default function Home(): JSX.Element {
  const { searchInputValue, setSearchInputValue, filteredCharacters } = useHome();
  return (
    <main id="home-container">
      <SearchInput
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      <CharacterList list={filteredCharacters} />
    </main>
  );
}
