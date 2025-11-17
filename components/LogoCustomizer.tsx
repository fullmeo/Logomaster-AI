'use client';

import { useState } from 'react';
import Card from './Card';
import Button from './Button';

interface LogoCustomizerProps {
  companyName: string;
  onDownload?: (format: string) => void;
}

const COLOR_PALETTES = [
  { name: 'Ocean', colors: ['from-blue-500', 'to-cyan-500'] },
  { name: 'Sunset', colors: ['from-orange-500', 'to-pink-500'] },
  { name: 'Forest', colors: ['from-green-500', 'to-emerald-500'] },
  { name: 'Purple', colors: ['from-purple-500', 'to-pink-500'] },
  { name: 'Fire', colors: ['from-red-500', 'to-orange-500'] },
  { name: 'Royal', colors: ['from-indigo-500', 'to-purple-500'] },
];

const SHAPES = ['square', 'circle', 'hexagon', 'rounded'];
const SIZES = ['sm', 'md', 'lg', 'xl'];

export default function LogoCustomizer({ companyName, onDownload }: LogoCustomizerProps) {
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [selectedShape, setSelectedShape] = useState('square');
  const [selectedSize, setSelectedSize] = useState('lg');
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const palette = COLOR_PALETTES[selectedPalette];

  const getShapeClass = (shape: string) => {
    switch (shape) {
      case 'circle':
        return 'rounded-full';
      case 'hexagon':
        return 'clip-hexagon';
      case 'rounded':
        return 'rounded-2xl';
      default:
        return 'rounded-lg';
    }
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'sm':
        return 'w-24 h-24 text-3xl';
      case 'md':
        return 'w-32 h-32 text-4xl';
      case 'lg':
        return 'w-40 h-40 text-5xl';
      case 'xl':
        return 'w-48 h-48 text-6xl';
      default:
        return 'w-40 h-40 text-5xl';
    }
  };

  const handleDownload = (format: string) => {
    if (onDownload) {
      onDownload(format);
    }
    setShowDownloadModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Live Preview */}
      <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Aperçu en temps réel</h3>
        <div className="flex items-center justify-center p-12 bg-white dark:bg-gray-800 rounded-xl">
          <div
            className={`
              bg-gradient-to-br ${palette.colors[0]} ${palette.colors[1]}
              ${getShapeClass(selectedShape)} ${getSizeClass(selectedSize)}
              flex items-center justify-center text-white font-bold
              shadow-2xl transform hover:scale-105 transition-all duration-300
              animate-scale-in
            `}
          >
            {companyName.charAt(0).toUpperCase()}
          </div>
        </div>
      </Card>

      {/* Color Palette Selector */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Palette de couleurs</h3>
        <div className="grid grid-cols-3 gap-3">
          {COLOR_PALETTES.map((palette, index) => (
            <button
              key={palette.name}
              onClick={() => setSelectedPalette(index)}
              className={`
                p-4 rounded-lg border-2 transition-all
                ${selectedPalette === index
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                }
              `}
            >
              <div className={`w-full h-8 rounded bg-gradient-to-r ${palette.colors[0]} ${palette.colors[1]} mb-2`}></div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{palette.name}</p>
            </button>
          ))}
        </div>
      </Card>

      {/* Shape Selector */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Forme</h3>
        <div className="grid grid-cols-4 gap-3">
          {SHAPES.map((shape) => (
            <button
              key={shape}
              onClick={() => setSelectedShape(shape)}
              className={`
                p-4 rounded-lg border-2 transition-all
                ${selectedShape === shape
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                }
              `}
            >
              <div className={`w-12 h-12 mx-auto bg-gradient-to-br from-gray-400 to-gray-500 ${getShapeClass(shape)}`}></div>
              <p className="text-xs font-medium text-gray-900 dark:text-white mt-2 capitalize">{shape}</p>
            </button>
          ))}
        </div>
      </Card>

      {/* Size Selector */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Taille</h3>
        <div className="flex gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
                flex-1 py-2 px-4 rounded-lg border-2 font-medium transition-all
                ${selectedSize === size
                  ? 'border-primary-500 bg-primary-600 text-white'
                  : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300'
                }
              `}
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
      </Card>

      {/* Download Button */}
      <Button
        onClick={() => setShowDownloadModal(true)}
        size="lg"
        className="w-full"
      >
        <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Télécharger le logo
      </Button>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <Card className="max-w-md w-full animate-scale-in">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Choisir le format</h3>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              {[
                { format: 'PNG', desc: 'Fond transparent, haute qualité', size: '2048x2048', pro: false },
                { format: 'JPG', desc: 'Fond blanc, taille optimisée', size: '2048x2048', pro: false },
                { format: 'SVG', desc: 'Vectoriel, redimensionnable', size: 'Vectoriel', pro: true },
                { format: 'PDF', desc: 'Pour impression professionnelle', size: 'A4', pro: true },
              ].map((item) => (
                <button
                  key={item.format}
                  onClick={() => handleDownload(item.format)}
                  disabled={item.pro}
                  className={`
                    w-full p-4 rounded-lg border-2 text-left transition-all
                    ${item.pro
                      ? 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 opacity-60 cursor-not-allowed'
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                    }
                  `}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {item.format}
                        {item.pro && (
                          <span className="ml-2 text-xs bg-gradient-to-r from-primary-600 to-accent-600 text-white px-2 py-0.5 rounded-full">
                            PRO
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{item.size}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                💡 <strong>Astuce :</strong> Passez au plan Pro pour débloquer tous les formats et résolutions HD.
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
