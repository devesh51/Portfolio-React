import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import InspiringQuotes from "./components/InspiringQuotes";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GotoTop from "./components/GotoTop";
import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [viewPopup, setViewPopup] = useState(false);

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <InspiringQuotes />
      <ContactMe onClick={() => setViewPopup(true)} />
      <GotoTop />
      {viewPopup && <Popup onClose={() => setViewPopup(false)} />}
    </div>
  );
}

export default App;
