/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import "./skillcards.css";
const SkillCards = ({ Name, ClassName, Icon, delay }) => {
  return (
    // Motion bibliotek igen för animationer hur mina "skill" kort ska dyka upp på skärmen
    <motion.article
      initial={{ opacity: 0, y: -1000, x: 100 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        opacity: { duration: 2, ease: "easeInOut" },
        y: { duration: 2 },
        x: { duration: 2, delay: delay },
      }}
      className="icon-name"
    >
      <Icon className={ClassName} />
      <p className="skill-text">{Name}</p>
    </motion.article>
  );
};

export default SkillCards;
