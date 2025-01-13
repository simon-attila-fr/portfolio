import { useContext } from "react";
import UserLanguageContext from "../../Contexts/LanguageContext";
import Icon from "../../Components/Icon/Icon";
import text from "../../data/text/textContent.json";
import pageOptions from "../../data/options/options.json";
import PageBody from "../../Components/PageBody/PageBody";
import './contact.css';

export default function Contacts() {
  const { userLanguage } = useContext(UserLanguageContext);
  const pageName = "contact";
  const thisPageContent = text.textContent[pageName][userLanguage];

  return (
    <PageBody title={thisPageContent.h1}>
        {thisPageContent.profiles.map((profile, index) => {
          return (
            <div key={`profiles${index}_${profile.name}`} className="contact_container">
              <a target="_blank" href={pageOptions.options.link_social[profile.name]}>
                <Icon
                  iconName={profile.logo}
                  fill="var(--dark-color-100)"
                  size="xxl"
                  title={profile.img_alt_text}
                />
              </a>
              <p>{profile.text}</p>
            </div>
          );
        })}
    </PageBody>
  );
}
