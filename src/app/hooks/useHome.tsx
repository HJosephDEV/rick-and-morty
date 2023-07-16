import { useEffect, useRef, useState } from 'react';

import { CardProps, Character, ResponseCharacter } from '@/@types';

import axios from '@/axios/axios';
import { useAppContext } from '@/context/AppContext';
import useOnScreen from '@/hooks/useOnScreen';

import { AxiosError, AxiosResponse } from 'axios';

export default function useHome() {
  const { updateIsLoading } = useAppContext();
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

  const searchInputRef = useRef<HTMLInputElement>(null);

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

  const getCharacters = (): void => {
    updateIsLoading(true);

    axios
      .get('/api/character')
      .then((response: AxiosResponse<ResponseCharacter>) => {
        const { data } = response;
        const characters = data.results;
        const charactersListPattern = createCharactersList(characters);

        setInfoForNextPageOfTheGeneralListRef(data.info.next);
        setCharacter(charactersListPattern);
        updateIsLoading(false);
      })
      .catch((error: AxiosError) => {
        error.response?.status === 404 && setCharacter([]);
        updateIsLoading(false);
      });
  };

  const searchCharacter = (): void => {
    updateIsLoading(true);
    axios
      .get(`/api/character?name=${searchInputRef.current?.value ?? ''}`)
      .then((response: AxiosResponse<ResponseCharacter>) => {
        const { data } = response;
        const characters = data.results;
        const charactersListPattern = createCharactersList(characters);

        setInfoForNextPageOfTheFilterRef(data.info.next);
        setSearchedByExternListRef(true);
        console.log(charactersListPattern);
        setCharacter(charactersListPattern);
        updateIsLoading(false);
      })
      .catch((error: AxiosError) => {
        error.response?.status === 404 && setCharacter([]);
        updateIsLoading(false);
      });
  };

  const getNextPage = (): void => {
    const nextPageLink: string | null | undefined = searchedByExternListRef.current
      ? infoForNextPageOfTheFilterRef.current?.slice(27)
      : infoForNextPageOfTheGeneralListRef.current?.slice(27);

    if (!nextPageLink) return;

    updateIsLoading(true);
    axios
      .get(nextPageLink)
      .then((response: AxiosResponse<ResponseCharacter>) => {
        const { data } = response;
        const characters = data.results;
        const charactersListPattern = createCharactersList(characters);

        searchedByExternListRef.current
          ? setInfoForNextPageOfTheFilterRef(data.info.next)
          : setInfoForNextPageOfTheGeneralListRef(data.info.next);

        setCharacter([...characterList, ...charactersListPattern]);
        updateIsLoading(false);
      })
      .catch((error: AxiosError) => {
        error.response?.status === 404 && setCharacter([]);
        updateIsLoading(false);
      });
  };

  const handlerEventListernerKeydown = ({ key }: { key: string }) => {
    if (key === 'Enter') {
      searchCharacter();
      return;
    }

    const inputValue: string = searchInputRef.current?.value ?? '';
    searchedByExternListRef.current && !inputValue && setSearchedByExternListRef(false);
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
    searchInputRef,
    searchCharacter,
    observer
  };
}
