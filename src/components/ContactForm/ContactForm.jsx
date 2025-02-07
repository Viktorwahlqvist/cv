import { useState } from "react";
import Button from "../Button/Button";
import "./contactform.css";
const ContactForm = () => {
  // Olika useState som jag har kopplat till alla input fält.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  /*Använer mina useState för att spara det som användaren skriver, så att dom har ett "värde". 
  om alla useState har fyllts i så blir min required boolean true.*/
  const required = [name, email, message].every(Boolean);
  return (
    <form
      // Använder denna så den skickar faktiskt ett mail till min mail.
      action="https://formsubmit.co/265a32306b0a7f47953bebe2cff9418c"
      method="POST"
    >
      <input
        className="form-text"
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        // Kopplar ihop rätt fält  till rätt useState
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-text"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        // Kopplar ihop rätt fält  till rätt useState
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        className="form-text"
        id="message"
        name="message"
        rows="4"
        cols="50"
        placeholder="Message"
        // Kopplar ihop rätt fält  till rätt useState
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {/* Min universal button som jag har skapat, här skriver jag in !required 
      så att det går bara trycka på knappen om anvären har skrivit något i alla fälten. */}
      <Button required={!required} styling={"submit-btn"} btnText={"Submit"} />
    </form>
  );
};

export default ContactForm;
