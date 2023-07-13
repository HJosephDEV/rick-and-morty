'use client';

import CharacterList from './components/CharacterList';
import SearchInput from './components/SearchInput';
import useHome from './hooks/useHome';

import './styles.scss';

export default function Home(): JSX.Element {
  const { searchInputValue, setSearchInputValue, filteredCharacters, searchCharacter, observer } =
    useHome();

  return (
    <main id="home-container">
      <SearchInput
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        searchCharacter={searchCharacter}
      />
      <CharacterList list={filteredCharacters} />

      <div ref={observer} />
    </main>
  );
}
