import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Homepage";
import Footer from "./HomepageComponents/Footer";
import ForgottenApes from "./ProjectDetails/ForgottenApes";
import OpenseaReimbursement from "./ProjectDetails/OpenseaReimbursement";
import MovieRatings from "./ProjectDetails/MovieRatings";
import Icebreakers from "./ProjectDetails/Icebreakers";
import { Routes, Route, useLocation } from "react-router-dom";
import DarkMode from "./HomepageComponents/DarkMode";
import ReactGA from "react-ga4";
import { data } from "./data";

const googleApi = `${process.env.REACT_APP_GOOGLE_ANALYTICS_KEY}`;
ReactGA.initialize(googleApi);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();

  // Google Analytics
  useEffect(() => {
    ReactGA.send("pageview", location.pathname);
  }, [location]);

  // Dark mode toggle
  const handleButtonClick = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("mode", darkMode);
  };

  // Set dark mode
  useEffect(() => {
    if (localStorage.getItem("mode") === "false") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  console.log(data);

  return (
    <>
      <DarkMode handleButtonClick={handleButtonClick} />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/icebreakers" element={<Icebreakers />}></Route>
        <Route exact path="/forgotten-apes" element={<ForgottenApes />}></Route>
        <Route
          exact
          path="/opensea-refund"
          element={<OpenseaReimbursement />}
        ></Route>
        <Route
          exact
          path="/movie-rating-tracker"
          element={<MovieRatings />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
