import React, { createContext, useContext, useState } from 'react';
import en from '../data/language/en.json';
import de from '../data/language/de.json';

const translations = {
  en,
  de
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
export const LanguageConsumer = LanguageContext.Consumer;
export const LanguageContextProvider = LanguageContext.Provider;