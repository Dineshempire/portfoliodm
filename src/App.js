//import PageIntro from "./components/Navbar/Intro/PageIntro";
import HomePage from "./components/Navbar/Intro/HomePage";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Navbar/Skills/Skills";
import Project from "./components/Navbar/Projects/Project";
import Contact from "./components/Navbar/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      
    </div>
  );
}

export default App;
