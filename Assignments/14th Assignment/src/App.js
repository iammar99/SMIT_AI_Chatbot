// src/App.js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
// ---------------- Screen Loader ----------------
import ScreenLoader from 'Components/Screen Loader/ScreenLoader';
// ---------------- Header ----------------
import Header from "Components/Header";
// ---------------- Pages ----------------
import Home from "Pages/Frontend/Home";
import About from "Pages/Frontend/About";
import Experience from "Pages/Frontend/Experience";
import Contact from "Pages/Frontend/Contact";
import OtherProjects from "Pages/Frontend/OtherProjects";
import Projects from "Pages/Frontend/Projects";

// Import the ScrollReveal hook
import useScrollReveal from './Components/OtherComponents/ScrollReveal';
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Manage the loading state and call the scroll reveal when loading is complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  // Initialize the scroll reveal after the screen loader is complete
  useScrollReveal(!isLoading);

  return (
    <>
      {isLoading ? (
        <ScreenLoader />
      ) : (
        <>
          <Header />
          <section className="reveal">
            <Home />
          </section>
          <section className="reveal">
            <About />
          </section>
          <section className="reveal">
            <Experience />
          </section>
          <section className="reveal">
            <Projects />
          </section>
          <section className="reveal">
            <OtherProjects />
          </section>
          <section className="reveal">
            <Contact />
          </section>
        </>
      )}
    </>
  );
}

export default App;
