import React from "react";
import "./LeadershipContent.css";
import LeadershipCard from "./LeadershipCard";
import lorissa from "../../assets/lorissa.jpg";
import alejandro from "../../assets/alejandro.jpg";
import mitch from "../../assets/mitch.jpg";
import sara from "../../assets/sara.jpg";
import ricardo from "../../assets/ricardo.jpg";

function LeadershipContent() {
  return (
    <>
      <div class="leadership">
        <div class="leadership-container">
          <div class="leadership-section-title"><h2>Faculty Advisors</h2></div>
          <div class="leadership-faculty">
            <LeadershipCard
                img={ricardo}
                link=""
                title={<h3>Ricardo Azevedo, PhD</h3>}
                paragraph={
                    <>
                        <p>Professor</p>
                        <p>Department of Biology & Biochemistry</p>
                    </>
                }
                width="m"
                email="mailto:UH.sacnas@gmail.com"
            />
            <LeadershipCard
                img={ricardo}
                link=""
                title={<h3>Ricardo Azevedo, PhD</h3>}
                paragraph={
                    <>
                        <p>Professor</p>
                        <p>Department of Biology & Biochemistry</p>
                    </>
                }
                width="m"
                email="mailto:UH.sacnas@gmail.com"
            />
            <LeadershipCard
                img={ricardo}
                link=""
                title={<h3>Ricardo Azevedo, PhD</h3>}
                paragraph={
                    <>
                        <p>Professor</p>
                        <p>Department of Biology & Biochemistry</p>
                    </>
                }
                width="m"
                email="mailto:UH.sacnas@gmail.com"
            />
          </div>
          <div class="leadership-section-title"><h2>Officers</h2></div>
          <div class="leadership-officers">
            <LeadershipCard
              img={lorissa}
              link="http://google.com"
              title={<h3>Lorissa Saiz: President</h3>}
              paragraph={
                <p>
                  Lorissa is a third year graduate student in the department of
                  Biology and Biochemistry, and is a part of the Cell and
                  Molecular Biology program. She is an evolutionary geneticist
                  in Dr. Erin Kelleher’s lab interested in uncovering causative
                  genotypes that result in transposable element tolerance.
                  Lorissa is one of the founding members of the UH SACNAS
                  chapter and is dedicated to increasing minority representation
                  in STEM and giving women a voice in science. She also aims to
                  improve science communication between academics and the public
                  through the chapter.
                </p>
              }
            />
            <LeadershipCard
              img={alejandro}
              link="http://google.com"
              title={<h3>Alejandro Ramirez: Vice President</h3>}
              paragraph={
                <p>
                  Alejandro is a fourth year graduate student working towards a
                  PhD in experimental astroparticle physics. Working under Dr.
                  Andrew Renshaw, his research involves developing and surveying
                  particle detector technologies for DarkSide 20k, a dark matter
                  experiment searching for Weakly Interacting Massive Particles.
                  Alejandro is a co-founder of the SACNAS UH chapter and aims to
                  help students of all backgrounds find a fulfilling research
                  experience.
                </p>
              }
            />
            <LeadershipCard
              img={lorissa}
              link="http://google.com"
              title={<h3>Lorissa Saiz: President</h3>}
              paragraph={
                <p>
                  Lorissa is a third year graduate student in the department of
                  Biology and Biochemistry, and is a part of the Cell and
                  Molecular Biology program. She is an evolutionary geneticist
                  in Dr. Erin Kelleher’s lab interested in uncovering causative
                  genotypes that result in transposable element tolerance.
                  Lorissa is one of the founding members of the UH SACNAS
                  chapter and is dedicated to increasing minority representation
                  in STEM and giving women a voice in science. She also aims to
                  improve science communication between academics and the public
                  through the chapter.
                </p>
              }
            />
            <LeadershipCard
              img={alejandro}
              link="http://google.com"
              title={<h3>Alejandro Ramirez: Vice President</h3>}
              paragraph={
                <p>
                  Alejandro is a fourth year graduate student working towards a
                  PhD in experimental astroparticle physics. Working under Dr.
                  Andrew Renshaw, his research involves developing and surveying
                  particle detector technologies for DarkSide 20k, a dark matter
                  experiment searching for Weakly Interacting Massive Particles.
                  Alejandro is a co-founder of the SACNAS UH chapter and aims to
                  help students of all backgrounds find a fulfilling research
                  experience.
                </p>
              }
            />
          </div>
          <div class="leadership-section-title"><h2>Support Officers</h2></div>
          <div class="leadership-officers">
            <LeadershipCard
              img={mitch}
              link="http://google.com"
              title={<h3>Mitchell Sharma: Undergraduate Support Officer</h3>}
              paragraph={
                <p>
                  Mitchell Sharma is a Junior majoring in Computer Science and
                  minoring in mathematics. Mitchell is interested in a broad
                  variety of computer science specializations, ranging from data
                  science to web development. In addition to programming, he has
                  a passion for education - working as a tutor for ESL and
                  Japanese (his second language), and developing
                  education-related programming projects in his spare time.
                  Through his time spent as an ESL tutor, he learned of the
                  adversities immigrants and minorities face as they try to
                  establish themselves in the US: an often unforgiving and
                  unequitable environment for foreigners. He hopes to contribute
                  to SACNAS by bringing more computer science students into the
                  organization, deploying events to further increase interaction
                  and outreach, and helping underrepresented communities succeed
                  in tech, and the greater STEM field.
                </p>
              }
            />
            <LeadershipCard
              img={sara}
              link="http://google.com"
              title={<h3>Sara Rashid: Undergraduate Support Officer</h3>}
              paragraph={
                <p>
                  Sara is a senior majoring in Biochemistry with a Spanish
                  Language minor at the University of Houston, who is currently
                  hoping to pursue a PhD in Biochemistry. Her interests include
                  molecular medicine and drug discovery, and has always carried
                  a passion for medical advocacy, particularly for women of
                  color. Initially drawn to SACNAS for its active community and
                  professional resources, Sara now seeks to aid others of
                  minority backgrounds in their own pursuits in science.
                  Additionally, she wishes to assist in spreading the
                  organization’s messages of the importance of diversity and
                  inclusivity in STEM.
                </p>
              }
            />
            <LeadershipCard
              img={sara}
              link="http://google.com"
              title={<h3>Sara Rashid: Undergraduate Support Officer</h3>}
              paragraph={
                <p>
                  Sara is a senior majoring in Biochemistry with a Spanish
                  Language minor at the University of Houston, who is currently
                  hoping to pursue a PhD in Biochemistry. Her interests include
                  molecular medicine and drug discovery, and has always carried
                  a passion for medical advocacy, particularly for women of
                  color. Initially drawn to SACNAS for its active community and
                  professional resources, Sara now seeks to aid others of
                  minority backgrounds in their own pursuits in science.
                  Additionally, she wishes to assist in spreading the
                  organization’s messages of the importance of diversity and
                  inclusivity in STEM.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadershipContent;
