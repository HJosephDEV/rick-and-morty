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
  children: React.ReactNode | React.ReactNode[];
};
