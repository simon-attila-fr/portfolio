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

    console.log(thisTextContent)

    return (
        <div className="footer_container">
            <p>{`version ${pageOptions.options.version} | `}</p>
            <p>{`${thisTextContent[userLanguage].copyright} ${new Date(Date.now()).getFullYear()} | `}</p>
            <a target="_blank" href={pageOptions.options.link_social.linkedin}>
                <Icon iconName={thisTextContent[userLanguage].linkedin.logo} fill="var(--dark-color-100)"/>
            </a>
        </div>
    )
}