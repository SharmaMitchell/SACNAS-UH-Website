import React from "react";
import "./ResearchContent.css";
import SACNASEmail from "../../assets/SACNAS-Email.png";

function ResearchContent() {
  return (
    <>
      <div class="research">
        <div class="research-container">
          <div class="research-title">
            <h1>Research</h1>
          </div>
          <div class="research-text">
            <h2>NSM Undergraduate Research Portal</h2>
            <p>
              NSM offers a variety of research opportunities, both at UH and
              surrounding Houston areas like the Texas Medical Center. Research
              opportunities are diverse, from computer programming to marine
              science at the Galapagos! Find out more, including helpful tips on
              how to start searching for a research opportunity{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://uh.edu/nsm/students/undergraduate/research/index"
              >
                here
              </a>
              .
            </p>
            <h2>Undergraduate Research Opportunities at UH</h2>
            <p>
              This is a{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://uh.edu/honors/undergraduate-research/research-resources/research-positions-uh/"
              >
                list
              </a>{" "}
              of many faculty at UH who have previously sought undergraduates to
              partcipate in their ongoing research, and/or faculty who may
              currently be looking for students. You can also peruse the Office
              of Undergraduate Research and Major Awards website for more
              information/other opportunities, such as research fellowships{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://uh.edu/honors/undergraduate-research/"
              >
                here
              </a>{" "}
              or helpful webinars <i>Getting started in research!</i>
            </p>
            <h2>STEM Scholarship Program</h2>
            <p>
              This program consists of a few different components, such as
              mentorship and professional development, including research
              placement. Application deadline is April 30, 2021. More info{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://uh.edu/nsm/students/scholarships/stem-scholarship-program/"
              >
                here
              </a>
              .
            </p>
          </div>
          <div class="research-advice">
            <div class="email-icon">
              <a href="mailto:UH.sacnas@gmail.com">
                <img src={SACNASEmail} alt="Email SACNAS UH" />
              </a>
            </div>
            <div class="email-blurb">
              <p>
                Not sure where to start? Need a little direction? That’s why we
                are here. Please reach out to us at{" "}
                <a href="mailto:uh.sacnas@gmail.com">uh.sacnas@gmail.com</a>{" "}
                and/or on any social media platform!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResearchContent;
