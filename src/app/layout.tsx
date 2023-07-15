import '@/assets/styles/reset.scss';
import '@/assets/styles/globals.scss';

import { ReactNode } from '@/@types';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import AppProviderWrapper from '@/providers/AppProvider';

export default function RootLayout({ children }: ReactNode) {
  return (
    <html lang="pt-BR">
      <body>
        <AppProviderWrapper>
          <Loading />
          <Header />
          {children}
          <Footer />
        </AppProviderWrapper>
      </body>
    </html>
  );
}
