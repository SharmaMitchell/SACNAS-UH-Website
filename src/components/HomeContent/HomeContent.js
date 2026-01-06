import React from "react";
import Row from "./Row";
import AwardBanner from "./AwardBanner";
import "./HomeContent.css";
import leadership_award from "../../assets/leadership_award.webp";
import lorissa from "../../assets/lorissa-crop.jpg";
import whatIsSacnas from "../../assets/what-is-sacnas.webp";
import ourMission from "../../assets/our-mission.webp";
import chapterActivities from "../../assets/chapter-activities.webp";

function HomeContent() {
  return (
    <>
      <div class="home">
        <AwardBanner
          title={
            <h2>
              SACNAS UH: <br /> 2025 Outstanding Chapter for Leadership in
              Science
            </h2>
          }
          paragraph={
            <p>
              "2025 is the fourth year in a row that UH SACNAS has been
              recognized with a chapter award, and the second year that we have
              been recognized as a Chapter of the Year. This is a testament to
              the chapter’s leadership and consistent commitment to excellence.
              I could not be more proud of the leaders and members of this
              chapter. We are leading SACNAS forward from right here at home in
              Houston, Texas!"
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
          learnMore="https://www.uh.edu/nsm/news-events/stories/2025/1113-sacnas-recognition.php"
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
            img={whatIsSacnas}
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
            img={ourMission}
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
            img={chapterActivities}
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
