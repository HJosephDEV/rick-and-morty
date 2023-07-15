'use client';

import { createContext, useContext, useState } from 'react';

import { AppContextType, ReactNode } from '@/@types';

export const AppContext = createContext<AppContextType>({
  isLoading: false,
  updateIsLoading: () => {
    return;
  }
});

export const AppProvider = ({ children }: ReactNode) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const updateIsLoading = (value: boolean) => setIsLoading(value);

  return (
    <AppContext.Provider value={{ isLoading, updateIsLoading }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const { isLoading, updateIsLoading } = useContext(AppContext);

  return { isLoading, updateIsLoading };
};
