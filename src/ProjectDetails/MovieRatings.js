import React from "react";
import {
  GlobalOutlined,
  GithubFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode";

const MovieRatings = () => {
  return (
    <>
      <DarkMode />
      <div className="back-link">
        <Link className="link back" to="/">
          <ArrowLeftOutlined /> Back
        </Link>
      </div>
      <div className="project-title" id="forgotten-apes">
        <h1>Movie Ratings Tracker</h1>
      </div>
      <div className="project-logos">
        <a
          href="https://movie-tracker-eight.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <GlobalOutlined />
        </a>
        <a
          href="https://github.com/ricefarmernft/Movie-Tracker"
          target="_blank"
          rel="noreferrer"
        >
          <GithubFilled />
        </a>
      </div>
    </>
  )
}

export default MovieRatings