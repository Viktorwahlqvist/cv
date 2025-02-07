/* eslint-disable react/prop-types */
import "./button.css";

/* En "Universal button" som kan användas till flera saker om jag skulle tillöka saker i projektet
som behöver button, btnText är vad som står i btn, styling är className för just den specifika
button då basic-button stylingen är bara basic  button komponenten kan användas till flera olika saker. 
sedan en click function, och type, om man vill ha t.ex en btn eller submit.. */
const Button = ({ btnText, styling, onClickFunction, type, required }) => {
  return (
    <button
      disabled={required}
      type={type}
      className={`basic-button ${styling}`}
      onClick={onClickFunction}
    >
      {btnText}
    </button>
  );
};

export default Button;
