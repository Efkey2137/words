import React, { createContext, useContext, useState } from 'react';

interface DictionaryContextType {
  dictionary: { word: string; definition: string }[];
  addWordToDictionary: (word: string, definition: string) => boolean;
}

const DictionaryContext = createContext<DictionaryContextType>({
  dictionary: [],
  addWordToDictionary: () => false,
});

export const useDictionaryContext = () => useContext(DictionaryContext);

export const DictionaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dictionary, setDictionary] = useState<{ word: string; definition: string }[]>(() => {
    const storedDictionary = localStorage.getItem('dictionary');
    return storedDictionary ? JSON.parse(storedDictionary) : [];
  });

  const addWordToDictionary = (word: string, definition: string) => {
    const newWord = { word, definition };
    const newDictionary = [newWord, ...dictionary.slice(0, 2)];
    setDictionary(newDictionary);
    localStorage.setItem('dictionary', JSON.stringify(newDictionary));
    return true;
  };

  return (
    <DictionaryContext.Provider value={{ dictionary, addWordToDictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
};


