import NavbarUser from "./NavbarUser";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./navbar.css";
import { useEffect, useState } from "react";
import DesktopMenu from "./Desktop/DesktopMenu";
import HamburgerMenu from "./Hamburger/HamburgerMenu";
const Navbar = () => {
  // UseState för att kolla width på webbläsaren, är den mindre eller lika med 600px så blir våran with true.
  const [width, setWidth] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      // Samma som tidigare, kollar om våran width är mindre eller lika med 600px och om den är så blir denna true.
      setWidth(window.innerWidth <= 600);
    };
    // event listener för att den ska lyssna efter om användaren ändrar storlek på fönstret call back funktionen är den ovanför som ändrar width.
    window.addEventListener("resize", handleResize);

    return () => {
      // En clean upp för våran listener, förhindra onödiga listener när den inte längre används.
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="navbar-container">
      {/* Navbaruser är komponenten jag skapade för att skriva ut information
      om min github, så som user avatar login namn. */}
      <NavbarUser />
      {/* Kollar om width är sann eller falsk. width är sann betder det att innerwidth är lika med eller mindre än 600px och då visas 
      hamburgar menyn annars så visas vanliga menyn som är DesktopMenu */}
      {width ? <HamburgerMenu /> : <DesktopMenu />}
    </section>
  );
};

export default Navbar;
