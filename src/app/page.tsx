'use client';

import CharacterList from './components/CharacterList';
import SearchInput from './components/SearchInput';
import useHome from './hooks/useHome';

import './styles.scss';

export default function Home(): JSX.Element {
  const { searchInputValue, setSearchInputValue, filteredCharacters, searchCharacter } = useHome();

  return (
    <main id="home-container">
      <SearchInput
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        searchCharacter={searchCharacter}
      />
      <CharacterList list={filteredCharacters} />
    </main>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
