export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="animate-scale-in">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 animate-pulse">
                404
              </div>
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary-600/20 to-accent-600/20"></div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page non trouvée
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 font-medium shadow-lg"
            >
              Retour à l'accueil
            </a>
            <a
              href="/hermetic"
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-medium"
            >
              Créer un logo
            </a>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Liens utiles :
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/gallery" className="text-primary-600 dark:text-primary-400 hover:underline">
                Galerie
              </a>
              <a href="/pricing" className="text-primary-600 dark:text-primary-400 hover:underline">
                Tarifs
              </a>
              <a href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
