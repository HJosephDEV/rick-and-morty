import { CardProps } from '@/@types/CardComponentsTypes';

import CharacterList from './components/CharacterList';

import './styles.scss';

export default function Home(): JSX.Element {
  const test: CardProps[] = [
    {
      imageSrc: 'https://rickandmortyapi.com/api/character/avatar/155.jpeg',
      characterInfos: {
        name: 'a',
        gender: '',
        location: '',
        origin: '',
        species: '',
        status: ''
      }
    }
  ];

  return (
    <main id="home-container">
      <CharacterList list={test} />
    </main>
  );
}
