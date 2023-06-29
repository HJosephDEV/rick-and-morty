import { CharacterListItemProps } from '../../../@types/CharacterListTypes';
import { CharacterListProps } from '@/@types/CharacterListTypes';

import ListItem from './components/ListItem';

import './styles.scss';

export default function CharacterList({ list }: CharacterListProps): JSX.Element {
  return (
    <>
      <ul className="character-list-container">
        {list.length > 0 &&
          list.map(({ imageSrc, characterInfos }: CharacterListItemProps, i: number) => (
            <ListItem
              key={`card-item-${i}`}
              imageSrc={imageSrc}
              characterInfos={characterInfos}
            />
          ))}
      </ul>
    </>
  );
}
