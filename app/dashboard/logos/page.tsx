'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/Card';
import Button from '@/components/Button';

interface Logo {
  id: string;
  companyName: string;
  style: string;
  colors: string[];
  shape: string;
  size: string;
  timestamp: number;
  isFavorite?: boolean;
}

export default function LogosPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [logos, setLogos] = useState<Logo[]>([]);
  const [filter, setFilter] = useState<'all' | 'favorites'>('all');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    // Load logos from localStorage (will be replaced with API calls)
    const history = JSON.parse(localStorage.getItem('logomaster_history') || '[]');
    const favorites = JSON.parse(localStorage.getItem('logomaster_favorites') || '[]');
    const favoriteIds = new Set(favorites.map((f: any) => f.id));

    const logosWithFavorites = history.map((logo: Logo) => ({
      ...logo,
      isFavorite: favoriteIds.has(logo.id),
    }));

    setLogos(logosWithFavorites.reverse()); // Most recent first
  }, []);

  const toggleFavorite = (logoId: string) => {
    const favorites = JSON.parse(localStorage.getItem('logomaster_favorites') || '[]');
    const logo = logos.find((l) => l.id === logoId);

    if (!logo) return;

    const isFavorite = favorites.some((f: any) => f.id === logoId);

    if (isFavorite) {
      // Remove from favorites
      const newFavorites = favorites.filter((f: any) => f.id !== logoId);
      localStorage.setItem('logomaster_favorites', JSON.stringify(newFavorites));
    } else {
      // Add to favorites
      favorites.push(logo);
      localStorage.setItem('logomaster_favorites', JSON.stringify(favorites));
    }

    // Update state
    setLogos(
      logos.map((l) => (l.id === logoId ? { ...l, isFavorite: !isFavorite } : l))
    );
  };

  const deleteLogo = (logoId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce logo ?')) return;

    const history = JSON.parse(localStorage.getItem('logomaster_history') || '[]');
    const newHistory = history.filter((l: any) => l.id !== logoId);
    localStorage.setItem('logomaster_history', JSON.stringify(newHistory));

    // Also remove from favorites if present
    const favorites = JSON.parse(localStorage.getItem('logomaster_favorites') || '[]');
    const newFavorites = favorites.filter((f: any) => f.id !== logoId);
    localStorage.setItem('logomaster_favorites', JSON.stringify(newFavorites));

    setLogos(logos.filter((l) => l.id !== logoId));
  };

  const filteredLogos =
    filter === 'favorites' ? logos.filter((l) => l.isFavorite) : logos;

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Mes logos
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gérez vos logos créés avec LogoMaster AI
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Tous ({logos.length})
          </button>
          <button
            onClick={() => setFilter('favorites')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              filter === 'favorites'
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Favoris ({logos.filter((l) => l.isFavorite).length})
          </button>
        </div>

        {/* Logos Grid */}
        {filteredLogos.length === 0 ? (
          <Card>
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {filter === 'favorites'
                  ? 'Aucun favori'
                  : 'Aucun logo créé'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {filter === 'favorites'
                  ? 'Ajoutez des logos à vos favoris pour les retrouver facilement'
                  : 'Commencez par créer votre premier logo'}
              </p>
              {filter === 'all' && (
                <Button onClick={() => router.push('/hermetic')}>
                  Créer un logo
                </Button>
              )}
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLogos.map((logo) => (
              <Card key={logo.id} hover>
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  {/* Logo Preview */}
                  <div className={`bg-gradient-to-br ${logo.colors.join(' ')} w-32 h-32 rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-4xl font-bold">
                      {logo.companyName.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(logo.id)}
                    className="absolute top-2 right-2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                  >
                    <svg
                      className={`w-5 h-5 ${
                        logo.isFavorite
                          ? 'text-red-500 fill-current'
                          : 'text-gray-400'
                      }`}
                      fill={logo.isFavorite ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {logo.companyName}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded">
                    {logo.style}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                    {logo.shape}
                  </span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {new Date(logo.timestamp).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => deleteLogo(logo.id)}
                  >
                    Supprimer
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
