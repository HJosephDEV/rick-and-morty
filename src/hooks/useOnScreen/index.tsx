import { useEffect, useRef, useState } from 'react';

export default function useOnScreen() {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const observer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = (): void => {
      if (!observer.current) return;

      const positions: DOMRect = observer.current.getBoundingClientRect();
      const start: number = positions.top;
      const end: number = positions.bottom;

      const isVisible: boolean = start >= 0 && end <= window.innerHeight;
      setIntersecting(isVisible);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { isIntersecting, observer };
}
