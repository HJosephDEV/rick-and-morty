'use client';
import { Tooltip } from 'react-tooltip';

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
      <div className="d-flex">
        <span className="character-name font-color-white ellipsis-card-info">{name}</span>
      </div>
      <Tooltip
        anchorSelect=".character-name"
        place="top"
      >
        {name}
      </Tooltip>

      <div className="d-flex">
        <span className="character-content character-status-species font-color-white ellipsis-card-info">
          {status} - {species}
        </span>
      </div>
      <Tooltip
        anchorSelect=".character-status-species"
        place="top"
      >
        {status} - {species}
      </Tooltip>

      <div className="character-title-content-container">
        <span className="character-title font-color-gray">Primeira vez visto:</span>
        <div className="d-flex">
          <span className="character-content character-origin font-color-white ellipsis-card-info">
            {origin}
          </span>
        </div>
        <Tooltip
          anchorSelect=".character-origin"
          place="top"
        >
          {origin}
        </Tooltip>
      </div>

      <div className="character-title-content-container">
        <span className="character-title font-color-gray">Última localização:</span>
        <div className="d-flex">
          <span className="character-content character-location font-color-white ellipsis-card-info">
            {location}
          </span>
        </div>
        <Tooltip
          anchorSelect=".character-location"
          place="top"
        >
          {location}
        </Tooltip>
      </div>
    </div>
  );
}
