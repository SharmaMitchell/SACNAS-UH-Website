import React from "react";
import "./LeadershipCard.css";
import SACNASLinkedIn from "../../assets/SACNAS-LinkedIn.png";
import SACNASEmail from "../../assets/SACNAS-Email.png";

function LeadershipCard(props) {
  /*
    Props:
        img - officer image
        link - officer linkedin page
        title - officer name & position 
        paragraph - officer 'about me' blurb
        email - email (if applicable, mainly for faculty)
            Note: write email in 'mailto:' format
        width - card width (mainly for smaller cards for faculty without 'about me's)

        className={`dark-toggle${props.theme === 'dark' ? " dark" : ""}`}
  */
  return (
    <div class="leadership-card">
      <div class={`leadership-card-container ${props.width}`}>
        <div class="leadership-card-img-background">
          <div class="leadership-card-img">
            <img class={props.link === "" || props.link === undefined ? "static-pic" : "officer-pic"} src={props.img} />
            <a class={props.link === "" || props.link === undefined ? "no-link" : "card-img-top"} href={props.link}>
              <img class="linkedin-logo" src={SACNASLinkedIn} />
            </a>
          </div>
        </div>
        <div class="leadership-card-bottom">

        
        <div class="leadership-card-text">
          <div class="leadership-card-title"><h3>{props.title}</h3></div>
          <div class="leadership-card-paragraph"><p>{props.paragraph}</p></div>
        </div>
        <div class={props.email === undefined ? "leadership-email-hide" : "leadership-email"}>
            <a href={props.email}>
                <img src={SACNASEmail}/>
            </a>
            <div class="leadership-email-label">
                <a href={props.email}>Email Me</a>
            </div>
        </div>
        </div>
        <div class="leadership-card-red"></div>
      </div>
    </div>
  );
}

export default LeadershipCard;
