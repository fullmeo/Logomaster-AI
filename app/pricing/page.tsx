import Card from '@/components/Card';
import Button from '@/components/Button';

const PLANS = [
  {
    name: 'Gratuit',
    price: '0',
    period: 'Toujours gratuit',
    description: 'Parfait pour essayer',
    features: [
      '3 générations de logos par mois',
      'Résolution standard (512x512)',
      'Formats PNG et JPG',
      'Galerie publique',
      'Support communautaire',
    ],
    cta: 'Commencer gratuitement',
    variant: 'outline' as const,
    popular: false,
  },
  {
    name: 'Pro',
    price: '19',
    period: 'par mois',
    description: 'Pour les professionnels',
    features: [
      '50 générations par mois',
      'Haute résolution (2048x2048)',
      'Tous les formats (PNG, JPG, SVG, PDF)',
      'Variations de couleurs illimitées',
      'Édition avancée',
      'Galerie privée',
      'Support prioritaire par email',
      'Licence commerciale',
    ],
    cta: 'Essayer Pro',
    variant: 'primary' as const,
    popular: true,
  },
  {
    name: 'Business',
    price: '49',
    period: 'par mois',
    description: 'Pour les équipes et agences',
    features: [
      'Générations illimitées',
      'Ultra haute résolution (4096x4096)',
      'Tous les formats + fichiers sources',
      'Édition complète du logo',
      'API access',
      '5 utilisateurs inclus',
      'Brand kit personnalisé',
      'Support prioritaire 24/7',
      'Licence commerciale étendue',
      'Gestionnaire de compte dédié',
    ],
    cta: 'Contacter les ventes',
    variant: 'secondary' as const,
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tarifs{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              simples
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins. Changez ou annulez à tout moment.
          </p>
        </div>

        {/* Toggle (Annual/Monthly) - Optional */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200">
            <button className="px-6 py-2 rounded-md bg-primary-600 text-white font-medium transition-all">
              Mensuel
            </button>
            <button className="px-6 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition-all">
              Annuel
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PLANS.map((plan, index) => (
            <Card
              key={plan.name}
              className={`
                relative animate-scale-in
                ${plan.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}€</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} size="lg" className="w-full">
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            <Card>
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je changer de plan à tout moment ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les changements prennent effet immédiatement.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 mb-2">
                Quels modes de paiement acceptez-vous ?
              </h3>
              <p className="text-gray-600">
                Nous acceptons toutes les cartes de crédit majeures (Visa, Mastercard, American Express) ainsi que PayPal.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 mb-2">
                Y a-t-il une garantie de remboursement ?
              </h3>
              <p className="text-gray-600">
                Oui, nous offrons une garantie de remboursement de 14 jours sur tous nos plans payants, sans poser de questions.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900 mb-2">
                Les logos générés sont-ils protégés par des droits d'auteur ?
              </h3>
              <p className="text-gray-600">
                Avec nos plans Pro et Business, vous obtenez une licence commerciale complète pour utiliser vos logos comme vous le souhaitez.
              </p>
            </Card>
          </div>
        </div>

        {/* Enterprise CTA */}
        <Card className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Besoin d'une solution sur mesure ?</h3>
              <p className="text-gray-300">
                Contactez-nous pour un plan entreprise personnalisé avec des fonctionnalités avancées.
              </p>
            </div>
            <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Contactez-nous
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
