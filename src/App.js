import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { Calendar } from "./Components/Calender";

function App() {
  return (
    <div className="App">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Calendar />
        <Contact />
    </div>
  );
}

export default App;
