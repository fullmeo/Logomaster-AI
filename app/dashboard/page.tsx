'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Button from '@/components/Button';

interface DashboardStats {
  totalLogos: number;
  favoriteLogos: number;
  generationsThisMonth: number;
  generationsLimit: number;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalLogos: 0,
    favoriteLogos: 0,
    generationsThisMonth: 3,
    generationsLimit: 10,
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchStats();
    }
  }, [status, session]);

  const fetchStats = async () => {
    try {
      // Fetch logos
      const logosRes = await fetch('/api/logos');
      const logosData = await logosRes.json();
      const logos = logosData.logos || [];

      // Fetch favorites
      const favsRes = await fetch('/api/favorites');
      const favsData = await favsRes.json();
      const favorites = favsData.favorites || [];

      // Calculate generations this month
      const now = new Date();
      const thisMonth = logos.filter((logo: any) => {
        const logoDate = new Date(logo.createdAt);
        return logoDate.getMonth() === now.getMonth() && logoDate.getFullYear() === now.getFullYear();
      });

      // Get generation limit based on tier
      const tier = (session?.user as any)?.tier || 'free';
      const limits = {
        free: 10,
        pro: 100,
        business: 1000,
      };

      setStats({
        totalLogos: logos.length,
        favoriteLogos: favorites.length,
        generationsThisMonth: thisMonth.length,
        generationsLimit: limits[tier as keyof typeof limits] || 10,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const tier = (session?.user as any)?.tier || 'free';
  const tierConfig = {
    free: { name: 'Gratuit', color: 'gray', badge: '🆓' },
    pro: { name: 'Pro', color: 'primary', badge: '⭐' },
    business: { name: 'Business', color: 'accent', badge: '💼' },
  };
  const currentTier = tierConfig[tier as keyof typeof tierConfig] || tierConfig.free;

  const usagePercentage = (stats.generationsThisMonth / stats.generationsLimit) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Tableau de bord
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Bienvenue, {session?.user?.name || 'User'} !
          </p>
        </div>

        {/* Tier Badge */}
        <Card className="mb-8 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Votre forfait
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{currentTier.badge}</span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentTier.name}
                </h2>
              </div>
            </div>
            {tier === 'free' && (
              <Link href="/pricing">
                <Button variant="primary">
                  Passer à Pro
                </Button>
              </Link>
            )}
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card hover>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stats.totalLogos}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Logos créés
              </p>
            </div>
          </Card>

          <Card hover>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stats.favoriteLogos}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Favoris
              </p>
            </div>
          </Card>

          <Card hover>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stats.generationsThisMonth}/{stats.generationsLimit}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Générations ce mois
              </p>
            </div>
          </Card>
        </div>

        {/* Usage Bar */}
        <Card className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Utilisation mensuelle
          </h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
            <div
              className={`h-4 rounded-full transition-all ${
                usagePercentage >= 90
                  ? 'bg-red-500'
                  : usagePercentage >= 70
                  ? 'bg-yellow-500'
                  : 'bg-primary-600'
              }`}
              style={{ width: `${Math.min(usagePercentage, 100)}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {stats.generationsThisMonth} sur {stats.generationsLimit} générations utilisées (
            {usagePercentage.toFixed(0)}%)
          </p>
          {usagePercentage >= 90 && (
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                ⚠️ Vous approchez de votre limite mensuelle.{' '}
                <Link href="/pricing" className="font-semibold underline">
                  Passez à Pro
                </Link>{' '}
                pour des générations illimitées.
              </p>
            </div>
          )}
        </Card>

        {/* Quick Actions */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Actions rapides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/hermetic"
              className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors border border-primary-200 dark:border-primary-800"
            >
              <div className="text-3xl mb-2">✨</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Créer un logo
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Générer un nouveau logo
              </p>
            </Link>

            <Link
              href="/dashboard/logos"
              className="p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-colors border border-accent-200 dark:border-accent-800"
            >
              <div className="text-3xl mb-2">🖼️</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Mes logos
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Voir tous vos logos
              </p>
            </Link>

            <Link
              href="/templates"
              className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-200 dark:border-purple-800"
            >
              <div className="text-3xl mb-2">📐</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Templates
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Parcourir les templates
              </p>
            </Link>

            <Link
              href="/dashboard/settings"
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl mb-2">⚙️</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Paramètres
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gérer votre compte
              </p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
