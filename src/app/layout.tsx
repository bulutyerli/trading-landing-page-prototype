import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthStoreProvider } from './providers/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UAlgo Website',
  description:
    'Unlock the most powerful trading tools, signals, and alerts used by 100,000+ people globally',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <AuthStoreProvider>
          <Header />
          {children}
          <Footer />
        </AuthStoreProvider>
      </body>
    </html>
  );
}
