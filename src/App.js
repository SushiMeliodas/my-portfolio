import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* Introduction */}
      <section id="home">
        <Introduction />
      </section>

      {/* My Skills */}
      <section className="my-skills" id="skills">
        <Skills />
        <Button variant="contained" className="btn__practice" href="#work">
          My Practice
        </Button>
      </section>
      {/* About Me */}
      <section id="about">
        <AboutMe />
      </section>
      {/* My Work */}
      <section className="my-works" id="work">
        <Works />
      </section>
      {/* Footer */}
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
