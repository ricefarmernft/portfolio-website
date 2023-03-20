import React from "react";
import { Tweet } from "react-twitter-widgets";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ForgottenApes = () => {
  const handleBackClick = () => {
    window.scrollTo(0, 1850);
  };

  return (
    <>
      <div className="back-link">
        <Link onClick={handleBackClick} className="link back" to="/">
          <ArrowLeftOutlined /> Back
        </Link>
      </div>
      <div className="project-title" id="forgotten-apes">
        <h1>Forgotten Apes</h1>
      </div>
      <div className="project-logos">
        <a
          href="https://www.forgottenapes.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
        <a
          href="https://github.com/ricefarmernft/forgotten-apes"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <div className="container project forgotten-apes">
        <div className="project-question">
          <h2>How many Bored Apes are lost forever?</h2>
        </div>
        <div className="project-text-container">
          <div className="project-text">
            <h2>Inspiration</h2>
            <p>
              The inspiration for this project came from a variety of places.
              The idea of lost NFT assets is not a new one. Cryptopunks, a 4
              year old NFT project, is perhaps most famous for having many lost
              assets. Being one of the oldest NFT projects certainly means that
              some of these assets would be lost throughout the years, whether
              it be through lost private keys, death of the owner, or any
              variety of reasons. Punks were also famously a free project that
              had little to no value for years after their release. Predictably,
              many owners simply forgot about them because they were nearly
              worthless.
            </p>
            <p>
              I had seen a few Twitter posts from noteworthy accounts detailing
              their lost apes already.{" "}
              <a
                href="https://twitter.com/TAYL0RWTF/status/1405565620205228033?s=20&t=7udngl-s9g9X7fKP_54JFg"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                On June 17th, 2021, @TAYLORWTF sent Ape 8860 to the 0xdead
                wallet address, effectively “burning” the ape.
              </a>{" "}
              Why would someone do this? Well, I had to ask for myself:
            </p>
            <div className="project-img">
              <img
                className="tweet-img"
                src="https://res.cloudinary.com/dctoezvq5/image/upload/v1671396364/portfolio/project-imgs/taylorwtf-dm_vbhlkt.png"
                alt="Taylor DM"
              ></img>
            </div>
            <p>
              <a
                href="https://twitter.com/farokh/status/1432122997486366720?s=46&t=N8RPaf6MhC-JxHDZ0-8yow"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                @farokh
              </a>{" "}
              has also revealed he lost 3 Bored Apes due to a lost seed phrase:
            </p>
            <Tweet
              tweetId="1432122997486366720"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
              }}
            />
            <p>
              And perhaps my biggest inspiration was from{" "}
              <a
                href="https://github.com/0xmunger/lost-punks"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                @0xMunger's research on Lost Punks.
              </a>{" "}
              They created a script in Python where they sought out to determine
              how many Cryptopunks were lost. The criteria they used was simple:
              if a wallet containing a Punk has had no interactions in 4 years,
              it is considered lost:
            </p>
            <Tweet
              tweetId="1597599615737417728"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
              }}
            />
            <p>
              I wanted to do something similar to{" "}
              <a
                href="https://twitter.com/0xMunger"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                @0xMunger's
              </a>{" "}
              project, but put my own spin on it. Since I do not know Python, I
              would find a way to use Javascript to find the amount of lost apes
              and display the data on a website with a clean UI. This way,
              anybody could easily understand the data points and it could
              automatically update as more apes are lost.
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
                  <li>React Router Dom</li>
                  <li>React Redux Toolkit</li>
                  <li>Ant Design</li>
                  <li>Web3.js</li>
                </ul>
              </div>
              <div className="project-list">
                <h2>APIs</h2>
                <ul>
                  <li>Etherscan API</li>
                  <li>Alchemy API</li>
                </ul>
              </div>
            </div>
            <h2>Styling</h2>
            <p>
              I decided to use Ant Design to style my website. This was my first
              time using a styling library.
            </p>
            <p>
              I was incredibly impressed with the different components and the
              extensive documentation offered by Ant Design. It made my job much
              easier than doing CSS by hand, especially in terms of making my
              website responsive and mobile friendly.
            </p>
            <h3>Home</h3>
            <p>
              The homepage features statistics relating to how many apes are
              counted for each data point. I also decided to display 12 lost
              apes at random to get visitors curious about the rest of the
              project.
            </p>
            <div className="project-img">
              <a
                href="https://www.forgottenapes.xyz/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="website-img"
                  src="https://res.cloudinary.com/dctoezvq5/image/upload/v1671399101/portfolio/project-imgs/home-page_pfe62p.png"
                  alt="Forgotten Apes Home"
                ></img>
              </a>
            </div>
            <h3>Data Page</h3>
            <p>
              Each data page consists of a grid of each ape and their ID number
              that applies to the selected criteria. Every time a Data Page is
              refreshed, it will randomize the order of apes. This creates a
              more dynamic page where you can truly see the wide assortment of
              apes for each criteria. I included a basic search box to search
              for apes by ID. I also included a few basic sorting functions to
              sort the grid of apes accordingly.
            </p>
            <div className="project-img">
              <a
                href="https://www.forgottenapes.xyz/unclaimed-ape"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="website-img"
                  src="https://res.cloudinary.com/dctoezvq5/image/upload/v1671399457/portfolio/project-imgs/unclaimed-ape-page_ckcejp.png"
                  alt="Forgotten Apes Unclaimed $APE"
                ></img>
              </a>
            </div>
            <p>
              Clicking on an ape will take you to the Ape Details page. Here,
              you can see the metadata for that particular ape as well as links
              to Etherscan and Opensea.
            </p>
            <div className="project-img">
              <a
                href="https://www.forgottenapes.xyz/ape/7895"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="website-img"
                  src="https://res.cloudinary.com/dctoezvq5/image/upload/v1671400114/portfolio/project-imgs/ape-details-page_tdhtzh.png"
                  alt="Forgotten Apes Ape 7895"
                ></img>
              </a>
            </div>
            <p>
              Overall, it was important for me to showcase the apes in an
              interesting but simple way. I love the BAYC artwork and seeing
              them in a grid showcases the variety of different apes out there.
            </p>
            <h3>Lost Apes</h3>
            <p>
              The Lost Apes page has all of the same features as the other pages
              with one added component. Toggling the “Show Lost Apes Wallets”
              will make a table appear showcasing the wallet address and its
              corresponding ape count. The interesting data point here is that
              there is a single wallet with 27 apes in it that satisfies the
              Lost Apes criteria.{" "}
            </p>
            <div className="project-img">
              <a
                href="https://www.forgottenapes.xyz/lost-apes"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="website-img"
                  src="https://res.cloudinary.com/dctoezvq5/image/upload/v1671400640/portfolio/project-imgs/lost-apes-table-page_mdjl2c.png"
                  alt="Forgotten Apes Lost Apes"
                ></img>
              </a>
            </div>
            <h2>Vision</h2>
            <p>
              My vision for this project was to showcase all of the apes that
              are considered “lost” according to certain criteria. This made me
              think about certain data points I could use to narrow down this
              amount.
            </p>
            <p>
              I decided to use 5 different data points that would help me
              determine if an ape was lost:
            </p>
            <div className="project-list">
              <ul>
                <li>1. Unclaimed $Ape</li>
                <li>2. Unclaimed Dog</li>
                <li>3. Unclaimed Otherside</li>
                <li>4. Burned Apes</li>
                <li>5. No Transfers</li>
              </ul>
            </div>
            <h3>1. Unclaimed $Ape</h3>
            <p>
              The $APE coin claim took place in March 2022 and was open for 3
              months until June 2022. This was an obvious data point to include
              in my research. The $APE coin claim was one of the most lucrative
              claims in the history of Ethereum. Each ape received 10,950 $APE
              coins, currently valued at nearly $40,000 (and valued at over
              $200k at its peak).{" "}
            </p>
            <Tweet
              tweetId="1504201556165644298"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
              }}
            />
            <p>
              Due to my previous experience, I knew I could find this data using
              the Etherscan API. I would need to find the Apecoin Deployer
              address and extract the Logs from the Ethereum transactions. From
              there, I could find the ID of every ape that successfully claimed
              $APE coin and create an array of those values. I then created an
              array of numbers 0-9,999 to represent all ape IDs. Then I could
              compare the two arrays and the IDs that were not found in both
              arrays were the ape IDs that did not claim $APE coin. In total, I
              found that 96 apes did not claim $APE coin.
            </p>
            <h3>2. Unclaimed Dog</h3>
            <p>
              The Bored Ape Kennel Club claim was the first claim for ape
              holders in June 2021. This claim was only open for a week, so I
              expected there would be many more apes that did not claim their
              corresponding Dog. I did not expect to use this data as criteria
              for Lost Apes because this claim happened so long ago and was very
              short. But I knew finding this data would be quite easy since I
              had already written similar functions to find Unclaimed $APE.{" "}
            </p>
            <Tweet
              tweetId="1406008682006069248"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
              }}
            />
            <p>
              Finding this data was identical to finding the Unclaimed $APE coin
              apes. In total, I found that 398 apes did not claim their Bored
              Ape Kennel Club dog.{" "}
            </p>
            <h3>3. Unclaimed Otherside</h3>
            <p>
              The Otherside land claim occurred in April 2022 and was open for 3
              weeks. This was another valuable data point, as it was a lucrative
              claim after the $APE coin airdrop. Being the most recent ape claim
              would give me a lot of insight on the current status of lost apes.
            </p>
            <Tweet
              tweetId="1505014986556551172"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
              }}
            />
            <p>
              Although this was another claim, I could not use my previous
              methods from finding the $APE coin and Dog unclaimed apes. There
              were a few ways this claim was different than prior methods:
            </p>
            <div className="project-list">
              <ul>
                <li>
                  • This claim included Mutants as well as Apes, so I would have
                  to find a way to filter out Mutant apes who have claimed
                  Otherside Land
                </li>
                <li>
                  • Unlike the previous claims, if an ape did not claim their
                  land then Yuga Labs instead claimed their land on their behalf
                  to add to their treasury.
                </li>
              </ul>
            </div>
            <p>
              Because of these differences I had to come up with a different
              strategy. First, I had to use the Yuga Labs ethereum address to
              find the Otherside Lands that they claimed after the public drop.
              However, Mutant lands were also included in this data. Luckily,
              ape lands were numbered 0-10,000, so I could simply filter by
              lands that were claimed by Yuga Labs and had an ID below 10,000.
              In total, I found that 266 apes did not claim their Otherside
              land.
            </p>
            <h3>4. Burned Apes</h3>
            <p>
              Burned Apes are apes that have been transferred to a “burn”
              address. The odds of a burn address being claimed are nearly 0, so
              it is safe to assume Burned Apes are lost forever.
            </p>
            <p>
              This was the most straightforward data to find. Although any
              unused address can be classified as a burn address, the most used
              burned addresses are 0x0000 and 0xdead. Doing some research
              online, I decided to use the Alchemy API to find this data. I was
              able to filter the burn address by NFTs in the Bored Ape Contract
              and return the token ID hex that was present in the address. Then,
              using web3.js, I could translate that token ID hex to a token ID
              human readable number. I was able to follow this process for both
              burn addresses and combine the arrays together. In total, I found
              that 2 apes have been burned.
            </p>
            <h3>5. No Transfers</h3>
            <p>
              The premise of this data point was simple enough. I wanted to find
              out how many apes have never been transferred. However, this
              proved extremely difficult. The fool proof way to do this was to
              check each ape individually and get their transaction count from
              the Alchemy API. However, I cannot call an API 10,000 times and
              loading this data would take too long for a Javascript project. So
              I had to improvise.
            </p>
            <p>
              Instead, I decided to take a snapshot of ape holders at sellout
              and now, at the current time. I was able to use the Alchemy API to
              find all ethereum addresses holding an ape and their corresponding
              IDs at a certain block number. I choose to use the block number
              for the last minted ape to find the ape holders at sellout, and I
              would use the latest block to dynamically find the up to date list
              of ape holders. Then, I could compare the two arrays and if the
              address and ape ID matched, I could reasonably assume that that
              ape has never been “transferred”. Although this isn’t a perfect
              way to find this data, it was the best I could come up with. Some
              limitations include:
            </p>
            <div className="project-list">
              <ul>
                <li>
                  • Apes that were sold before the last ape was minted and are
                  still in the same wallet would be included in No Transfers
                </li>
                <li>
                  • Apes that have been sold but then rebought by the same
                  address would be included in No Transfers
                </li>
                <li>
                  • Apes transferred between cold and hot wallets may or may not
                  be included in No Transfers based on which wallet they are
                  currently in
                </li>
              </ul>
            </div>
            <p>
              Although alone this data would not help me find the total number
              of Lost Apes, I thought it was an interesting data point
              nonetheless and I would be able to use some parts of this
              component to find Lost Apes. In total, I found that 222 apes are
              in the same wallet that minted them.
            </p>
            <h2>Lost Apes</h2>
            <div className="project-img">
              <a
                href="https://www.forgottenapes.xyz/lost-apes"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="website-img"
                  src="https://res.cloudinary.com/dctoezvq5/image/upload/v1671402716/portfolio/project-imgs/lost-apes-page_d75pqu.png"
                  alt="Forgotten Apes Lost Apes"
                ></img>
              </a>
            </div>
            <p>
              Now to finally find an answer to my question: How many Bored Apes
              are lost forever? I decided to use 3 criteria to determine if an
              ape is lost:
            </p>
            <div className="project-list">
              <ul>
                <li>• Ape did not claim $APE coin</li>
                <li>• Ape did not claim Otherside land</li>
                <li>
                  • Ethereum Address containing the Ape has had no activity
                  since the Otherside mint
                </li>
              </ul>
            </div>
            <p>
              The first two criteria were easy to determine, as I had already
              extracted this data previously. I compared arrays from the apes
              that did not claim $APE coin to the apes that did not claim
              Otherside land. The apes that appeared in both arrays satisfied
              the first two criteria. In total, 75 apes satisfied both criteria.
            </p>
            <p>
              However, filtering by the third criteria proved to be extremely
              difficult. There were no easily accessible APIs that I could find
              to return this data, so I had to get creative. First, I wanted to
              extract the wallet address that corresponded to each ape. By doing
              so, I could display a table that would return the ethereum address
              with the amount of apes in the address. I used a combination of
              the Alchemy API and web3.js to return the current holders of the
              75 apes. From there, I used web3.js to get the transaction count
              of each address to detect inactivity, similar to the strategy I
              used to find the No Transfers apes. However, I could not simply
              find the transaction count for each address, but the transaction
              count since the Otherside mint. To do this, I received the total
              transaction count for each address, and the total transaction
              count up to the block of the last Otherside mint. If there was no
              difference between the two counts, then the address has had no
              activity since the Otherside mint. I was then able to filter out
              the active ethereum addresses from the 75 apes. This eliminated 7
              apes. In total, 68 apes satisfied all 3 criteria.
            </p>
            <p>
              <strong>
                I finally had the answer to my question. 68 apes are lost
                forever.
              </strong>
            </p>
            <h2>Testimonials</h2>
            <p>
              Finally, after a few weeks of heads down coding, I was ready to
              share my project with the world! I was extremely proud of this
              project in particular because I had to learn so many new
              technologies like React Router, React Redux, and Ant Design. I
              also had to find creative solutions to hard problems as well.
              Extracting data from the blockchain is not very fast, so I worked
              hard to minimize the amount of APIs calls and promises. Narrowing
              down my criteria for lost apes also took a lot of thinking and
              experimenting. But that's really what coding is all about, finding
              creative solutions to problems that no one has encountered before!
            </p>
            <Tweet
              tweetId="1604876453127942144"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
              }}
            />
            <p>
              My project got a lot of engagement, especially from the BAYC
              community! With over 250 likes, 40 retweets, and 50 comments! Here
              are some of my favorite responses on the project:
            </p>
            <Tweet
              tweetId="1604904425759248384"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <Tweet
              tweetId="1604922664925003776"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <Tweet
              tweetId="1604887593811734528"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <Tweet
              tweetId="1604906756508995585"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <p>
              There were a few people who actually knew the backstory behind a
              few of the lost apes too. That was super interesting to learn and
              read about!
            </p>
            <Tweet
              tweetId="1604890994360856576"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <Tweet
              tweetId="1604902535537430528"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <p>
              Kevin, the CEO of Dust Labs / DeGods has also said some
              encouraging words about the project.
            </p>
            <Tweet
              tweetId="1605085681927172096"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <p>
              And to take it a step further, I've started researching the
              indiviudal Lost Apes as an attempt to find the owners and
              understand how they became lost. While most investigations
              eventually run dry, there have been a couple successful outcomes.
            </p>
            <Tweet
              tweetId="1610055213410385920"
              options={{
                theme:
                  localStorage.getItem("mode") === "false" ? "dark" : "light",
                align: "center",
                conversation: "none",
              }}
            />
            <p>
              Sharing my projects with the world and gathering feedback has been
              instrumental to my growth as a web developer. I'm so happy to
              contribute to a community I feel so strongly about in a fun and
              creative way. It really gives me the confidence to keep learning
              and building.
            </p>
            <p>
              I'm so proud of what I have created and look forward to tracking
              more Apes that become lost over time!
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

export default ForgottenApes;
