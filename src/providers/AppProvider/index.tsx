import { ReactNode } from '../../@types/index';

import { AppProvider } from '@/context/AppContext';

export default function AppProviderWrapper({ children }: ReactNode): JSX.Element {
  return <AppProvider>{children}</AppProvider>;
}
