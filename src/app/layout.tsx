import '@/assets/styles/reset.scss';
import '@/assets/styles/globals.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
