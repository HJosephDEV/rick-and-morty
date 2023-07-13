import { useEffect, useRef, useState } from 'react';

import { CardProps } from '@/@types';

import axios from '@/axios/axios';
import useOnScreen from '@/hooks/useOnScreen';

export default function useHome() {
  const [characterList, setCharacter] = useState<CardProps[]>([]);
  const { isIntersecting, observer } = useOnScreen();

  const searchedByExternListRef = useRef<boolean>(false);
  const setSearchedByExternListRef = (flag: boolean) => (searchedByExternListRef.current = flag);

  const infoForNextPageOfTheGeneralListRef = useRef<string | null>('');
  const setInfoForNextPageOfTheGeneralListRef = (link: string) =>
    (infoForNextPageOfTheGeneralListRef.current = link);

  const infoForNextPageOfTheFilterRef = useRef<string | null>('');
  const setInfoForNextPageOfTheFilterRef = (link: string) =>
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

  const getCharacters = (): void => {
    axios
      .get('/api/character')
      .then((response) => {
        const { data } = response;
        const characters: any[] = data.results;
        const charactersListPattern: CardProps[] = createCharactersList(characters);

        setInfoForNextPageOfTheGeneralListRef(data.info.next);
        setCharacter(charactersListPattern);
      })
      .catch((e) => console.error(e.message));
  };
  const searchCharacter = (name: string): void => {
    axios
      .get(`/api/charactereee/?name=${name}`)
      .then((response) => {
        const { data } = response;
        const characters: any[] = data.results;
        const charactersListPattern: CardProps[] = createCharactersList(characters);

        setInfoForNextPageOfTheFilterRef(data.info.next);
        setSearchedByExternListRef(true);
        addAndSortNewCharacters(charactersListPattern);
      })
      .catch((e) => console.error(e.message));
  };

  const getNextPage = (): void => {
    const nextPageLink: string | null | undefined = searchedByExternListRef.current
      ? infoForNextPageOfTheFilterRef.current?.slice(27)
      : infoForNextPageOfTheGeneralListRef.current?.slice(27);

    if (!nextPageLink) return;

    axios
      .get(nextPageLink)
      .then((response) => {
        const { data } = response;
        const characters: any[] = data.results;
        const charactersListPattern: CardProps[] = createCharactersList(characters);

        searchedByExternListRef.current
          ? setInfoForNextPageOfTheFilterRef(data.info.next)
          : setInfoForNextPageOfTheGeneralListRef(data.info.next);

        addAndSortNewCharacters(charactersListPattern);
      })
      .catch((e) => console.error(e.message));
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
