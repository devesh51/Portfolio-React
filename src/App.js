import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import InspiringQuotes from "./components/InspiringQuotes";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GotoTop from "./components/GotoTop";
function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <InspiringQuotes />
      <ContactMe />
      <GotoTop />
    </div>
  );
}

export default App;
