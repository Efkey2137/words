import { useState } from 'react';

const useFlashcardData = () => {
  const [flashcardData, setFlashcardData] = useState<any>(null);


  return flashcardData;
};

export default useFlashcardData;
