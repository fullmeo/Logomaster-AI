'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const locale = pathname.startsWith('/en') ? 'en' : 'fr';
  const altLocale = locale === 'fr' ? 'en' : 'fr';

  const newPath = locale === 'fr'
    ? '/en' + pathname
    : pathname.replace(/^\/en/, '');

  return (
    <div style={{ position: 'absolute', top: 10, right: 20 }}>
      <Link href={newPath} style={{ textDecoration: 'underline', color: '#2563eb' }}>
        {altLocale === 'en' ? 'English' : 'Français'}
      </Link>
    </div>
  );
}
