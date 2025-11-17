'use client';

import { useState } from 'react';

interface EffectSettings {
  shadow: {
    enabled: boolean;
    blur: number;
    opacity: number;
    color: string;
  };
  gradient: {
    enabled: boolean;
    type: 'linear' | 'radial';
    angle: number;
  };
  texture: {
    enabled: boolean;
    type: 'noise' | 'dots' | 'lines';
    opacity: number;
  };
  glow: {
    enabled: boolean;
    intensity: number;
    color: string;
  };
}

interface EffectsPanelProps {
  onEffectsChange?: (effects: EffectSettings) => void;
}

export default function EffectsPanel({ onEffectsChange }: EffectsPanelProps) {
  const [effects, setEffects] = useState<EffectSettings>({
    shadow: { enabled: false, blur: 10, opacity: 50, color: '#000000' },
    gradient: { enabled: true, type: 'linear', angle: 45 },
    texture: { enabled: false, type: 'noise', opacity: 20 },
    glow: { enabled: false, intensity: 50, color: '#3b82f6' },
  });

  const [activeTab, setActiveTab] = useState<'shadow' | 'gradient' | 'texture' | 'glow'>('gradient');

  const updateEffect = (category: keyof EffectSettings, updates: Partial<any>) => {
    const newEffects = {
      ...effects,
      [category]: { ...effects[category], ...updates },
    };
    setEffects(newEffects);
    if (onEffectsChange) {
      onEffectsChange(newEffects);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Effets spéciaux
      </h3>

      {/* Effect Tabs */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
        {[
          { id: 'shadow' as const, label: 'Ombre', icon: '🌓' },
          { id: 'gradient' as const, label: 'Dégradé', icon: '🎨' },
          { id: 'texture' as const, label: 'Texture', icon: '✨' },
          { id: 'glow' as const, label: 'Lueur', icon: '💫' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 font-medium transition-colors relative
              ${activeTab === tab.id
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }
            `}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></div>
            )}
          </button>
        ))}
      </div>

      {/* Shadow Controls */}
      {activeTab === 'shadow' && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Activer l'ombre
            </label>
            <button
              onClick={() => updateEffect('shadow', { enabled: !effects.shadow.enabled })}
              className={`
                relative w-12 h-6 rounded-full transition-colors
                ${effects.shadow.enabled ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'}
              `}
            >
              <div
                className={`
                  absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform
                  ${effects.shadow.enabled ? 'translate-x-6' : 'translate-x-0.5'}
                `}
              ></div>
            </button>
          </div>

          {effects.shadow.enabled && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Flou: {effects.shadow.blur}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={effects.shadow.blur}
                  onChange={(e) => updateEffect('shadow', { blur: parseInt(e.target.value) })}
                  className="w-full accent-primary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Opacité: {effects.shadow.opacity}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={effects.shadow.opacity}
                  onChange={(e) => updateEffect('shadow', { opacity: parseInt(e.target.value) })}
                  className="w-full accent-primary-600"
                />
              </div>
            </>
          )}
        </div>
      )}

      {/* Gradient Controls */}
      {activeTab === 'gradient' && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Activer le dégradé
            </label>
            <button
              onClick={() => updateEffect('gradient', { enabled: !effects.gradient.enabled })}
              className={`
                relative w-12 h-6 rounded-full transition-colors
                ${effects.gradient.enabled ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'}
              `}
            >
              <div
                className={`
                  absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform
                  ${effects.gradient.enabled ? 'translate-x-6' : 'translate-x-0.5'}
                `}
              ></div>
            </button>
          </div>

          {effects.gradient.enabled && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type de dégradé
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => updateEffect('gradient', { type: 'linear' })}
                    className={`
                      p-3 rounded-lg border-2 transition-colors
                      ${effects.gradient.type === 'linear'
                        ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                      }
                    `}
                  >
                    <div className="w-full h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded"></div>
                    <p className="text-sm mt-2 text-gray-900 dark:text-white">Linéaire</p>
                  </button>
                  <button
                    onClick={() => updateEffect('gradient', { type: 'radial' })}
                    className={`
                      p-3 rounded-lg border-2 transition-colors
                      ${effects.gradient.type === 'radial'
                        ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                      }
                    `}
                  >
                    <div className="w-full h-8 bg-gradient-radial from-primary-500 to-accent-500 rounded"></div>
                    <p className="text-sm mt-2 text-gray-900 dark:text-white">Radial</p>
                  </button>
                </div>
              </div>

              {effects.gradient.type === 'linear' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Angle: {effects.gradient.angle}°
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={effects.gradient.angle}
                    onChange={(e) => updateEffect('gradient', { angle: parseInt(e.target.value) })}
                    className="w-full accent-primary-600"
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Texture Controls */}
      {activeTab === 'texture' && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Activer la texture
            </label>
            <button
              onClick={() => updateEffect('texture', { enabled: !effects.texture.enabled })}
              className={`
                relative w-12 h-6 rounded-full transition-colors
                ${effects.texture.enabled ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'}
              `}
            >
              <div
                className={`
                  absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform
                  ${effects.texture.enabled ? 'translate-x-6' : 'translate-x-0.5'}
                `}
              ></div>
            </button>
          </div>

          {effects.texture.enabled && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type de texture
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['noise', 'dots', 'lines'].map((type) => (
                    <button
                      key={type}
                      onClick={() => updateEffect('texture', { type })}
                      className={`
                        p-3 rounded-lg border-2 transition-colors capitalize
                        ${effects.texture.type === type
                          ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-200 dark:border-gray-700'
                        }
                      `}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Opacité: {effects.texture.opacity}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={effects.texture.opacity}
                  onChange={(e) => updateEffect('texture', { opacity: parseInt(e.target.value) })}
                  className="w-full accent-primary-600"
                />
              </div>
            </>
          )}
        </div>
      )}

      {/* Glow Controls */}
      {activeTab === 'glow' && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Activer la lueur
            </label>
            <button
              onClick={() => updateEffect('glow', { enabled: !effects.glow.enabled })}
              className={`
                relative w-12 h-6 rounded-full transition-colors
                ${effects.glow.enabled ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'}
              `}
            >
              <div
                className={`
                  absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform
                  ${effects.glow.enabled ? 'translate-x-6' : 'translate-x-0.5'}
                `}
              ></div>
            </button>
          </div>

          {effects.glow.enabled && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Intensité: {effects.glow.intensity}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={effects.glow.intensity}
                onChange={(e) => updateEffect('glow', { intensity: parseInt(e.target.value) })}
                className="w-full accent-primary-600"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
