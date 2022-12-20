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

      <div className="container project movie-ratings">
        <div className="project-text-container">
          <div className="project-text">
            <h2>Inspiration</h2>
            <p>
              The inspiration for this project came from a variety of places.
              The idea of lost NFT assets is not a new one. Cryptopunks, a 4
              year old NFT project is perhaps most famous for having many lost
              assets. Being one of the oldest NFT projects certainly means that
              some of these assets would be lost throughout the years, whether
              it be through lost private keys, death of the owner, or any
              variety of reasons. Punks were also famously a free project that
              had little to no value for years after their release. Predictably,
              many owners simply forgot about them because they were nearly
              worthless.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieRatings;
