import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DictionaryContextType {
  dictionary: { word: string; definition: string }[];
  addWordToDictionary: (word: string, definition: string) => boolean;
}

const DictionaryContext = createContext<DictionaryContextType>({
  dictionary: [],
  addWordToDictionary: () => false,
});

export const useDictionaryContext = () => useContext(DictionaryContext);

interface DictionaryProviderProps {
  children: ReactNode;
}

export const DictionaryProvider: React.FC<DictionaryProviderProps> = ({ children }) => {
  const [dictionary, setDictionary] = useState<{ word: string; definition: string }[]>(() => {
    const storedDictionary = localStorage.getItem('dictionary');
    return storedDictionary ? JSON.parse(storedDictionary) : [];
  });

  const addWordToDictionary = (word: string, definition: string) => {
    const existingWord = dictionary.find(entry => entry.word === word);
    if (!existingWord) {
      const newDictionary = [...dictionary, { word, definition }];
      setDictionary(newDictionary);
      localStorage.setItem('dictionary', JSON.stringify(newDictionary));
      return true;
    } else {
      return false;
    }
  };

  return (
    <DictionaryContext.Provider value={{ dictionary, addWordToDictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
};
