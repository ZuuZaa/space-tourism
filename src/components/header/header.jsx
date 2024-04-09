import { NavLink } from "react-router-dom";
import path from "@/assets/icons/path.svg";
import { useState } from "react";
import "./header.style.scss";
import { navLinks } from "./constants";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggleHandler = () => setIsOpen((prev) => !prev);

  return (
    <header className={isOpen ? "show-nav" : "hide-nav"}>
      <div className="header-extra">
        <img src={path} alt="rhombus icon" className="path-icon" />
        <hr />
        <button
          className={isOpen ? "menu cross" : "menu bars"}
          onClick={menuToggleHandler}
        >
          <div className="bar"></div>
        </button>
      </div>
      <nav>
        <ul className="navbar">
          {navLinks.map((item) => (
            <li className="nav-text" key={item.id}>
              <NavLink
                exact={item.active}
                to={item.link}
                activeclassname="active"
              >
                <span className="bold-text">{item.order}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
