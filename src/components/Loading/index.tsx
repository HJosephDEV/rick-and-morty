'use client';

import { useAppContext } from '@/context/AppContext';

import './styles.scss';

export default function Loading(): JSX.Element {
  const { isLoading } = useAppContext();
  return (
    <div
      id="lsc__loading-c"
      style={{ display: isLoading ? 'flex' : 'none' }}
    >
      <img
        src="assets/icons/loading.svg"
        alt="loading"
      />
    </div>
  );
}
