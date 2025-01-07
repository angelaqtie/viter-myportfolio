import React from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import About from "./components/pages/frontend/home/About";
import Skills from "./components/pages/frontend/home/Projects";
import Projects from "./components/pages/frontend/home/Skills";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
