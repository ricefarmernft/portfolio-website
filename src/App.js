import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Homepage";
import Footer from "./Footer";
import ForgottenApes from "./ProjectDetails/ForgottenApes";
import OpenseaReimbursement from "./ProjectDetails/OpenseaReimbursement";
import MovieRatings from "./ProjectDetails/MovieRatings";
import TargaryenFamilyTree from "./ProjectDetails/TargaryenFamilyTree";
import { Routes, Route } from "react-router-dom";
import DarkMode from "./DarkMode";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleButtonClick = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("mode", darkMode);
  };

  useEffect(() => {
    if (localStorage.getItem("mode") === "false") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <DarkMode handleButtonClick={handleButtonClick} />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/project/1" element={<ForgottenApes />}></Route>
        <Route
          exact
          path="/project/2"
          element={<OpenseaReimbursement darkMode={darkMode} />}
        ></Route>
        <Route exact path="/project/3" element={<MovieRatings />}></Route>
        <Route
          exact
          path="/project/4"
          element={<TargaryenFamilyTree />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
