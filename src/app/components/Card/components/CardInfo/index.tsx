import { CardInfosProps } from '@/@types';

import TooltipComponent from '@/components/Tooltip';

import './styles.scss';

export default function CardInfo({
  id,
  name,
  status,
  species,
  origin,
  location
}: CardInfosProps): JSX.Element {
  return (
    <div className="card-info-container">
      <div className="d-flex">
        <span
          id={`character-name-${id}`}
          className="character-name font-color-white ellipsis-card-info"
        >
          {name}
        </span>
      </div>
      <TooltipComponent
        anchorSelect={`#character-name-${id}`}
        place="top"
      >
        <span>{name}</span>
      </TooltipComponent>

      <div className="d-flex">
        <span
          id={`character-status-species-${id}`}
          className="character-content character-status-species font-color-white ellipsis-card-info"
        >
          {status} - {species}
        </span>
      </div>
      <TooltipComponent
        anchorSelect={`#character-status-species-${id}`}
        place="top"
      >
        <span>
          {status} - {species}
        </span>
      </TooltipComponent>

      <div className="character-title-content-container">
        <span className="character-title font-color-gray">Primeira vez visto:</span>
        <div className="d-flex">
          <span
            id={`character-origin-${id}`}
            className="character-content character-origin font-color-white ellipsis-card-info"
          >
            {origin}
          </span>
        </div>
        <TooltipComponent
          anchorSelect={`#character-origin-${id}`}
          place="top"
        >
          <span>{origin}</span>
        </TooltipComponent>
      </div>

      <div className="character-title-content-container">
        <span className="character-title font-color-gray">Última localização:</span>
        <div className="d-flex">
          <span
            id={`character-location-${id}`}
            className="character-content character-location font-color-white ellipsis-card-info"
          >
            {location}
          </span>
        </div>
        <TooltipComponent
          anchorSelect={`#character-location-${id}`}
          place="top"
        >
          <span>{location}</span>
        </TooltipComponent>
      </div>
    </div>
  );
}
