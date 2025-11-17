import Link from 'next/link';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Créez des logos{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                uniques
              </span>{' '}
              avec l'IA
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Générez des logos professionnels en quelques secondes grâce à notre intelligence artificielle avancée.
              Aucune compétence en design requise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/hermetic">
                <Button size="lg" className="w-full sm:w-auto">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Voir des exemples
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Pas de carte requise</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Logos HD</span>
              </div>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/og-image.png"
                alt="Exemples de logos générés par IA"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir LogoMaster AI ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une solution complète pour tous vos besoins en création de logo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover className="animate-scale-in">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapide et simple</h3>
            <p className="text-gray-600">
              Générez des logos professionnels en quelques secondes. Aucune compétence technique requise.
            </p>
          </Card>

          <Card hover className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">IA avancée</h3>
            <p className="text-gray-600">
              Notre intelligence artificielle crée des designs uniques adaptés à votre marque.
            </p>
          </Card>

          <Card hover className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Haute qualité</h3>
            <p className="text-gray-600">
              Téléchargez vos logos en haute résolution, prêts pour tous vos supports.
            </p>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trois étapes simples pour votre logo parfait
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector lines - hidden on mobile */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-accent-400" style={{ top: '4rem', left: '16.666%', right: '16.666%' }}></div>

          <div className="text-center relative">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Décrivez votre vision</h3>
            <p className="text-gray-600">
              Entrez le nom de votre entreprise et quelques mots-clés pour décrire votre style.
            </p>
          </div>

          <div className="text-center relative">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">L'IA crée votre logo</h3>
            <p className="text-gray-600">
              Notre intelligence artificielle génère plusieurs propositions uniques en quelques secondes.
            </p>
          </div>

          <div className="text-center relative">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Téléchargez et utilisez</h3>
            <p className="text-gray-600">
              Choisissez votre favori et téléchargez-le en haute résolution immédiatement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à créer votre logo parfait ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez des milliers d'entrepreneurs qui ont fait confiance à LogoMaster AI
          </p>
          <Link href="/hermetic">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl"
            >
              Commencer maintenant - C'est gratuit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
