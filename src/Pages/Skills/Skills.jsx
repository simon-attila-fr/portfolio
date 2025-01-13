import { useContext } from "react";
import UserLanguageContext from "../../Contexts/LanguageContext";
import text from "../../data/text/textContent.json";
import PageBody from "../../Components/PageBody/PageBody";
import Icon from "../../Components/Icon/Icon";
import pageOptions from "../../data/options/options.json";
import { normalizeSkilltypename } from "./helpers";
import "./skills.css";

export default function Skills() {
  const { userLanguage } = useContext(UserLanguageContext);
  const pageName = "skills";
  const thisPageContent = text.textContent[pageName][userLanguage];
  const skilltypes = pageOptions.options.skilltypes;
  const thisPageOptions = pageOptions.options[pageName];

  return (
    <PageBody title={thisPageContent.h1}>
      <div className="skillcards_container">
        {Object.keys(skilltypes).map((skilltype) => {
          const sectionTitle =
            skilltypes[skilltype].skilltype_name[userLanguage];
          return (
            <div key={`${skilltypes[skilltype].skill_id}${sectionTitle}`}>
              <h2>{normalizeSkilltypename(sectionTitle)}</h2>
              <ul>
                {Object.values(thisPageOptions)
                  .filter(
                    (skill) =>
                      skill.skill_type === skilltypes[skilltype].skilltype_id
                  )
                  .map((skill) => (
                    <li
                      key={`${skill.skill_id}${skill.skill_name[userLanguage]}`}
                    >
                      {skill.skill_name[userLanguage]}
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div>
        <h2>{thisPageContent.profiles_title}</h2>
        <p>{thisPageContent.profiles_description}</p>
        <div className="skillcards_container">
          {thisPageContent.profiles.map((profile, index) => {
            return (
              <div key={`profiles${index}_${profile.name}`} className="skillcards_container_profiles">
                <a
                  target="_blank"
                  href={pageOptions.options.link_coding[profile.name]}
                >
                  <Icon
                    iconName={profile.logo}
                    fill="var(--dark-color-100)"
                    size="xxl"
                  />
                </a>
                <p>{profile.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </PageBody>
  );
}
