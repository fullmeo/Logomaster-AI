'use client';

import { useState } from 'react';

const FONT_FAMILIES = [
  { name: 'Inter', class: 'font-sans', preview: 'Modern & Clean' },
  { name: 'Roboto', class: 'font-roboto', preview: 'Professional' },
  { name: 'Poppins', class: 'font-poppins', preview: 'Geometric & Bold' },
  { name: 'Montserrat', class: 'font-montserrat', preview: 'Urban & Sleek' },
  { name: 'Playfair Display', class: 'font-playfair', preview: 'Elegant & Classic' },
  { name: 'Lato', class: 'font-lato', preview: 'Versatile' },
  { name: 'Raleway', class: 'font-raleway', preview: 'Thin & Sophisticated' },
  { name: 'Oswald', class: 'font-oswald', preview: 'Strong & Condensed' },
];

interface FontPickerProps {
  selectedFont?: string;
  onFontChange?: (font: string) => void;
}

export default function FontPicker({ selectedFont = 'Inter', onFontChange }: FontPickerProps) {
  const [font, setFont] = useState(selectedFont);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectFont = (fontName: string) => {
    setFont(fontName);
    setIsOpen(false);
    if (onFontChange) {
      onFontChange(fontName);
    }
  };

  const currentFont = FONT_FAMILIES.find(f => f.name === font) || FONT_FAMILIES[0];

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Police de caractères
      </label>

      {/* Selected Font Display */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-between hover:border-primary-500 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className={`text-2xl ${currentFont.class}`}>Aa</span>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">{currentFont.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{currentFont.preview}</p>
          </div>
        </div>
        <svg className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Font Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl max-h-80 overflow-y-auto animate-scale-in">
          {FONT_FAMILIES.map((fontFamily) => (
            <button
              key={fontFamily.name}
              onClick={() => handleSelectFont(fontFamily.name)}
              className={`
                w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
                ${font === fontFamily.name ? 'bg-primary-50 dark:bg-primary-900/20' : ''}
              `}
            >
              <span className={`text-3xl ${fontFamily.class}`}>Aa</span>
              <div className="text-left flex-1">
                <p className={`font-medium text-gray-900 dark:text-white ${fontFamily.class}`}>{fontFamily.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{fontFamily.preview}</p>
              </div>
              {font === fontFamily.name && (
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Font Preview */}
      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <p className={`text-4xl ${currentFont.class} text-gray-900 dark:text-white text-center`}>
          LogoMaster AI
        </p>
      </div>
    </div>
  );
}
