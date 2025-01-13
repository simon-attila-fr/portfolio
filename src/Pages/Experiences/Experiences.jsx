import { useContext } from "react";
import UserLanguageContext from "../../Contexts/LanguageContext";
import text from "../../data/text/textContent.json";
import PageBody from "../../Components/PageBody/PageBody";
import XPCard from "../../Components/XPCard/XPCard";
import './experiences.css'

export default function Experiences() {
  const { userLanguage } = useContext(UserLanguageContext);
  const pageName = "experiences";
  const thisPageContent = text.textContent[pageName][userLanguage];

  return (
    <PageBody title={thisPageContent.h1}>
      <h2>{thisPageContent.h2_1}</h2>
      <section className="xpcards_container">
        {["voyagexpert", "opendatasoft", "wildcodeschool"].map((xp, index) => {
          return <XPCard key={`${xp}${index}`} summary={thisPageContent.summary} content={thisPageContent[xp]} />;
        })}
      </section>
      {/* <h2>{thisPageContent.h2_2}</h2> */}
    </PageBody>
  );
}
