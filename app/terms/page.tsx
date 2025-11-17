import Card from '@/components/Card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conditions{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              d'Utilisation
            </span>
          </h1>
          <p className="text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-6">
          <Card className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptation des conditions</h2>
            <p className="text-gray-700 leading-relaxed">
              En accédant et en utilisant LogoMaster AI, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description du service</h2>
            <p className="text-gray-700 leading-relaxed">
              LogoMaster AI est une plateforme de génération de logos utilisant l'intelligence artificielle. Nous fournissons des outils permettant aux utilisateurs de créer des logos personnalisés pour leurs entreprises ou projets.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compte utilisateur</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                Pour utiliser certaines fonctionnalités, vous devez créer un compte. Vous êtes responsable de :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintenir la confidentialité de vos identifiants</li>
                <li>Toutes les activités effectuées sous votre compte</li>
                <li>Notifier immédiatement toute utilisation non autorisée</li>
                <li>Fournir des informations exactes et à jour</li>
              </ul>
            </div>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
            <div className="space-y-3 text-gray-700">
              <h3 className="font-semibold text-gray-900">4.1 Logos générés</h3>
              <p className="leading-relaxed mb-3">
                Les logos que vous générez vous appartiennent selon les termes de votre plan :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Plan Gratuit :</strong> Usage personnel uniquement</li>
                <li><strong>Plan Pro :</strong> Licence commerciale standard</li>
                <li><strong>Plan Business :</strong> Licence commerciale étendue</li>
              </ul>
              <h3 className="font-semibold text-gray-900">4.2 Plateforme</h3>
              <p className="leading-relaxed">
                La plateforme LogoMaster AI, son code, design et contenu restent la propriété exclusive de LogoMaster AI.
              </p>
            </div>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Utilisation acceptable</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Vous vous engagez à ne pas :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Utiliser le service à des fins illégales ou non autorisées</li>
              <li>Tenter d'accéder aux systèmes de manière non autorisée</li>
              <li>Partager votre compte avec d'autres personnes</li>
              <li>Générer du contenu offensant, diffamatoire ou illégal</li>
              <li>Automatiser l'utilisation du service sans autorisation</li>
              <li>Revendre ou redistribuer nos services</li>
            </ul>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Paiements et abonnements</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                Les abonnements sont facturés de manière récurrente jusqu'à annulation. Vous pouvez annuler à tout moment, mais aucun remboursement partiel n'est offert pour la période en cours, sauf dans le cadre de notre garantie de 14 jours.
              </p>
            </div>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation de responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
              LogoMaster AI est fourni "tel quel". Nous ne garantissons pas que le service sera ininterrompu ou sans erreur. Nous ne sommes pas responsables des dommages indirects, accessoires ou consécutifs résultant de votre utilisation du service.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Résiliation</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de suspendre ou de résilier votre compte en cas de violation de ces conditions. Vous pouvez également fermer votre compte à tout moment depuis vos paramètres.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous pouvons modifier ces conditions à tout moment. Les modifications importantes seront notifiées par email. Votre utilisation continue du service après ces modifications constitue votre acceptation des nouvelles conditions.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Droit applicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Ces conditions sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux de Paris, France.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question concernant ces conditions :
            </p>
            <div className="mt-4 p-4 bg-primary-50 rounded-lg">
              <p className="font-semibold text-gray-900">Email : legal@logomaster-ai.com</p>
              <p className="text-gray-700">Adresse : 123 rue de l'Innovation, 75001 Paris, France</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
