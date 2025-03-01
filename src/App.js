import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Languages from "./components/Languages";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './index.css'


function App() {
  return (
    <div>
      <Navbar />
      <div className="main-page-container">
        <div className="grid-container">
          <Introduction />
          <Projects />
          <Contact />
          <Skills />
          <Languages />
          <Experience />
        </div>
      </div>
    </div>

  );
}

export default App;
