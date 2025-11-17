import { useState, useEffect } from 'react';

export interface LogoHistoryItem {
  id: string;
  companyName: string;
  style: string;
  colors: string;
  shape: string;
  size: string;
  timestamp: number;
  imageData?: string;
}

const MAX_HISTORY_ITEMS = 50;

export function useLogoHistory() {
  const [history, setHistory] = useState<LogoHistoryItem[]>([]);

  useEffect(() => {
    // Load history from localStorage
    const stored = localStorage.getItem('logomaster_history');
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (error) {
        console.error('Error loading history:', error);
      }
    }
  }, []);

  const saveHistory = (newHistory: LogoHistoryItem[]) => {
    setHistory(newHistory);
    localStorage.setItem('logomaster_history', JSON.stringify(newHistory));
  };

  const addToHistory = (item: Omit<LogoHistoryItem, 'timestamp'>) => {
    const newItem: LogoHistoryItem = {
      ...item,
      timestamp: Date.now(),
    };

    // Add to beginning of array and limit to MAX_HISTORY_ITEMS
    const newHistory = [newItem, ...history].slice(0, MAX_HISTORY_ITEMS);
    saveHistory(newHistory);
  };

  const removeFromHistory = (id: string) => {
    const newHistory = history.filter(item => item.id !== id);
    saveHistory(newHistory);
  };

  const clearHistory = () => {
    saveHistory([]);
  };

  const getHistoryByDate = () => {
    const grouped: { [key: string]: LogoHistoryItem[] } = {};

    history.forEach(item => {
      const date = new Date(item.timestamp).toLocaleDateString('fr-FR');
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });

    return grouped;
  };

  const exportHistory = () => {
    const dataStr = JSON.stringify(history, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `logomaster-history-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importHistory = (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          if (Array.isArray(imported)) {
            saveHistory(imported);
            resolve();
          } else {
            reject(new Error('Invalid history format'));
          }
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Error reading file'));
      reader.readAsText(file);
    });
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
    getHistoryByDate,
    exportHistory,
    importHistory,
  };
}
