import { useState } from 'react';

const useDictionary = () => {
  const [dictionary, setDictionary] = useState<{ word: string, definition: string }[]>(() => {
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

  return { dictionary, addWordToDictionary };
};

export default useDictionary;
