'use client';

import { useState } from 'react';
import Card from './Card';

interface MockupPreviewProps {
  logoUrl?: string;
  companyName: string;
  colors: string[];
}

const MOCKUP_TYPES = [
  { id: 'business-card', name: 'Carte de visite', icon: '💳' },
  { id: 'tshirt', name: 'T-shirt', icon: '👕' },
  { id: 'website', name: 'Site web', icon: '🌐' },
  { id: 'mobile', name: 'Application', icon: '📱' },
  { id: 'packaging', name: 'Packaging', icon: '📦' },
];

export default function MockupPreview({ logoUrl, companyName, colors }: MockupPreviewProps) {
  const [selectedMockup, setSelectedMockup] = useState('business-card');

  const renderMockup = () => {
    const [color1, color2] = colors;

    switch (selectedMockup) {
      case 'business-card':
        return (
          <div className="w-full max-w-md mx-auto">
            <div className="aspect-[1.75/1] bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color1} ${color2} opacity-10 rounded-bl-full`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${color1} ${color2} rounded-lg flex items-center justify-center text-white font-bold text-2xl mb-4`}>
                  {companyName.charAt(0).toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{companyName}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">contact@{companyName.toLowerCase()}.com</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
        );

      case 'tshirt':
        return (
          <div className="w-full max-w-md mx-auto">
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl p-12 relative">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path d="M100,10 L160,40 L160,160 L100,190 L40,160 L40,40 Z" fill="white" opacity="0.05"/>
                </svg>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className={`w-32 h-32 bg-gradient-to-br ${color1} ${color2} rounded-2xl flex items-center justify-center text-white font-bold text-5xl shadow-xl`}>
                  {companyName.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        );

      case 'website':
        return (
          <div className="w-full max-w-2xl mx-auto">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="h-8 bg-gray-200 dark:bg-gray-700 flex items-center px-3 gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              {/* Website content */}
              <div className="p-8 bg-white dark:bg-gray-900">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${color1} ${color2} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
                    {companyName.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{companyName}</span>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mobile':
        return (
          <div className="w-full max-w-xs mx-auto">
            <div className="aspect-[9/19] bg-gray-900 rounded-3xl shadow-2xl p-3 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <div className={`h-16 bg-gradient-to-r ${color1} ${color2} flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-900 font-bold">
                    {companyName.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'packaging':
        return (
          <div className="w-full max-w-md mx-auto">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-2xl p-8 relative perspective-1000">
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg transform rotate-y-12 p-8">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className={`w-24 h-24 bg-gradient-to-br ${color1} ${color2} rounded-2xl flex items-center justify-center text-white font-bold text-4xl mb-4 shadow-xl`}>
                    {companyName.charAt(0).toUpperCase()}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{companyName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Premium Product</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Prévisualisation sur supports
        </h3>

        {/* Mockup Type Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {MOCKUP_TYPES.map((mockup) => (
            <button
              key={mockup.id}
              onClick={() => setSelectedMockup(mockup.id)}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2
                ${selectedMockup === mockup.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }
              `}
            >
              <span>{mockup.icon}</span>
              <span className="hidden sm:inline">{mockup.name}</span>
            </button>
          ))}
        </div>

        {/* Mockup Preview */}
        <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
          {renderMockup()}
        </div>

        {/* Download Options */}
        <div className="mt-6 flex gap-3 justify-center">
          <button className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/30 transition-colors font-medium">
            Télécharger le mockup
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">
            Partager
          </button>
        </div>
      </div>
    </Card>
  );
}
