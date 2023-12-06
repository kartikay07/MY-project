
import './App.css';
import React from "react";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Testimonials from "./Component/Testimonials";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
