/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  // Börjar med false eftersom att sidan börjar med "mörkt"
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    /* Toggla mellan light och dark i bodyn.
    om isLight är sann blir det light, om det är falskt blir det mörkt. */
    document.body.classList.toggle("light", isLight);
    document.body.classList.toggle("dark", !isLight);
    // Körs varje gång isLight ändras
  }, [isLight]);

  // Funktion för att toggla mellan sant och falskt.
  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    // Skickar med isLight ustState och toggle funktionen kan använda i navbaren.
    <DarkModeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
