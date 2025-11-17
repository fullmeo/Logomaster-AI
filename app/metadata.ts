// app/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://logomaster-ai.com'),
  title: {
    default: 'LogoMaster AI - Créez des logos professionnels avec l\'IA',
    template: '%s | LogoMaster AI',
  },
  description: 'Générez des logos professionnels uniques en quelques secondes grâce à notre intelligence artificielle avancée. Simple, rapide et puissant.',
  keywords: ['logo', 'design', 'IA', 'intelligence artificielle', 'générateur de logo', 'création logo', 'branding', 'identité visuelle'],
  authors: [{ name: 'LogoMaster AI' }],
  creator: 'LogoMaster AI',
  publisher: 'LogoMaster AI',
  icons: {
    icon: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://logomaster-ai.com',
    title: 'LogoMaster AI - Créez des logos professionnels avec l\'IA',
    description: 'Générez des logos professionnels uniques en quelques secondes grâce à notre intelligence artificielle avancée.',
    siteName: 'LogoMaster AI',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'LogoMaster AI - Générateur de logos par IA',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LogoMaster AI - Créez des logos professionnels avec l\'IA',
    description: 'Générez des logos professionnels uniques en quelques secondes grâce à notre intelligence artificielle avancée.',
    images: ['/og-image.png'],
    creator: '@logomasterai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
