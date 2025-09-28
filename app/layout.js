import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jasa Sedot Mampet Profesional & Cepat',
  description: 'Solusi cepat dan tuntas untuk masalah WC mampet, saluran air, dan limbah.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-dark dark:bg-dark dark:text-gray-100`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}