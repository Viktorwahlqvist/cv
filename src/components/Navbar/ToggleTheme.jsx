import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import "./togglethemes.css";

const ToggleTheme = () => {
  // destructing från DarkModeContext. isLight som är en useState, och toggleTheme som är en funktion som togglar mellan mörkt och ljust
  const { isLight, toggleTheme } = useContext(DarkModeContext);
  return (
    /* En knapp med en toggle funktion, och växlar mellan måne och sol beroende på om den är sann
    eller falsk. */
    <button onClick={toggleTheme} className="toggle-themes">
      {isLight ? "🌙" : "☀️"}
    </button>
  );
};

export default ToggleTheme;
