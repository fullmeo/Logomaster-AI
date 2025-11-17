import { useState, useEffect } from 'react';

export interface Logo {
  id: string;
  companyName: string;
  style: string;
  colors: string;
  timestamp: number;
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Logo[]>([]);

  useEffect(() => {
    // Load favorites from localStorage
    const stored = localStorage.getItem('logomaster_favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }
  }, []);

  const saveFavorites = (newFavorites: Logo[]) => {
    setFavorites(newFavorites);
    localStorage.setItem('logomaster_favorites', JSON.stringify(newFavorites));
  };

  const addFavorite = (logo: Logo) => {
    const newFavorites = [...favorites, { ...logo, timestamp: Date.now() }];
    saveFavorites(newFavorites);
  };

  const removeFavorite = (id: string) => {
    const newFavorites = favorites.filter(fav => fav.id !== id);
    saveFavorites(newFavorites);
  };

  const isFavorite = (id: string) => {
    return favorites.some(fav => fav.id === id);
  };

  const toggleFavorite = (logo: Logo) => {
    if (isFavorite(logo.id)) {
      removeFavorite(logo.id);
    } else {
      addFavorite(logo);
    }
  };

  const clearFavorites = () => {
    saveFavorites([]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    clearFavorites,
  };
}
