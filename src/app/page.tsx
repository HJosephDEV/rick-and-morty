'use client';

import ScrollButton from '@/components/ScrollButon';

import CharacterList from './components/CharacterList';
import SearchInput from './components/SearchInput';
import useHome from './hooks/useHome';
import './styles.scss';

export default function Home(): JSX.Element {
  const { searchInputRef, filteredCharacters, characterList, searchCharacter, observer } =
    useHome();

  return (
    <main id="home-container">
      <SearchInput
        inputRef={searchInputRef}
        searchCharacter={searchCharacter}
      />

      <CharacterList list={filteredCharacters.length > 0 ? filteredCharacters : characterList} />

      <div ref={observer} />

      <ScrollButton />
    </main>
  );
}
