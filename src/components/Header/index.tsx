import './styles.scss';

export default function Header(): JSX.Element {
  return (
    <header id="header-layout">
      <div className="white-container">
        <img
          src="/assets/gifs/cat.gif"
          alt="cat"
        />
      </div>
      <div className="title-image-container">
        <img
          src="/assets/images/rick-and-morty.png"
          alt="title page"
        />
      </div>
    </header>
  );
}
