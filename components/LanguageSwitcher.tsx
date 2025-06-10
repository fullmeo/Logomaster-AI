'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'fr';
  const altLocale = locale === 'fr' ? 'en' : 'fr';
  const href = locale === 'fr' ? '/en' + pathname : pathname.replace(/^\/en/, '');

  return (
    <div style={{ position: 'fixed', top: 10, right: 20 }}>
      <Link href={href} style={{ textDecoration: 'underline', color: '#2563eb' }}>
        {altLocale === 'en' ? 'English' : 'Français'}
      </Link>
    </div>
  );
}
