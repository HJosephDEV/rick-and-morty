import { CardImage } from '@/@types';

import './styles.scss';

export default function CardImage({ imageSrc }: CardImage) {
  return (
    <div className="card-image-container">
      <img
        className="image__wrapper"
        src="assets/images/white.png"
        alt="background"
      />

      <img
        className="card__image"
        src={imageSrc}
        alt="image of character"
      />
    </div>
  );
}
