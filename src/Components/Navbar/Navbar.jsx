import { useState, useContext } from "react";
import UserLanguageContext from "../../Contexts/LanguageContext";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import texts from "../../data/text/textContent.json";
import Icon from "../Icon/Icon";
import "./navbar.css";

export default function Navbar() {
  const componentKey = "navbar";
  const { userLanguage } = useContext(UserLanguageContext);
  const thisElementContent = texts.textContent[componentKey][userLanguage];

  const [open, setOpen] = useState(false);
  function handleBurgerMenuClick() {
    setOpen(!open)
  }

  return (
    <div className="navbar_container">
      <div></div>
      <nav className={`navbar_menu_container ${open ? "show_burgermenu" : ""}`}>
        <ul>
          <li>
            <Icon iconName="person" fill="var(--dark-color-100)" />
            <NavLink to="/" onClick={handleBurgerMenuClick}>{thisElementContent.introduction}</NavLink>
          </li>
          <li>
            <Icon iconName="work" fill="var(--dark-color-100)" />
            <NavLink to="/experiences" onClick={handleBurgerMenuClick}>{thisElementContent.experiences}</NavLink>
          </li>
          <li>
            <Icon iconName="email" fill="var(--dark-color-100)" />
            <NavLink to="/contact" onClick={handleBurgerMenuClick}>{thisElementContent.contact}</NavLink>
          </li>
          <li>
            <Icon iconName="school" fill="var(--dark-color-100)" />
            <NavLink to="/skills" onClick={handleBurgerMenuClick}>{thisElementContent.skills}</NavLink>
          </li>
        </ul>
      </nav>
      <LanguageSelector />
      <button
        className={`portfolio_burgermenu_button`}
        onClick={handleBurgerMenuClick}
      >
        <Icon iconName={open ? "close" : "burgermenu"} fill="var(--dark-color-100)"/>
      </button>
    </div>
  );
}
