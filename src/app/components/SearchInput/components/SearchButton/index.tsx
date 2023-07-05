import './styles.scss';

export default function SearchButton(): JSX.Element {
  return (
    <button className="search-button__container">
      <img src="/assets/icons/search-icon.svg" />
    </button>
  );
}
