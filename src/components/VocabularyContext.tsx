import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export interface VocabularyEntry {
  word: string;
  definition: string;
}

export interface VocabularyContextType {
  dictionary: VocabularyEntry[];
  addWordToDictionary: (word: string, definition: string) => boolean;
}

export const VocabularyContext = createContext<VocabularyContextType | undefined>(undefined);

export const VocabularyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dictionary, setDictionary] = useState<VocabularyEntry[]>([]);

  useEffect(() => {
    const savedDictionary = localStorage.getItem('dictionary');
    if (savedDictionary) {
      setDictionary(JSON.parse(savedDictionary));
    }
  }, []);

  const addWordToDictionary = (word: string, definition: string): boolean => {
    if (dictionary.some(entry => entry.word === word)) {
      return false;
    }
    const updatedDictionary = [...dictionary, { word, definition }];
    setDictionary(updatedDictionary);
    localStorage.setItem('dictionary', JSON.stringify(updatedDictionary));
    return true;
  };

  const contextValue: VocabularyContextType = {
    dictionary,
    addWordToDictionary,
  };

  return (
    <VocabularyContext.Provider value={contextValue}>
      {children}
    </VocabularyContext.Provider>
  );
};
