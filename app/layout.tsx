// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
