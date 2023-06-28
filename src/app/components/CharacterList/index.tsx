import { CharacterListProps } from '@/@types/CharacterListTypes';

import ListItem from './components/ListItem';

import './styles.scss';
import { CharacterListItemProps } from '../../../@types/CharacterListTypes';

export default function CharacterList({ list }: CharacterListProps): JSX.Element {
  return (
    <>
      <ul className="character-list-container">
        {list.length > 0 &&
          list.map(({ imageSrc, characterInfos }: CharacterListItemProps, i: number) => (
            <ListItem
              key={`card-item-${i}`}
              imageSrc="https://rickandmortyapi.com/api/character/avatar/155.jpeg"
              characterInfos={{
                name: 'a',
                gender: '',
                location: '',
                origin: '',
                species: '',
                status: ''
              }}
            />
          ))}
      </ul>
    </>
  );
}
