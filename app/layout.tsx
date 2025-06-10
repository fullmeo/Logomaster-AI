// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="fr">
      <body>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}
