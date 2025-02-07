import { AnimatePresence } from "motion/react";
import AboutInfo from "../components/About/AboutInfo";
import Skills from "../components/Skills/Skills";
import "./home.css";

const Home = () => {
  return (
    <AnimatePresence>
      <section className="home-container">
        <AboutInfo />
        <Skills />
      </section>
    </AnimatePresence>
  );
};

export default Home;
