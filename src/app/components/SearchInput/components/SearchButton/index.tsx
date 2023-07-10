import { SearchButtonProps } from '@/@types';

import './styles.scss';

export default function SearchButton({ clickEvent }: SearchButtonProps): JSX.Element {
  return (
    <button
      className="search-button__container"
      onClick={clickEvent}
    >
      <img src="/assets/icons/search-icon.svg" />
    </button>
  );
}
