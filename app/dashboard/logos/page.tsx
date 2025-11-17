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
  font?: string;
  effects?: any;
  metadata?: any;
  createdAt: string;
  updatedAt: string;
}

interface Favorite {
  id: string;
  logoId: string;
  userId: string;
  createdAt: string;
}

export default function LogosPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [logos, setLogos] = useState<Logo[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [filter, setFilter] = useState<'all' | 'favorites'>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchLogos();
      fetchFavorites();
    }
  }, [status]);

  const fetchLogos = async () => {
    try {
      const res = await fetch('/api/logos');
      if (!res.ok) throw new Error('Failed to fetch logos');
      const data = await res.json();
      setLogos(data.logos || []);
    } catch (err) {
      console.error('Error fetching logos:', err);
      setError('Erreur lors du chargement des logos');
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async () => {
    try {
      const res = await fetch('/api/favorites');
      if (!res.ok) throw new Error('Failed to fetch favorites');
      const data = await res.json();
      setFavorites(data.favorites || []);
    } catch (err) {
      console.error('Error fetching favorites:', err);
    }
  };

  const toggleFavorite = async (logoId: string) => {
    const isFavorite = favorites.some((f) => f.logoId === logoId);

    try {
      if (isFavorite) {
        // Remove from favorites
        const res = await fetch('/api/favorites', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ logoId }),
        });

        if (!res.ok) throw new Error('Failed to remove favorite');

        setFavorites(favorites.filter((f) => f.logoId !== logoId));
      } else {
        // Add to favorites
        const res = await fetch('/api/favorites', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ logoId }),
        });

        if (!res.ok) throw new Error('Failed to add favorite');

        const data = await res.json();
        setFavorites([...favorites, data.favorite]);
      }
    } catch (err) {
      console.error('Error toggling favorite:', err);
      setError('Erreur lors de la modification des favoris');
    }
  };

  const deleteLogo = async (logoId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce logo ?')) return;

    try {
      const res = await fetch(`/api/logos/${logoId}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete logo');

      setLogos(logos.filter((l) => l.id !== logoId));
      setFavorites(favorites.filter((f) => f.logoId !== logoId));
    } catch (err) {
      console.error('Error deleting logo:', err);
      setError('Erreur lors de la suppression du logo');
    }
  };

  const favoriteIds = new Set(favorites.map((f) => f.logoId));
  const filteredLogos =
    filter === 'favorites'
      ? logos.filter((l) => favoriteIds.has(l.id))
      : logos;

  if (status === 'loading' || loading) {
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

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

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
            Favoris ({favorites.length})
          </button>
        </div>

        {/* Logos Grid */}
        {filteredLogos.length === 0 ? (
          <Card>
            <div className="text-center py-12">
              <div className="text-6xl mb-4">
                {filter === 'favorites' ? '⭐' : '🖼️'}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {filter === 'favorites' ? 'Aucun favori' : 'Aucun logo créé'}
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
            {filteredLogos.map((logo) => {
              const isFavorite = favoriteIds.has(logo.id);
              const colorClasses = Array.isArray(logo.colors)
                ? logo.colors.join(' ')
                : 'from-blue-500 to-cyan-500';

              return (
                <Card key={logo.id} hover>
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    {/* Logo Preview */}
                    <div
                      className={`bg-gradient-to-br ${colorClasses} w-32 h-32 rounded-lg flex items-center justify-center shadow-lg`}
                    >
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
                          isFavorite
                            ? 'text-red-500 fill-current'
                            : 'text-gray-400'
                        }`}
                        fill={isFavorite ? 'currentColor' : 'none'}
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
                    {logo.font && (
                      <span className="px-2 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-xs rounded">
                        {logo.font}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {new Date(logo.createdAt).toLocaleDateString('fr-FR', {
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
