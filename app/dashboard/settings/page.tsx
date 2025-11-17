'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function SettingsPage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || '');
      setEmail(session.user.email || '');
    }
  }, [session]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // In a real app, this would make an API call to update user profile
      // For now, we'll just update the session
      await update({
        name,
      });

      setMessage({ type: 'success', text: 'Profil mis à jour avec succès' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Une erreur est survenue' });
    } finally {
      setLoading(false);
    }
  };

  const handleClearData = () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer toutes vos données locales ? Cette action est irréversible.')) {
      return;
    }

    localStorage.removeItem('logomaster_history');
    localStorage.removeItem('logomaster_favorites');
    localStorage.removeItem('logo_ratings');
    setMessage({ type: 'success', text: 'Données locales supprimées' });
  };

  const handleExportData = () => {
    const history = localStorage.getItem('logomaster_history') || '[]';
    const favorites = localStorage.getItem('logomaster_favorites') || '[]';
    const ratings = localStorage.getItem('logo_ratings') || '{}';

    const data = {
      user: session?.user,
      history: JSON.parse(history),
      favorites: JSON.parse(favorites),
      ratings: JSON.parse(ratings),
      exportDate: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `logomaster-data-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);

    setMessage({ type: 'success', text: 'Données exportées' });
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const tier = (session?.user as any)?.tier || 'free';
  const tierNames = {
    free: 'Gratuit',
    pro: 'Pro',
    business: 'Business',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Paramètres
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gérez votre compte et vos préférences
          </p>
        </div>

        {/* Success/Error Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
          }`}>
            {message.text}
          </div>
        )}

        {/* Profile Settings */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Informations du profil
          </h2>
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                L'email ne peut pas être modifié
              </p>
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? 'Enregistrement...' : 'Enregistrer les modifications'}
            </Button>
          </form>
        </Card>

        {/* Subscription Info */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Abonnement
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Forfait actuel
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {tierNames[tier as keyof typeof tierNames]}
              </p>
            </div>
            {tier === 'free' && (
              <Button onClick={() => router.push('/pricing')}>
                Passer à Pro
              </Button>
            )}
          </div>
        </Card>

        {/* Data Management */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Gestion des données
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Exporter mes données
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Téléchargez toutes vos données au format JSON
                </p>
              </div>
              <Button variant="outline" onClick={handleExportData}>
                Exporter
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Supprimer mes données locales
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Supprime l'historique et les favoris stockés localement
                </p>
              </div>
              <Button variant="outline" onClick={handleClearData}>
                Supprimer
              </Button>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200 dark:border-red-800">
          <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
            Zone de danger
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                Supprimer mon compte
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Action irréversible - toutes vos données seront supprimées
              </p>
            </div>
            <Button
              variant="outline"
              className="border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => alert('Cette fonctionnalité sera bientôt disponible')}
            >
              Supprimer le compte
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
