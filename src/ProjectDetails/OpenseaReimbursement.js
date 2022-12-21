import React from "react";
import { Tweet } from "react-twitter-widgets";
import {
  GlobalOutlined,
  GithubFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const OpenseaReimbursement = () => {
  const handleBackClick = () => {
    window.scrollTo(0, 2000);
  };
  return (
    <>
      <div className="back-link">
        <Link onClick={handleBackClick} className="link back" to="/">
          <ArrowLeftOutlined /> Back
        </Link>
      </div>
      <div className="project-title" id="forgotten-apes">
        <h1>Opensea Reimbursement</h1>
      </div>
      <div className="project-logos">
        <a
          href="https://www.osrefund.app/"
          target="_blank"
          rel="noreferrer"
        >
          <GlobalOutlined />
        </a>
        <a
          href="https://github.com/ricefarmernft/opensea-reimbursement"
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
              The inspiration for this project came from a viral Twitter post I
              saw from{" "}
              <a
                href="https://twitter.com/CryptoXpresso"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                @CryptoXpresso
              </a>{" "}
              . I had never heard of Opensea offering refunds before so I was
              quite intrigued with the process. One thing I instantly noticed,
              however, was how many steps it took to accurately get the amount
              that Opensea owes you. It isn't easy for the average individual to
              read etherscan and export all of their failed Opensea
              transactions.
            </p>
            <Tweet
              tweetId="1591218382216404992"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
              }}
            />
            <p>
              That weekend I started thinking: How can I make this process
              easier for the average individual? Speed was of the essence here
              as I wanted to capture as many users as I could while this post
              was viral. I had never worked with blockchain data before, but I
              figured this was a simple enough problem that it was the perfect
              time to start. So I got to work!
            </p>
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
                  <li>React HTML Table to XLS</li>
                </ul>
              </div>
              <div className="project-list">
                <h2>APIs</h2>
                <ul>
                  <li>Etherscan API</li>
                </ul>
              </div>
            </div>
            <h2>Styling</h2>
            <p>
              I kept the styling extremely simple due to time constraint and the
              practicality I wanted for the app. There would be an input for the
              Ethereum address to check, a balance checker, and a table to
              showcase all of your transactions. Also, I added a dark mode
              option.
            </p>
            <h2>Vision</h2>
            <p>
              My vision for this project was to showcase all of the Ethereum
              transactions that failed an interaction with the Opensea contracts
              by simply inputting your Ethereum address. I wanted to display it
              in a simple table with the date, transaction hash, gas fee, and
              etherscan link. I also wanted to clearly display the total Opensea
              reimbursement amount as well as an option to export the table to
              an Excel sheet.
            </p>
            <div className="project-img">
              <a
                href="https://www.osrefund.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="website-img"
                  src="https://res.cloudinary.com/dctoezvq5/image/upload/v1671503176/portfolio/project-imgs/opensea-reimbursement_n8dn65.png"
                  alt="Opensea Reimbursement"
                ></img>
              </a>
            </div>
            <p>
              I had never worked with blockchain data before so my first step
              was to find an API that could filter the entire history of
              someones Ethereum address. This proved rather easy though since
              etherscan has a free API that you can use for personal projects.
              This would work perfectly!
            </p>
            <p>
              Setting up the Ethereum address input was easy enough. I created a
              state that would store the address that a user inputs. I wanted to
              test the etherscan API so I decided to have it display the
              addresses Ether balance to the right. This way, the user could
              confirm that they inputted their address in correctly.
            </p>
            <p>
              Then came the more technical part of the app: filtering the
              ethereum transactions. There were two basic criteria I needed to
              filter out the transactions by: failed transactions, and
              interactions with the Opensea contract. Filtering the JSON data by
              failed transactions was easy enough, but I remembered Opensea has
              gone through multiple contract upgrades in the past.
            </p>
            <p>
              I was able to find 4 contracts that were deployed by Opensea by
              looking at my personal past Opensea transactions, searching for
              Opensea contracts on etherscan, and using Twitter advanced search
              to find Tweets related to contract upgrades.
            </p>
            <Tweet
              tweetId="1497342530957955073"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
              }}
            />
            <p>
              Once I was able to filter all of the necessary failed Opensea
              transaction, I simply needed to extract the gas amount and convert
              it to Ether. I could then find the total amount of gas, which is
              the amount that Opensea owes you back in reimbursement.
            </p>
            <p>
              Lastly, I wanted to add a simple Export to Excel button. I found a
              package that would make this a simple button click and I was done!
            </p>
            <h2>Testimonials</h2>
            <p>
              The only thing left to do was to release it to world. I hoped it
              would help a few people who had not received their reimbursement
              yet or were unable to find their reimbursement amount. The
              response I got was extraordinary!
            </p>
            <Tweet
              tweetId="1594745256951562250"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
              }}
            />
            <p>
              Over 800 likes, 200 retweets, and nearly 100 comments. I was
              genuinely surprised at the amount of positive responses I was
              receiving. Let me tell you, it is a great feeling creating
              something so useful. It reaffirmed my belief that users want
              something fast and simple, which was exactly what this app was.
              Here are some of my favorite responses and feedback:
            </p>
            <Tweet
              tweetId="1594855371642114048"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <Tweet
              tweetId="1595744289426149376"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <Tweet
              tweetId="1594831256209960960"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <Tweet
              tweetId="1595317819042050048"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <p>
              The feedback I received was nothing short of incredible. It felt
              amazing to help so many people and have them offer me encouraging
              words on my web development process. Who knew I could help so many
              people by building a simple tool over the weekend?
            </p>
            <p>
              In fact, my app was so popular it may have actually backfired.
              Shortly after launching the app, many users started reporting
              Opensea changing their policy to only allow reimbursement for
              transactions occuring in the last 30 days.
            </p>
            <Tweet
              tweetId="1594746072701747203"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <Tweet
              tweetId="1594763966626013185"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <p>
              Despite the new policy, this app is still useful for active NFT
              traders as they can receive their monthly reimbursement from
              Opensea. So I decided to leave the site up and to this day I still
              receive messages from grateful users using my app.
            </p>
            <p>
              Sometimes, you don't need to be an incredible coder to create a
              popular app. You just need to seize the moment 🙂
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

export default OpenseaReimbursement;
