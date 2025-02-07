import { AnimatePresence, motion } from "motion/react";
import "./contactinfo.css";
import { easeIn } from "motion";
const ContactInfo = () => {
  return (
    // Animatepres.. är ytter ramarna för vart animationer ska börja eller ta slut.
    <AnimatePresence>
      <address className="contact-info">
        {/* motion på det element man vill använda motion biblioteket, här använder jag mig av
        initial som är där det börjar, animate är vart det ska komma till och transition
        är så man kan definera tid, ease. man kan även välja opacity duration osv för att välja de olika
        duration på olika saker t.ex som opacity, y osv.  */}
        <motion.article
          className="contact-flex"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: easeIn }}
        >
          <i className="bi bi-envelope"> </i>
          <a href="mailto:Wahlqvistviktor@hotmail.com">
            Wahlqvistviktor@hotmail.com
          </a>
        </motion.article>
        {/* Samma sak med motion här som ovanför. men här har jag även delay för när 
          den ska starta */}
        <motion.article
          className="contact-flexx"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, delay: 2 }}
        >
          <a
            href="https://github.com/Viktorwahlqvist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/viktor-vahlqvist-01701b326/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          {/* bootstrap bibliotek för ikoner*/}
        </motion.article>
      </address>
    </AnimatePresence>
  );
};

export default ContactInfo;
