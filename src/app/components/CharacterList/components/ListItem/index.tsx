import { CharacterListItemProps } from '@/@types';

import Card from '@/app/components/Card';

import './styles.scss';

export default function ListItem({
  imageSrc,
  characterInfos
}: CharacterListItemProps): JSX.Element {
  return (
    <li className="character-list-item">
      <Card
        imageSrc={imageSrc}
        characterInfos={characterInfos}
      />
    </li>
  );
}
