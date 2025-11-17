'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function HermeticPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    keywords: '',
    style: 'modern',
    colors: '',
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLogos, setGeneratedLogos] = useState<any[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // Simulate logo generation - in production, this would call your AI API
    setTimeout(() => {
      setGeneratedLogos([
        { id: 1, url: '/og-image.png', title: 'Logo Concept 1' },
        { id: 2, url: '/og-image.png', title: 'Logo Concept 2' },
        { id: 3, url: '/og-image.png', title: 'Logo Concept 3' },
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Générateur de Logo{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              IA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Décrivez votre vision et laissez notre IA créer des logos uniques pour vous
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Paramètres de votre logo
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'entreprise *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Exemple: TechStart"
                  required
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Secteur d'activité
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Exemple: Technologie, E-commerce, Consulting..."
                />
              </div>

              <div>
                <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-2">
                  Mots-clés descriptifs
                </label>
                <textarea
                  id="keywords"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Exemple: innovation, moderne, professionnel, dynamique..."
                />
              </div>

              <div>
                <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-2">
                  Style du logo
                </label>
                <select
                  id="style"
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="modern">Moderne</option>
                  <option value="minimalist">Minimaliste</option>
                  <option value="classic">Classique</option>
                  <option value="playful">Ludique</option>
                  <option value="elegant">Élégant</option>
                  <option value="bold">Audacieux</option>
                </select>
              </div>

              <div>
                <label htmlFor="colors" className="block text-sm font-medium text-gray-700 mb-2">
                  Préférences de couleurs
                </label>
                <input
                  type="text"
                  id="colors"
                  name="colors"
                  value={formData.colors}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Exemple: bleu, orange, vert..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isGenerating || !formData.companyName}
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Génération en cours...
                  </span>
                ) : (
                  '✨ Générer des logos'
                )}
              </Button>
            </form>
          </Card>

          {/* Preview/Results Section */}
          <div className="space-y-6">
            {generatedLogos.length === 0 ? (
              <Card className="animate-fade-in">
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Vos logos apparaîtront ici
                  </h3>
                  <p className="text-gray-600">
                    Remplissez le formulaire et cliquez sur "Générer" pour voir vos créations
                  </p>
                </div>
              </Card>
            ) : (
              <div className="space-y-6 animate-scale-in">
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Vos logos générés
                  </h3>
                  <div className="grid gap-4">
                    {generatedLogos.map((logo, index) => (
                      <div
                        key={logo.id}
                        className="group relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all cursor-pointer border-2 border-transparent hover:border-primary-500"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                              {formData.companyName.charAt(0).toUpperCase()}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900 mb-1">{logo.title}</h4>
                            <p className="text-sm text-gray-600">Style: {formData.style}</p>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </button>
                            <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Prochaines étapes</h4>
                      <p className="text-sm text-gray-700">
                        Sélectionnez votre logo préféré et téléchargez-le en haute résolution.
                        Vous pouvez également affiner les paramètres pour générer d'autres variations.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Génération instantanée</h3>
            <p className="text-sm text-gray-600">Des logos uniques en quelques secondes</p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">100% unique</h3>
            <p className="text-sm text-gray-600">Chaque logo est généré spécialement pour vous</p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Téléchargement HD</h3>
            <p className="text-sm text-gray-600">Formats haute résolution pour tous usages</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
