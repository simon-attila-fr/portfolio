import { useContext } from "react";
import UserLanguageContext from "../../Contexts/LanguageContext";
import pageOptions from "../../data/options/options.json";
import text from "../../data/text/textContent.json";
import Icon from "../Icon/Icon";

export default function LanguageSelector() {
  const componentName = "LanguageSelector";
  const { userLanguage, setUserLanguage } = useContext(UserLanguageContext);
  const placeholder = text.textContent[componentName][userLanguage];
  const defaultLanguage = pageOptions.options.defaultLang;

  function handleLanguageSelection(e) {
    setUserLanguage(e.target.value);
  }

  return (
    <div className="portfolio_language_selector_container">
      <Icon key="language-selector_icon" iconName="translate" fill="var(--dark-color-100)"/>
      <select key="language-selector" defaultValue={defaultLanguage} name="language-selector" onChange={handleLanguageSelection}>
        {pageOptions.options.langOptions
        .toSpliced(0, 0, placeholder)
        .map((o, index) => {
          // TODO: flags with custom dropdown
          if (index === 0) {
            return (
              <option key={`user_language_${index}`} disabled>
                {o}
              </option>
            );
          } else {
            return (
            <>              
              <option key={`user_language_${o}`}>{o}</option>
            </>
          )
          }
        })}
      </select>
    </div>
  );
}
