import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutAndSkills from "./pages/AboutAndSkills";
import ProjectPage from "./pages/ProjectPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutAndSkills />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route path="/education" element={<EducationPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
