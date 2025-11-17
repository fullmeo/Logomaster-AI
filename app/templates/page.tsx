'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const LOGO_TEMPLATES = [
  {
    id: 1,
    name: 'Tech Startup',
    category: 'Technology',
    style: 'modern',
    colors: ['from-blue-500', 'to-cyan-500'],
    shape: 'rounded',
    description: 'Idéal pour les startups tech et SaaS',
  },
  {
    id: 2,
    name: 'Eco Nature',
    category: 'Eco-friendly',
    style: 'minimalist',
    colors: ['from-green-500', 'to-emerald-500'],
    shape: 'circle',
    description: 'Pour les entreprises écologiques',
  },
  {
    id: 3,
    name: 'Creative Studio',
    category: 'Creative',
    style: 'elegant',
    colors: ['from-purple-500', 'to-pink-500'],
    shape: 'square',
    description: 'Agences créatives et design',
  },
  {
    id: 4,
    name: 'Food & Beverage',
    category: 'Restaurant',
    style: 'playful',
    colors: ['from-orange-500', 'to-red-500'],
    shape: 'rounded',
    description: 'Restaurants et cafés',
  },
  {
    id: 5,
    name: 'Finance Pro',
    category: 'Finance',
    style: 'classic',
    colors: ['from-indigo-500', 'to-blue-500'],
    shape: 'square',
    description: 'Services financiers et conseils',
  },
  {
    id: 6,
    name: 'Fitness Energy',
    category: 'Health',
    style: 'bold',
    colors: ['from-red-500', 'to-orange-500'],
    shape: 'hexagon',
    description: 'Fitness et santé',
  },
  {
    id: 7,
    name: 'Cloud Enterprise',
    category: 'SaaS',
    style: 'modern',
    colors: ['from-sky-400', 'to-blue-600'],
    shape: 'rounded',
    description: 'Solutions cloud et entreprise',
  },
  {
    id: 8,
    name: 'Luxury Brand',
    category: 'Luxury',
    style: 'elegant',
    colors: ['from-amber-600', 'to-yellow-500'],
    shape: 'circle',
    description: 'Marques de luxe et premium',
  },
  {
    id: 9,
    name: 'Gaming Hub',
    category: 'Gaming',
    style: 'bold',
    colors: ['from-fuchsia-500', 'to-purple-600'],
    shape: 'hexagon',
    description: 'Gaming et esports',
  },
];

const CATEGORIES = ['Tous', 'Technology', 'Eco-friendly', 'Creative', 'Restaurant', 'Finance', 'Health', 'SaaS', 'Luxury', 'Gaming'];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const filteredTemplates = selectedCategory === 'Tous'
    ? LOGO_TEMPLATES
    : LOGO_TEMPLATES.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Templates de{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Logos
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choisissez un template professionnel et personnalisez-le à votre image
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all
                ${selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTemplates.map((template, index) => (
            <Card
              key={template.id}
              hover
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedTemplate(template.id)}
            >
              {/* Logo Preview */}
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${template.colors[0]} ${template.colors[1]} opacity-10`}></div>
                <div
                  className={`
                    w-32 h-32 bg-gradient-to-br ${template.colors[0]} ${template.colors[1]}
                    flex items-center justify-center text-white font-bold text-4xl
                    shadow-xl group-hover:scale-110 transition-transform duration-300
                    ${template.shape === 'circle' ? 'rounded-full' : ''}
                    ${template.shape === 'rounded' ? 'rounded-2xl' : ''}
                    ${template.shape === 'square' ? 'rounded-lg' : ''}
                    ${template.shape === 'hexagon' ? 'rounded-xl' : ''}
                  `}
                >
                  {template.name.charAt(0)}
                </div>
              </div>

              {/* Template Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{template.name}</h3>
                  <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full">
                    {template.style}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>
                <div className="pt-3 flex gap-2">
                  <Button size="sm" className="flex-1">
                    Utiliser ce template
                  </Button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Templates professionnels</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Designs créés par des experts
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">100% personnalisable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ajustez chaque élément à votre goût
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gain de temps</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Créez votre logo en quelques minutes
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
