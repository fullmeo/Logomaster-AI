'use client';

import { useState } from 'react';
import Card from './Card';
import Button from './Button';

interface LogoVariation {
  id: number;
  name: string;
  colorScheme: string[];
  shape: string;
  style: string;
}

interface VariationsGeneratorProps {
  companyName: string;
  baseColors: string[];
  onSelectVariation?: (variation: LogoVariation) => void;
}

export default function VariationsGenerator({ companyName, baseColors, onSelectVariation }: VariationsGeneratorProps) {
  const [variations, setVariations] = useState<LogoVariation[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateVariations = () => {
    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      const colorVariations = [
        ['from-blue-500', 'to-cyan-500'],
        ['from-purple-500', 'to-pink-500'],
        ['from-orange-500', 'to-red-500'],
        ['from-green-500', 'to-emerald-500'],
        ['from-indigo-500', 'to-blue-500'],
        ['from-red-500', 'to-orange-500'],
      ];

      const shapes = ['rounded-xl', 'rounded-full', 'rounded-lg', 'rounded-2xl'];
      const styles = ['Modern', 'Minimalist', 'Bold', 'Elegant', 'Classic', 'Playful'];

      const generated = colorVariations.map((colors, index) => ({
        id: index + 1,
        name: `Variation ${index + 1}`,
        colorScheme: colors,
        shape: shapes[index % shapes.length],
        style: styles[index % styles.length],
      }));

      setVariations(generated);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <Card>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Générateur de variations
          </h3>
          <Button
            onClick={generateVariations}
            disabled={isGenerating}
            size="sm"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Génération...
              </span>
            ) : (
              '✨ Générer des variations'
            )}
          </Button>
        </div>

        {variations.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cliquez sur "Générer des variations" pour créer différentes versions de votre logo
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              L'IA créera 6 variations avec différentes couleurs et styles
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {variations.map((variation, index) => (
              <div
                key={variation.id}
                className="group relative bg-gray-50 dark:bg-gray-900 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onSelectVariation && onSelectVariation(variation)}
              >
                {/* Logo Preview */}
                <div className="aspect-square mb-3 flex items-center justify-center">
                  <div
                    className={`
                      w-20 h-20 bg-gradient-to-br ${variation.colorScheme[0]} ${variation.colorScheme[1]}
                      ${variation.shape} flex items-center justify-center
                      text-white font-bold text-2xl shadow-lg
                      group-hover:scale-110 transition-transform
                    `}
                  >
                    {companyName.charAt(0).toUpperCase()}
                  </div>
                </div>

                {/* Variation Info */}
                <div className="text-center">
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    {variation.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {variation.style}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-600/10 dark:bg-primary-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" variant="primary">
                    Utiliser
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {variations.length > 0 && (
          <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">
              Tout sauvegarder
            </button>
            <button className="flex-1 px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/30 transition-colors font-medium">
              Comparer
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}
