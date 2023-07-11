import { useEffect, useState } from 'react';

import { CardProps } from '@/@types';

import axios from '@/axios/axios';

export default function useHome() {
  const [characterList, setCharacter] = useState<CardProps[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const filteredCharacters = searchInputValue
    ? characterList.filter((character) =>
        character.characterInfos.name.toLowerCase().includes(searchInputValue)
      )
    : characterList;

  window.addEventListener('keydown', function ({ key }) {
    key === 'Enter' && searchCharacter(searchInputValue);
  });

  const createCharactersList = (characters: any[]): CardProps[] => {
    return characters.map((character) => ({
      imageSrc: character.image,
      characterInfos: {
        id: character.id,
        name: character.name,
        location: character.location.name,
        origin: character.origin.name,
        species: character.species,
        status: character.status
      }
    }));
  };

  const addAndSortNewCharacters = (charactersListPattern: CardProps[]): void =>
    setCharacter(
      [...characterList, ...charactersListPattern]
        .filter(
          (character, i, list) =>
            list
              .map((characterHelp: CardProps) => characterHelp.characterInfos.id)
              .indexOf(character.characterInfos.id) === i
        )
        .sort((a, b) => {
          if (a.characterInfos.id > b.characterInfos.id) return 1;
          if (a.characterInfos.id < b.characterInfos.id) return -1;
          return 0;
        })
    );

  const searchCharacter = async (name: string): Promise<void> => {
    const { data }: any = await axios.get(`/api/character/?name=${name}`);
    const characters: any[] = data.results;
    const charactersListPattern: CardProps[] = createCharactersList(characters);

    addAndSortNewCharacters(charactersListPattern);
  };

  const getCharacters = async () => {
    const { data }: any = await axios.get('/api/character');
    const characters: any[] = data.results;
    const charactersListPattern: CardProps[] = createCharactersList(characters);

    setCharacter(charactersListPattern);
  };

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    characterList,
    setCharacter,
    searchInputValue,
    setSearchInputValue,
    filteredCharacters,
    searchCharacter
  };
}
