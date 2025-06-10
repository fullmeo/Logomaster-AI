'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={{
      padding: '1rem',
      background: '#f3f4f6',
      display: 'flex',
      gap: '1rem'
    }}>
      <Link href="/">Accueil</Link>
      <Link href="/legal">Mentions légales</Link>
    </nav>
  );
}
