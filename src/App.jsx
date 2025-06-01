import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Scrolling from "./components/Scrolling";
import ScrollingText from "./components/ScrollingText";
import EducationTimeline from "./components/Edu";
import CustomCursor from "./components/CustomCursor";
import SmoothCursor from "./components/SmoothCursor";

function App() {
  return (
    <>
      <SmoothCursor />
      <Navbar />
      <Hero />

      <About />
      <Scrolling />
      <Project />
      <EducationTimeline />

      <ScrollingText />
      {/* <Education /> */}
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
