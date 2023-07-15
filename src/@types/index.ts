export type CardInfosProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: string;
  location: string;
};

export type CardImage = {
  imageSrc: string;
};

export type CardProps = {
  imageSrc: string;
  characterInfos: CardInfosProps;
};

export type CharacterListProps = {
  list: Array<CardProps>;
};

export type CharacterListItemProps = CardProps;

export type SearchInputProps = {
  searchInputValue: string;
  setSearchInputValue: (text: string) => void;
  searchCharacter: (text: string) => void;
};

export type SearchButtonProps = { clickEvent: () => void };

export type TooltipProps = {
  anchorSelect: string;
  place: 'top' | 'bottom';
  children: ReactNode;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharacterInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type ResponseCharacter = {
  info: CharacterInfo;
  results: Character[];
};

export type ReactNode = {
  children: React.ReactNode | React.ReactNode[];
};

export type AppContextType = {
  isLoading: boolean;
  updateIsLoading: (value: boolean) => void;
};
