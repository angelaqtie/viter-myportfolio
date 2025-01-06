import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import About from "./components/pages/frontend/About";
import Skills from "./components/pages/frontend/Skills";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
