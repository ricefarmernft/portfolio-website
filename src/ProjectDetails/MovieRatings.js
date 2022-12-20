import React from "react";
import {
  GlobalOutlined,
  GithubFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const MovieRatings = () => {
  const handleBackClick = () => {
    window.scrollTo(0, 2550);
  };
  return (
    <>
      <div className="back-link">
        <Link onClick={handleBackClick} className="link back" to="/">
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
              The inspiration for this project came from my love of movies. I
              love watching movies because it's a shorter time commitment than
              TV shows and the stories are usually faster paced and more
              memorable to me.
            </p>
            <p>
              One issue I always had though was answering the age old question:
              "What's your favorite movie?". I always answer with a different
              movie whenever I get asked. Recency bias usually takes over, and I
              can never quite remember if I liked The Town or The Departed more.
            </p>
            <p>
              My solution to this problem was simple. I wanted to create a
              running list of every movie I have ever seen, and rate them on a
              scale from 0-10. Let's get to work!
            </p>
            <div className="project-img">
              <a
                href="https://images.app.goo.gl/jexBEgUe2VNkcz8Y8"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="website-img"
                  src="https://res.cloudinary.com/dctoezvq5/image/upload/v1671571236/portfolio/project-imgs/05social-network01-articleLarge-v3_bd4iyb.jpg"
                  alt="The Social Network"
                ></img>
              </a>
            </div>
            <div className="list movie-ratings-list">
              <div className="project-list">
                <h2>Languages</h2>
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="project-list">
                <h2>APIs</h2>
                <ul>
                  <li>OMDB API</li>
                </ul>
              </div>
            </div>
            <h2>Styling</h2>
            <p>
              This would be my very first web development project, so I didn't
              have any expectations in terms of styling this app. My main focus
              was to make sure it actually worked!
            </p>
            <p>
              That said, I wanted to create the app in my preferred dark mode
              and display the movies in a list.
            </p>
            <h2>Vision</h2>
            <p>
              My vision for this project was to display every movie that I have
              ever watched; complete with rating, actors, genre, year, and a
              brief plot description. Overall, it would be a pretty simple app
              that does one thing extremely well. I intend to refer to this app
              whenever someone asked me what my favorite movie is.
            </p>
            <p>
              To start, I needed inputs to enter the movie name as well as the
              rating. I decided to use the{" "}
              <a
                href="https://omdbapi.com/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Open Movie Database API
              </a>{" "}
              as my data source. By doing so, I could input a movie name that
              would search through the API and return the JSON with the relevant
              information I desired. I could then input a rating for each movie
              and add that to the array once the submit button was pressed.
            </p>
            <p>
              Next, I had to figure out how to display the movies. I decided to
              display them in a list format by creating a div each time a movie
              was inputted. Each div would display the color-coded rating
              number, movie title, year, and genres. I added a "More" dropdown
              button that would also display the directors, actors, and brief
              plot summary. Lastly, I added a "Delete" button in case the user
              wanted to delete the movie or adjust the rating.
            </p>
            <p>
              To complete the project, I wanted to add a few sorting buttons to
              sort the movie list. I decided to add 5 sorting functions to the
              project: Random, Rating (High to Low), Rating (Low to High),
              Alphabetical (A-Z), and Alphabetical (Z-A). This way, I could see
              what the best and worst movies I have watched were.
            </p>
            <p>
              Here is a video of the full process and how to add a movie to the
              list:
            </p>
            <div className="project-img">
              <video
                className="project-video"
                src="https://res.cloudinary.com/dctoezvq5/video/upload/v1671570623/portfolio/project-imgs/movie-ratings_process_poxmb5.mov"
                controls
              ></video>
            </div>
            <p>
              One problem I encountered was finding a way to save the data after
              leaving the app. This is where I first learned about local
              storage. I used this technique to save the movie data to your
              local device so you can{" "}
              <a
                href="https://movie-tracker-eight.vercel.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                create your own personalized list!
              </a>
            </p>
            <p>
              If you're curious about my favorite movies, here are the films I
              rated as a 10/10:
            </p>
            <div className="project-img">
              <img
                className="website-img"
                src="https://res.cloudinary.com/dctoezvq5/image/upload/v1671570334/portfolio/project-imgs/movie-ratings-10_fh54tc.png"
                alt="Movie Ratings 10"
              ></img>
            </div>
            <p>
              Now, after every movie I watch, the first thing I do is open my
              app and add it to the list!
            </p>
          </div>
        </div>
      </div>
      <div className="back-link">
        <Link onClick={handleBackClick} className="link back" to="/">
          <ArrowLeftOutlined /> Back
        </Link>
      </div>
    </>
  );
};

export default MovieRatings;
