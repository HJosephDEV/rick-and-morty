'use client';
import { useState } from 'react';

import { CardProps } from '@/@types/CardComponentsTypes';

export default function useHome() {
  const test: CardProps[] = [
    {
      imageSrc: 'https://rickandmortyapi.com/api/character/avatar/30.jpeg',
      characterInfos: {
        name: 'Baby Poopybutthole',
        location: 'unknown',
        origin: 'unknown',
        species: 'Poopybutthole',
        status: 'Alive'
      }
    },
    {
      imageSrc: 'https://rickandmortyapi.com/api/character/avatar/30.jpeg',
      characterInfos: {
        name: 'Baby Poopybutthole',
        location: 'unknown',
        origin: 'unknown',
        species: 'Poopybutthole',
        status: 'Alive'
      }
    },
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
  ];

  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const filteredCharacters = searchInputValue
    ? test?.filter((character: CardProps) =>
        character.characterInfos.name.includes(searchInputValue)
      )
    : [];

  return {
    test,
    searchInputValue,
    setSearchInputValue,
    filteredCharacters
  };
}
