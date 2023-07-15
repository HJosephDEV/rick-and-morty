import { useEffect, useState } from 'react';

import './styles.scss';

export default function ScrollButton(): JSX.Element {
  const [showButton, setShowButton] = useState<boolean>(false);

  const checkScreen = () => {
    setShowButton(window.scrollY > screen.height / 2);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScreen);

    return () => window.removeEventListener('scroll', checkScreen);
  }, []);

  return (
    <button
      id="csb__button"
      style={{ display: showButton ? 'flex' : 'none' }}
      onClick={scrollToTop}
    >
      ▲
    </button>
  );
}
