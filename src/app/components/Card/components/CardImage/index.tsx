import { CardImage } from '@/@types/CardComponentsTypes';

import './styles.scss';

export default function CardImage({ imageSrc }: CardImage) {
  return (
    <div className="card-image-container">
      <img
        src={imageSrc}
        alt="image of character"
      />
    </div>
  );
}
