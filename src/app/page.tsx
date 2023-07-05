import { CardProps } from '@/@types/CardComponentsTypes';

import CharacterList from './components/CharacterList';
import SearchInput from './components/SearchInput';

import './styles.scss';

export default function Home(): JSX.Element {
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

  return (
    <main id="home-container">
      <SearchInput />
      <CharacterList list={test} />
    </main>
  );
}
