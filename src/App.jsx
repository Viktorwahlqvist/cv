import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Repos from "./pages/Repos";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { DarkModeProvider } from "./Context/DarkModeContext";
import TitleUpdater from "./components/TitleUpdater/TitleUpdater";

function App() {
  return (
    <DarkModeProvider>
      <TitleUpdater />
      <section className="column-container">
        <Navbar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Repos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </section>
    </DarkModeProvider>
  );
}

export default App;
