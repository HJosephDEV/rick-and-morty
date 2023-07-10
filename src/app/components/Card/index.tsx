import { CardProps } from '@/@types';

import CardImage from './components/CardImage';
import CardInfo from './components/CardInfo';

import './styles.scss';

export default function Card({ imageSrc, characterInfos }: CardProps): JSX.Element {
  return (
    <div className="character-card-container">
      <CardImage imageSrc={imageSrc} />
      <CardInfo {...characterInfos} />
    </div>
  );
}
