import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Icebreakers = () => {
  const handleBackClick = () => {
    window.scrollTo(0, 1250);
  };
  return (
    <>
      <div className="back-link">
        <Link onClick={handleBackClick} className="link back" to="/">
          <ArrowLeftOutlined /> Back
        </Link>
      </div>
      <div className="project-title" id="forgotten-apes">
        <h1>icebreakers</h1>
      </div>
      <div className="project-logos">
        <a href="https://www.icebreakers.dev/" target="_blank" rel="noreferrer">
          Website
        </a>
        {/* <a
          href="https://github.com/ricefarmernft/opensea-reimbursement"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a> */}
      </div>

      <div className="container project movie-ratings">
        <div className="project-text-container">
          <div className="project-text">
            <h2>Inspiration</h2>
            <p>
              The inspiration for this project came from my own experience using
              online dating apps. I was frustrated with the amount of time it
              took me to come up with a unique and clever icebreaker whenever I
              had a match. Sometimes, I would be stuck on a particular match for
              multiple days until I would give up. As a result, I started using
              Chat GPT to generate my icebreakers. But even that was taking up a
              lot of time, as I would have to spin up the website and come up
              with an appropriate prompt. I eventually had enough and decided to
              come up with my own seamless solution to this problem by creating
              an AI app that would generate "icebreakers". And so, icebreakers
              was born!
            </p>
            <div className="project-img">
              <a
                href="https://www.icebreakers.dev/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="website-img"
                  src="https://res.cloudinary.com/dctoezvq5/image/upload/v1679271608/portfolio/icebreakers/icebreakers-landing-page_ewaxli.png"
                  alt="Icebreakers Website"
                ></img>
              </a>
            </div>
            <div className="list">
              <div className="project-list">
                <h2>Languages</h2>
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="project-list">
                <h2>Dependencies</h2>
                <ul>
                  <li>React</li>
                  <li>MUI Library</li>
                </ul>
              </div>
              <div className="project-list">
                <h2>APIs</h2>
                <ul>
                  <li>Open AI API</li>
                </ul>
              </div>
            </div>
            <h2>Styling</h2>
            <p>
              It was really important that this app was optimized for mobile
              first, as that is where most online dating takes place. Luckily,
              the MUI library makes it easy to create responsive websites. I
              also designed the MUI components to be as simple as possible. My
              main goal was to make this app easy and fast to use. For the logo,
              I used{" "}
              <a
                href="https://app.brandmark.io/v3/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Brandmark
              </a>{" "}
              for inspiration. Brandmark is a great tool for creating logos and
              branding, and that is how I came up with both my Logo and the
              Font. For the coloring, I wanted to use shades of blue and pink to
              represent the primary male and female colors. I used{" "}
              <a
                href="https://app.haikei.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Haikei
              </a>{" "}
              to generate the background gradient, and then experimented with
              different colors for the buttons and boxes until I found
              combinations that I liked.
            </p>
            <h2>Vision</h2>
            <p>
              My vision for this project was to use the Open AI API to generate
              3 unique and clever pickup lines that could be sent to your online
              dating matches. I had already experimented with this concept using
              Chat GPT before, but I had some free time and wanted to build an
              app to make this process easier and quicker. With icebreakers, you
              simply input your matches name, gender, and a fun fact. Then,
              click generate and the app will return unique icebreakers that you
              can either copy and paste straight into the dating app or take
              inspiration from to come up with your own!
            </p>
            <div className="project-img">
              <a
                href="https://www.icebreakers.dev/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="website-img"
                  src="https://res.cloudinary.com/dctoezvq5/image/upload/v1679271608/portfolio/icebreakers/icebreakers-filled_j4aaab.png"
                  alt="Icebreakers Website"
                ></img>
              </a>
            </div>
            <p>
              Utilizing the Open AI API was a very fun and creative process.
              There are dozens of models you can choose from and I decided to go
              with the GPT 3.5 model. I would have used GPT 4, the latest
              update, but I have not been granted access yet. However, GPT 3.5
              would be sufficient for now, as that is the model that standard
              Chat GPT is based off of.
            </p>
            <p>
              I should note that if you use the GPT 3 Model you can actually
              "train" the AI based on specific icebreakers. This would be useful
              if I had a large dataset of icebreakers that received positive
              responses so I could better train the AI to generate better
              icebreakers. If I were to collect feedback on the icebreakers,
              this could be a future goal.
            </p>
            <p>
              First, I would have to come up with the prompt. This was the most
              important part of the process, as you can only receive great
              outputs with a great standard prompt. I experimented with a variey
              of prompts until I found one that would return longer icebreakers
              that swayed to the funny and clever style. Personally, I wanted
              the app to match my humor and I also wanted the icebreakers to
              seem thoughtful and drawn out a bit.
            </p>
            <p>
              There were also multiple different settings you can choose from
              using GPT 3.5. These included temperature, number of iterations,
              and max characters. Temperature is the uniqueness of the outputs.
              Basically, a higher temperature means you would receive a more
              unique and sometimes strange response. I set this to the max
              because I wanted the most unique outputs you could come up with.
              For number of iterations, I choose 3. I wanted the user to be able
              to choose between a few icebreakers, but I also had to be aware of
              the costs. This also coincides with max tokens, which represents
              the length of the icebreaker. I didn't want the icebreakers to be
              too long as it would cost more. And for now, I am bootstrapping
              the app out of my own pocket.
            </p>
            <p>
              I added a loader component to app that would appear after you
              clicked the "Generate" button. It's important to note that the
              generate button will only become active if there is a name and
              gender inputted into the respective fields. Fun fact is an
              optional input, but I would strongly reccomend filling it in as it
              provides much better icebreakers. I also added an uppercase and
              lowercase switch to format the outputs according to your personal
              preference if you were to copy and paste the icebreakers straight
              into the dating app. Lastly, I added a clear form button as a fast
              way to start the process over again.
            </p>

            <h2>Testimonials</h2>
            <p>
              I have not widely publicized the app yet because the OpenAI API
              does cost money to use. However, I have shared it with my personal
              circle and have of course used it myself. The responses I received
              were mostly positive!
            </p>
            <div className="project-img-grid">
              <img
                className="hinge-img"
                src="https://res.cloudinary.com/dctoezvq5/image/upload/v1679274807/portfolio/icebreakers/IMG_4737_jcolxi.png"
                alt="Hinge Match"
              ></img>
              <img
                className="hinge-img"
                src="https://res.cloudinary.com/dctoezvq5/image/upload/v1679274807/portfolio/icebreakers/IMG_4616_aokw0t.png"
                alt="Hinge Match"
              ></img>
              <img
                className="hinge-img"
                src="https://res.cloudinary.com/dctoezvq5/image/upload/v1679274807/portfolio/icebreakers/IMG_4756_xeafiz.png"
                alt="Hinge Match"
              ></img>
              <img
                className="hinge-img"
                src="https://res.cloudinary.com/dctoezvq5/image/upload/v1679274807/portfolio/icebreakers/IMG_4747_a4scg0.png"
                alt="Hinge Match"
              ></img>
              <img
                className="hinge-img"
                src="https://res.cloudinary.com/dctoezvq5/image/upload/v1679274807/portfolio/icebreakers/IMG_4755_f3tuzm.png"
                alt="Hinge Match"
              ></img>
              <img
                className="hinge-img"
                src="https://res.cloudinary.com/dctoezvq5/image/upload/v1679274807/portfolio/icebreakers/IMG_4725_pfv7uf.png"
                alt="Hinge Match"
              ></img>
            </div>
            <div className="project-img"></div>

            <p>
              I am extremely happy with the results of this project! Although it
              may take a few generations, I can expect to receive a pretty witty
              icebreaker that is unique to my matches personality. Enough so to
              get a positive response, which I can then continue the
              conversation to create a deeper connection
            </p>
            <p>
              In the future, I plan to upgrade the API model to GPT 4. I also
              would like to provide categories to choose an icebreaker (more
              funny/clever/romantic/etc.) as well as create a feature where the
              user can pick an icebreaker they like but generate more options
              based on that specific style. I would also like to add a feedback
              form where I can gather data on the best icebreakers. But for now,
              I will continue using icebreakers to save time and accelerate my
              online dating experience!
            </p>
            <p>
              Disclaimer: This app is only intended for the initial icebreaker.
              The steps after that are out of my scope 😂
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

export default Icebreakers;
