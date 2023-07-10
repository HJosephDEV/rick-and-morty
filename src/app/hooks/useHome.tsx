import { useState } from 'react';

import { CardProps } from '@/@types';

export default function useHome() {
  const [characterList, setCharacter] = useState<CardProps[]>([
    {
      imageSrc: 'https://rickandmortyapi.com/api/character/avatar/30.jpeg',
      characterInfos: {
        name: 'Baby Poopybutthole',
        location: 'unknown',
        origin: 'unknown',
        species: 'Poopybutthole',
        status: 'Alive'
      }
    }
  ]);

  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [filteredCharacters, setFilteredCharacters] = useState<CardProps[]>(characterList);

  window.addEventListener('keydown', function ({ key }) {
    key === 'Enter' && searchCharacter(searchInputValue);
  });

  const searchCharacter = (name: string): void => {
    const inputHasValue = checkIfInputHasValue(name);

    if (!inputHasValue) return;

    const filteredList: CardProps[] = filterCharacterInCurrentList(name);
    const foundCharacter: boolean = checkIfCharacterWasFound(filteredList);

    foundCharacter ? setFilteredCharacters(filteredList) : searchCharacterInExternList(name);
  };

  const checkIfInputHasValue = (value: string): boolean => {
    if (!value) {
      characterList != filteredCharacters && setFilteredCharacters(characterList);
      return false;
    }

    return true;
  };

  const filterCharacterInCurrentList = (name: string): CardProps[] =>
    characterList?.filter((character: CardProps) =>
      character.characterInfos.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

  const checkIfCharacterWasFound = (list: CardProps[]): boolean => list.length > 0;

  const searchCharacterInExternList = async (name: string): Promise<void> => {
    console.log(name);
    checkIfExternListHasResult([]);
  };

  const checkIfExternListHasResult = (list: CardProps[]) => {
    if (list.length > 0) {
      setFilteredCharacters([...filteredCharacters, ...list]);
      setCharacter([...characterList, ...list]);
      return;
    }

    setFilteredCharacters([]);
  };

  return {
    characterList,
    setCharacter,
    searchInputValue,
    setSearchInputValue,
    filteredCharacters,
    searchCharacter
  };
}
