import { NavLink } from "react-router-dom";
import ToggleTheme from "../ToggleTheme";
import Hamburger from "hamburger-react";
import { useState } from "react";
import "./hamburgermenu.css";

const HamburgerMenu = () => {
  // isOpen för att kunna toggla mellan öppen och stängd hamburgar menu.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* bibliotek för en hamburgar meny. skriver in storlek, färg, toggled är för att kolla vilket state den är i och toggle är funktionen som useState har med sig
    som i detta fal är för att toggla. */}
      <Hamburger
        size={40}
        color="#00D37E"
        toggled={isOpen}
        toggle={setIsOpen}
        className="hamburger-styling"
      />
      {/* Är isOpen sann så visas det i hamburgar menyn. */}
      {isOpen && (
        <nav className="mobile-nav">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active-link link-flex" : "link-flex"
            }
          >
            <i className="bi bi-house"></i> Home
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              isActive ? "active-link link-flex" : "link-flex"
            }
          >
            <i className="bi bi-cast"></i>Projects
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "active-link link-flex" : "link-flex"
            }
          >
            <i className="bi bi-person-rolodex"></i>Contact
          </NavLink>
          {/* Här är toggleTheme som är useContext.*/}
          <ToggleTheme />
        </nav>
      )}
    </>
  );
};

export default HamburgerMenu;
