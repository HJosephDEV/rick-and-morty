import { useEffect, useRef, useState } from 'react';

import { CardProps, Character, ResponseCharacter } from '@/@types';

import axios from '@/axios/axios';
import useOnScreen from '@/hooks/useOnScreen';

import { AxiosError, AxiosResponse } from 'axios';

export default function useHome() {
  const [characterList, setCharacter] = useState<CardProps[]>([]);
  const { isIntersecting, observer } = useOnScreen();

  const searchedByExternListRef = useRef<boolean>(false);
  const setSearchedByExternListRef = (flag: boolean) => (searchedByExternListRef.current = flag);

  const infoForNextPageOfTheGeneralListRef = useRef<string | null>('');
  const setInfoForNextPageOfTheGeneralListRef = (link: string | null) =>
    (infoForNextPageOfTheGeneralListRef.current = link);

  const infoForNextPageOfTheFilterRef = useRef<string | null>('');
  const setInfoForNextPageOfTheFilterRef = (link: string | null) =>
    (infoForNextPageOfTheFilterRef.current = link);

  const [searchInputValue, _setSearchInputValue] = useState<string>('');
  const searchInputValueRef = useRef('');

  const setSearchInputValue = (data: string) => {
    searchInputValueRef.current = data;
    _setSearchInputValue(data);
  };

  const filteredCharacters = searchInputValue
    ? characterList.filter((character) =>
        character.characterInfos.name.toLowerCase().includes(searchInputValue)
      )
    : characterList;

  const createCharactersList = (characters: Character[]): CardProps[] => {
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

  const getCharacters = (): void => {
    axios
      .get('/api/character')
      .then((response: AxiosResponse<ResponseCharacter>) => {
        const { data } = response;
        const characters = data.results;
        const charactersListPattern = createCharactersList(characters);

        setInfoForNextPageOfTheGeneralListRef(data.info.next);
        setCharacter(charactersListPattern);
      })
      .catch((error: AxiosError) => console.error(error.message));
  };
  const searchCharacter = (name: string): void => {
    axios
      .get(`/api/character?name=${name}`)
      .then((response: AxiosResponse<ResponseCharacter>) => {
        const { data } = response;
        const characters = data.results;
        const charactersListPattern = createCharactersList(characters);

        setInfoForNextPageOfTheFilterRef(data.info.next);
        setSearchedByExternListRef(true);
        addAndSortNewCharacters(charactersListPattern);
      })
      .catch((error: AxiosError) => console.error(error.message));
  };

  const getNextPage = (): void => {
    const nextPageLink: string | null | undefined = searchedByExternListRef.current
      ? infoForNextPageOfTheFilterRef.current?.slice(27)
      : infoForNextPageOfTheGeneralListRef.current?.slice(27);

    if (!nextPageLink) return;

    axios
      .get(nextPageLink)
      .then((response: AxiosResponse<ResponseCharacter>) => {
        const { data } = response;
        const characters = data.results;
        const charactersListPattern = createCharactersList(characters);

        searchedByExternListRef.current
          ? setInfoForNextPageOfTheFilterRef(data.info.next)
          : setInfoForNextPageOfTheGeneralListRef(data.info.next);

        addAndSortNewCharacters(charactersListPattern);
      })
      .catch((error: AxiosError) => console.error(error.message));
  };

  const handlerEventListernerKeydown = ({ key }: { key: string }) => {
    if (key === 'Enter') {
      searchCharacter(searchInputValueRef.current);
      return;
    }

    searchedByExternListRef.current && setSearchedByExternListRef(false);
  };

  useEffect(() => {
    getCharacters();

    window.addEventListener('keydown', handlerEventListernerKeydown);
    return () => window.removeEventListener('keydown', handlerEventListernerKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isIntersecting && getNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  return {
    characterList,
    setCharacter,
    searchInputValue,
    setSearchInputValue,
    filteredCharacters,
    searchCharacter,
    observer
  };
}
