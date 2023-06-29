import { CardInfosProps } from '@/@types/CardComponentsTypes';

import './styles.scss';

export default function CardInfo({
  name,
  status,
  species,
  origin,
  location
}: CardInfosProps): JSX.Element {
  return (
    <div className="card-info-container">
      <span className="character-name font-color">{name}</span>

      <span className="character-content font-color">
        {status} - {species}
      </span>

      <div className="character-title-content-container">
        <span className="character-title font-color">Primeira vez visto:</span>
        <span className="character-content font-color">{origin}</span>
      </div>

      <div className="character-title-content-container">
        <span className="character-title font-color">Última localização:</span>
        <span className="character-content font-color">{location}</span>
      </div>
    </div>
  );
}
