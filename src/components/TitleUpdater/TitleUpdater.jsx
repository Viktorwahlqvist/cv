import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
  // Använder useLocation så att vi hela tiden kan använda webbsidans "location"
  const location = useLocation();
  //En array med flera objet som innehåller pathname en title och icon.
  const titleObj = [
    { pathame: "/", title: "Home", icon: "house.png" },
    { pathame: "/projects", title: "Projects", icon: "backlog.png" },
    { pathame: "/contact", title: "Contact", icon: "contact-information.png" },
  ];

  useEffect(() => {
    // find metoden för att hitta rätt i pathname i objeketet så att vi kan använda just den title och icon.
    const newTitle = titleObj.find(
      (title) => title.pathame === location.pathname
    );
    // Om newTitle finns, dvvs att find lyckades så updateras title. annars blir det mitt namn.
    document.title = newTitle ? newTitle.title : "Viktor Wahlqvist";
    // Queryselector letar reda på link i html dokumentet så vi även kan uppdatera bilden.
    const link = document.querySelector("link");
    //* Här kollar vi link och newTitle så om båda har lyckats att hitta s updateras link.href till den ikonen som finns
    // annars blir det en tom sträng. */
    link && newTitle ? (link.href = newTitle.icon) : (link.href = "");
    // useEffect körs när location updateras och det är när vi navigerar till en ny sida.
  }, [location]);
};

export default TitleUpdater;
