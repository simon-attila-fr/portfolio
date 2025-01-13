import { useContext } from "react";
import UserLanguageContext from "../../Contexts/LanguageContext";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import texts from "../../data/text/textContent.json";
import "./navbar.css";
import Icon from "../Icon/Icon";

export default function Navbar() {
  const componentKey = "navbar";
  const { userLanguage } = useContext(UserLanguageContext);
  const thisElementContent = texts.textContent[componentKey][userLanguage];

  return (
    <div className="navbar_container">
      <div></div>
      <nav className="navbar_menu_container">
        <ul>
          <li>
            <Icon iconName="person" fill="var(--dark-color-100)"/>
            <Link to="/">
              {thisElementContent.introduction}
            </Link>
          </li>
          <li>
            <Icon iconName="work" fill="var(--dark-color-100)"/>
            <Link to="/experiences">
              {thisElementContent.experiences}
            </Link>
          </li>
          <li>
            <Icon iconName="email" fill="var(--dark-color-100)"/>
            <Link to="/contact">
              {thisElementContent.contact}
            </Link>
          </li>
          <li>
            <Icon iconName="school" fill="var(--dark-color-100)"/>
            <Link to="/skills">
              {thisElementContent.skills}
            </Link>
          </li>
        </ul>
      </nav>
      <LanguageSelector />
    </div>
  );
}
