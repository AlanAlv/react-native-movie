import React, { useState, createContext } from 'react';

export const LanguageContext = createContext([{}, function(){}]);

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('');

    return (
        <LanguageContext.Provider value={[language, setLanguage]}>
            {children}
        </LanguageContext.Provider>
        );
};


