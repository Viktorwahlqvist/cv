import { NavLink } from "react-router-dom";
import ToggleTheme from "../ToggleTheme";

const DesktopMenu = () => {
  return (
    <section className="link-container">
      {/* Här valde jag att anväönda NavLink istället för Link eftersom att dom fungerar
        lika dant fast med navLink kan man använda sig av isActive, jag ville att
        användaren ska kunna se vilken den är på i "navbaren" så om den är aktiv
        så ser den lite annorlundare ut då den får ett till classname som är active-link
        Här under har jag även använt mig av bootstrap bibliotek för ikoner. */}
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
    </section>
  );
};

export default DesktopMenu;
