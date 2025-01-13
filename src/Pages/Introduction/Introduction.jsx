import { useContext } from 'react';
import UserLanguageContext from '../../Contexts/LanguageContext';
import text from '../../data/text/textContent.json';
import PageBody from '../../Components/PageBody/PageBody';

export default function Introduction() {
  const { userLanguage } = useContext(UserLanguageContext);
    const pageName = "introduction";
    const thisPageContent = text.textContent[pageName][userLanguage];

  return (
      <PageBody title={thisPageContent.h1}>
        <h2>{thisPageContent.h2}</h2>
        <div className='pagecontent_horizontal_card'>
          <div className='pagecontent_horizontal_card_imagecontainer'>
            <img src="portfolio_profile.png"/>
          </div>
          <div className='pagecontent_horizontal_card_textcontainer'>
            {
              thisPageContent.p.map((paragraph, index) => {
                return(
                  <p key={`${pageName}_paragraph_${index}`}>{paragraph}</p>
                )
              })
            }
          </div>
        </div>
      </PageBody>
  );
}
