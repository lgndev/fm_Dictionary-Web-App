export interface DictionaryModel {
  word: string;
  phonetic: string;
  phonetics: [
    {
      text: string;
      audio: string;
      license?: {
        name: string;
        url: string;
      };
    }
  ];
  origin: string;
  meanings: [
    {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          synonyms: string[];
          antonyms: string[];
          example?: string;
        }
      ];
      synonyms: string[];
      antonyms: string[];
    }
  ];
  sourceUrls: string[];
}
