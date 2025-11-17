import './globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'LogoMaster AI - Créez des logos uniques avec l\'IA',
  description: 'Générez des logos professionnels uniques grâce à l\'intelligence artificielle. Simple, rapide et puissant.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
