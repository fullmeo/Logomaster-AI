import Card from '@/components/Card';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Politique de{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Confidentialité
            </span>
          </h1>
          <p className="text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-6">
          <Card className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              LogoMaster AI s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre service de génération de logos par intelligence artificielle.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informations que nous collectons</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2.1 Informations que vous nous fournissez</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nom et adresse e-mail lors de l'inscription</li>
                  <li>Informations de paiement (traitées de manière sécurisée par nos partenaires)</li>
                  <li>Données de génération de logos (nom d'entreprise, secteur, préférences)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2.2 Informations collectées automatiquement</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Adresse IP et informations de localisation</li>
                  <li>Type de navigateur et appareil</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Cookies et technologies similaires</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Utilisation de vos informations</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Nous utilisons vos informations pour :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Fournir et améliorer nos services de génération de logos</li>
              <li>Gérer votre compte et vos abonnements</li>
              <li>Traiter vos paiements de manière sécurisée</li>
              <li>Vous envoyer des communications importantes sur le service</li>
              <li>Analyser l'utilisation pour améliorer notre plateforme</li>
              <li>Prévenir les fraudes et assurer la sécurité</li>
            </ul>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Partage de vos informations</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Avec des prestataires de services tiers (hébergement, paiement, analytics)</li>
              <li>Si requis par la loi ou pour protéger nos droits légaux</li>
              <li>En cas de fusion, acquisition ou vente d'actifs</li>
              <li>Avec votre consentement explicite</li>
            </ul>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sécurité des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Cela inclut le chiffrement SSL, des serveurs sécurisés et des contrôles d'accès stricts.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vos droits</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous à :
            </p>
            <div className="mt-4 p-4 bg-primary-50 rounded-lg">
              <p className="font-semibold text-gray-900">Email : privacy@logomaster-ai.com</p>
              <p className="text-gray-700">Adresse : 123 rue de l'Innovation, 75001 Paris, France</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
