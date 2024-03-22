import React from "react";
import "./AwardBanner.css";

function AwardBanner(props) {
  /* 
    Props:
        title: title of row (h2)
        paragraph: row paragraph (p)
        img: row image (img)
        imgborder: border on image ('yes'/'no')
        quoteImg: image for quote pic
        quoteLabel: label for quote pic (e.g. name and role of person)
        learnMore: link for learn more
  */
  return (
    <>
      <div class="award-banner">
        <div class="award-banner-container">
          <div class="award-banner-left">
            <div class="quote-image">
              <img src={props.quoteImg} alt={props.quoteLabel} />
            </div>
            <div class="quote-label">{props.quoteLabel}</div>
          </div>
          <div class="award-banner-text">
            <div class="award-banner-title">{props.title}</div>
            <div class="award-banner-paragraph">
              {props.paragraph}
              <div class="learn-more">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.learnMore}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div
            class={
              !props.imgborder
                ? "award-banner-image"
                : "award-banner-image border"
            }
          >
            <img
              src={props.img}
              alt="SACNAS UH at the NDISTEM 2023 conference"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AwardBanner;
