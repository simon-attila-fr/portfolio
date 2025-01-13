import { useState } from "react";
import { createContext } from "react";
import pageOptions from '../data/options/options.json';

const UserLanguageContext = createContext(null);

export const UserLanguageProvider = ({ children }) => {
    const [userLanguage, setUserLanguage] = useState(pageOptions.options.defaultLang);

    return(
        <UserLanguageContext.Provider value={{ userLanguage, setUserLanguage }}>
            {children}
        </UserLanguageContext.Provider>
    )
}

export default UserLanguageContext;
