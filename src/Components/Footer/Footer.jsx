import { useContext } from "react";
import UserLanguageContext from "../../Contexts/LanguageContext";
import Icon from "../Icon/Icon";
import texts from '../../data/text/textContent.json';
import pageOptions from '../../data/options/options.json';
import './footer.css';

export default function Footer() {
    const { userLanguage } = useContext(UserLanguageContext);
    const componentName = "footer";
    const thisTextContent = texts.textContent[componentName];
    const thisOptions = pageOptions.options;

    return (
        <div className="footer_container">
            <p>{`version ${pageOptions.options.version} | `}</p>
            <p>{`${thisTextContent[userLanguage].copyright} ${new Date(Date.now()).getFullYear()} | `}</p>
            <a target="_blank" href={thisOptions.link_social.linkedin}>
                <Icon iconName={thisTextContent[userLanguage].linkedin.logo} fill="var(--dark-color-100)" title={thisTextContent[userLanguage].linkedin.img_alt_text}/>
            </a>
            <a target="_blank" href={thisOptions.repository}>
                <Icon iconName={thisTextContent[userLanguage].github.logo} fill="var(--dark-color-100)" title={thisTextContent[userLanguage].github.img_alt_text}/>
            </a>
        </div>
    )
}