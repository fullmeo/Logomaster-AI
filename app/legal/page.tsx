import Card from '@/components/Card';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mentions{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Légales
            </span>
          </h1>
          <p className="text-gray-600">Informations légales et réglementaires</p>
        </div>

        <div className="space-y-6">
          <Card className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Raison sociale :</strong> LogoMaster AI SAS</p>
              <p><strong>Siège social :</strong> 123 rue de l'Innovation, 75001 Paris, France</p>
              <p><strong>Capital social :</strong> 50 000 €</p>
              <p><strong>RCS :</strong> Paris B 123 456 789</p>
              <p><strong>SIRET :</strong> 123 456 789 00012</p>
              <p><strong>TVA intracommunautaire :</strong> FR12 123456789</p>
              <p><strong>Directeur de la publication :</strong> Jean Dupont</p>
              <p><strong>Email :</strong> contact@logomaster-ai.com</p>
              <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
            </div>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-primary-600 hover:underline">vercel.com</a></p>
            </div>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de LogoMaster AI ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de LogoMaster AI.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protection des données personnelles</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@logomaster-ai.com" className="text-primary-600 hover:underline">privacy@logomaster-ai.com</a>
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Délégué à la Protection des Données (DPO) :</strong> Marie Martin<br />
              Email : dpo@logomaster-ai.com
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur, analyser le trafic et personnaliser le contenu. Vous pouvez configurer vos préférences de cookies à tout moment via les paramètres de votre navigateur ou notre bandeau de gestion des cookies.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation de responsabilité</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                LogoMaster AI s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, LogoMaster AI ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="leading-relaxed">
                LogoMaster AI ne saurait être tenu responsable :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Des interruptions ou dysfonctionnements du site</li>
                <li>Des virus ou autres composants nuisibles</li>
                <li>Des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser le service</li>
                <li>Des informations contenues sur des sites tiers accessibles via des liens</li>
              </ul>
            </div>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liens hypertextes</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site peut contenir des liens vers d'autres sites. LogoMaster AI n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Droit applicable et juridiction</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Paris, France.
            </p>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Crédits</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Conception et développement :</strong> LogoMaster AI</p>
              <p><strong>Technologies utilisées :</strong> Next.js, React, TypeScript, Tailwind CSS</p>
              <p><strong>Icônes :</strong> Heroicons</p>
              <p><strong>Polices :</strong> Inter (Google Fonts)</p>
            </div>
          </Card>

          <Card className="animate-fade-in bg-primary-50 border-primary-200" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour toute question concernant ces mentions légales ou notre site :
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email :</strong> <a href="mailto:legal@logomaster-ai.com" className="text-primary-600 hover:underline">legal@logomaster-ai.com</a></p>
              <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              <p><strong>Adresse :</strong> 123 rue de l'Innovation, 75001 Paris, France</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
