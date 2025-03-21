import React from "react";
import Row from "./Row";
import AwardBanner from "./AwardBanner";
import "./HomeContent.css";
import SACNASGroup from "../../assets/SACNAS-Group.jpg";
import outreach_navarro from "../../assets/outreach_navarro.jpg";
import houaztec from "../../assets/houaztec.jpg";
import leadership_award from "../../assets/leadership_award.webp";
import lorissa from "../../assets/lorissa-crop.jpg";

function HomeContent() {
  return (
    <>
      <div class="home">
        <AwardBanner
          title={
            <h2>
              SACNAS UH: <br /> 2024 Outstanding Chapter for Leadership in
              Science
            </h2>
          }
          paragraph={
            <p>
              "I am extremely proud of our UH SACNAS team, and the work we’ve
              put in these past couple of years. We have been able to maintain
              an unrivaled standard of excellence as a chapter, and are so proud
              to bring home this third award in a row! We’ve definitely had our
              ups and downs, but this is a testament to the ambition and
              perseverance of the amazing students here in our organization.
              Congratulations UH SACNISTAS! We'll be out there again next year!"
            </p>
          }
          img={leadership_award}
          imgborder="y"
          quoteImg={lorissa}
          quoteLabel={
            <h3>
              Lorissa Saiz <br /> President, SACNAS UH <br /> 2018-Present
            </h3>
          }
          learnMore="https://www.uh.edu/nsm/news-events/stories/2025/0128-sacnas-award.php"
        />
        <div class="home-container">
          <Row
            title={<h2>What is SACNAS?</h2>}
            paragraph={
              <p>
                SACNAS, or the{" "}
                <b>
                  Society for Advancement of Chicanos/Hispanics and Native
                  Americans in Science
                </b>
                , is an inclusive national organization dedicated to fostering
                the success of diverse scientists, from college students to
                professionals, in attaining research opportunities, advanced
                degrees, careers, and positions of leadership in Science,
                Technology, Engineering, and Math (STEM). SACNAS works to
                support the most underrepresented in STEM. For more information,
                please visit{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sacnas.org"
                >
                  sacnas.org
                </a>
                .
              </p>
            }
            img={SACNASGroup}
            imgborder="y"
          />
          <Row
            title={<h2>Our Mission</h2>}
            paragraph={
              <p>
                The SACNAS chapter at UH celebrates, supports, and encourages{" "}
                <i>true</i> diversity in STEM, with special emphasis on helping
                students find meaningful connections within the UH research
                community, flourish intellectually, and make social connections
                during their time at UH. Please browse our website!
              </p>
            }
            img={outreach_navarro}
            imgborder="y"
          />
          <Row
            title={<h2>Chapter Activities</h2>}
            paragraph={
              <p>
                UH SACNAS engages in 3 different types of activities and events
                that you can participate in throughout the year. We mainly focus
                on cultural events that celebrate the culture and backgrounds of
                our chapter members, professional development events that assist
                our chapter members with career development, and outreach events
                through which our chapter works to increase support of minority
                students in the sciences throughout the greater Houston area
              </p>
            }
            img={houaztec}
            imgborder="y"
          />
          <Row
            title={<h2>Additional Info</h2>}
            paragraph={
              <p>
                At our meetings, we host guest speakers, lead statement and
                poster presentation workshops, assist with lab placements in
                addition to going on lab tours, and host socials to better
                connect with our members. Feel free to reach out to us at{" "}
                <a href="mailto:uh.sacnas@gmail.com">uh.sacnas@gmail.com</a> or
                the Graduate Committee at{" "}
                <a href="mailto:sacnas.graduate@gmail.com">
                  sacnas.graduate@gmail.com
                </a>{" "}
                with any questions or concerns! You can also follow us on
                Instagram{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/uhsacnas/"
                >
                  @uhsacnas
                </a>
                , Facebook at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sacnasuh"
                >
                  University of Houston - SACNAS
                </a>
                , and on Twitter{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/uh_sacnas"
                >
                  @uh_sacnas
                </a>
                . You are also welcome in our growing{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/KKq7Ygc3p4"
                >
                  Discord
                </a>{" "}
                community!
              </p>
            }
            img=""
          />
        </div>
      </div>
    </>
  );
}

export default HomeContent;
