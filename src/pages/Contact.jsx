import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <ContactInfo />
      <article className="contact-form">
        <ContactForm />
      </article>
    </section>
  );
};

export default Contact;
