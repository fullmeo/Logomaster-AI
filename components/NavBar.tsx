'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'fr';
  const isEn = locale === 'en';

  return (
    <nav style={{
      padding: '1rem',
      background: '#f3f4f6',
      display: 'flex',
      gap: '1rem'
    }}>
      <Link href={isEn ? '/en' : '/'}>{isEn ? 'Home' : 'Accueil'}</Link>
      <Link href={isEn ? '/en/legal' : '/legal'}>{isEn ? 'Legal Notice' : 'Mentions légales'}</Link>
    </nav>
  );
}
