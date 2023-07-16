'use client';

import ScrollButton from '@/components/ScrollButon';

import CharacterList from './components/CharacterList';
import NotFound from './components/NotFound';
import SearchInput from './components/SearchInput';
import useHome from './hooks/useHome';

import './styles.scss';

export default function Home(): JSX.Element {
  const { searchInputRef, characterList, searchCharacter, observer } = useHome();

  return (
    <main
      id="home-container"
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <SearchInput
        inputRef={searchInputRef}
        searchCharacter={searchCharacter}
      />

      <CharacterList list={characterList} />

      {characterList.length === 0 && <NotFound />}

      <div ref={observer} />

      <ScrollButton />
    </main>
  );
}
