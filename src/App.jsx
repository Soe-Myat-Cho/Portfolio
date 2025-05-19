import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollingRow from "./components/ScrollingRow";
import EducationTimeline from "./components/Edu";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <EducationTimeline />
      {/* <Education /> */}
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
