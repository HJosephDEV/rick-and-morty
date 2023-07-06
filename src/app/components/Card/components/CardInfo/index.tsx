import { CardInfosProps } from '@/@types/CardComponentsTypes';

import TooltipComponent from '@/components/Tooltip';

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
      <div className="d-flex">
        <span className="character-name font-color-white ellipsis-card-info">{name}</span>
      </div>
      <TooltipComponent
        anchorSelect=".character-name"
        place="top"
      >
        {name}
      </TooltipComponent>

      <div className="d-flex">
        <span className="character-content character-status-species font-color-white ellipsis-card-info">
          {status} - {species}
        </span>
      </div>
      <TooltipComponent
        anchorSelect=".character-status-species"
        place="top"
      >
        {status} - {species}
      </TooltipComponent>

      <div className="character-title-content-container">
        <span className="character-title font-color-gray">Primeira vez visto:</span>
        <div className="d-flex">
          <span className="character-content character-origin font-color-white ellipsis-card-info">
            {origin}
          </span>
        </div>
        <TooltipComponent
          anchorSelect=".character-origin"
          place="top"
        >
          {origin}
        </TooltipComponent>
      </div>

      <div className="character-title-content-container">
        <span className="character-title font-color-gray">Última localização:</span>
        <div className="d-flex">
          <span className="character-content character-location font-color-white ellipsis-card-info">
            {location}
          </span>
        </div>
        <TooltipComponent
          anchorSelect=".character-location"
          place="top"
        >
          {location}
        </TooltipComponent>
      </div>
    </div>
  );
}
