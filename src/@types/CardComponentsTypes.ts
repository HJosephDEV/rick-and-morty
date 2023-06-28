export type CardInfosProps = {
  id?: number;
  name: string;
  status: string;
  species: string;
  gender: string;
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
