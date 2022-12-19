import "./App.css";
import Homepage from "./Homepage";
import Footer from "./Footer";
import ForgottenApes from "./ProjectDetails/ForgottenApes";
import OpenseaReimbursement from "./ProjectDetails/OpenseaReimbursement";
import MovieRatings from "./ProjectDetails/MovieRatings";
import TargaryenFamilyTree from "./ProjectDetails/TargaryenFamilyTree";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/project/1" element={<ForgottenApes />}></Route>
        <Route
          exact
          path="/project/2"
          element={<OpenseaReimbursement />}
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
