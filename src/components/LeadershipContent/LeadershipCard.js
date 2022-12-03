import React, { useState } from "react";
import "./LeadershipCard.css";
import SACNASLinkedIn from "../../assets/SACNAS-LinkedIn.png";
import SACNASEmail from "../../assets/SACNAS-Email.png";
import SACNASDiscord from "../../assets/SACNAS-Discord.png";
import expand from '../../assets/expand.png'
import close from '../../assets/close.png'

function LeadershipCard(props) {
  /*
    Props:
        img - officer image
        title - officer name & position 
        paragraph - officer 'about me' blurb
        email - email (if applicable, mainly for faculty)
        discordHandle - Discord username with hashtag, for manual entry/search in discord
        discordID - Discord ID for clickable link to profile
        linkedin - LinkedIn page URL
        width - card width (mainly for smaller cards for faculty without 'about me's)

        className={`dark-toggle${props.theme === 'dark' ? " dark" : ""}`}
  */
  const [expandedContact, setExpandedContact] = useState(false);
  const hasContact = (props.email || props.discordHandle || props.linkedin)

  return (
    <div class="leadership-card">
      <div class={`leadership-card-container ${props.width}`}>
        <div class="leadership-card-img-background">
          <div class="leadership-card-img">
            <img
              class="static-pic"
              src={
                props.img[0] == "/"
                  ? `${process.env.PUBLIC_URL}${props.img}`
                  : props.img
              }
            />
          </div>
        </div>
        <div class="leadership-card-bottom">
          <div class="leadership-card-text">
            <div class="leadership-card-title">
              <h3>{props.title}</h3>
            </div>
            <div class="leadership-card-paragraph">
              <p>{props.paragraph}</p>
            </div>
          </div>
        </div>
        <div
          class={
            expandedContact
              ? "leadership-card-red expanded"
              : (hasContact ? "leadership-card-red" : "leadership-card-red nocontact")
          }
          onClick={() => {
            if (!expandedContact) {
              setExpandedContact(true);
            }
          }}
        >
          {hasContact ? (
            <div class="leadership-contact">
              <div class="contact-icons">
                <img class="leadership-expand" src={expand} />
                <div class="leadership-expand-label">Contact</div>
                <div
                  class="leadership-close-wrapper"
                  onClick={() => {
                    setExpandedContact(false);
                  }}
                >
                  <img class="leadership-close" src={close} />
                </div>
              </div>
              <div class="contact-info">
                {props.email ? (
                  <div class="leadership-social">
                    <a href={"mailto:" + props.email}>
                      <img src={SACNASEmail} />
                      {props.email}
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                {props.discordHandle ? (
                  <div class="leadership-social">
                    <a
                      href={
                        props.discordID
                          ? "https://discord.com/users/" + props.discordID
                          : "#"
                      }
                    >
                      <img src={SACNASDiscord} />
                      {props.discordHandle}
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                {props.linkedin ? (
                  <div class="leadership-social">
                    <a href={props.linkedin}>
                      <img src={SACNASLinkedIn} />
                      LinkedIn
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeadershipCard;
