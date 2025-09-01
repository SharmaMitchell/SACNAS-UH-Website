import React, { useState } from "react";
import "./LeadershipCard.css";
import SACNASLinkedIn from "../../assets/SACNAS-LinkedIn.png";
import SACNASEmail from "../../assets/SACNAS-Email.png";
import SACNASDiscord from "../../assets/SACNAS-Discord.png";
import expand from "../../assets/expand.png";
import close from "../../assets/close.png";
import avatar from "../../assets/avatar.png";

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
        articleCard - boolean for whether or not this is an article card
        position - position in the leadership team (for article card)
  */
  const [expandedContact, setExpandedContact] = useState(false);
  const hasContact = props.email || props.discordHandle || props.linkedin;

  return (
    <div class={`leadership-card ${props.articleCard && "article"}`}>
      <div
        class={`leadership-card-container ${props.width === "m" ? "m" : ""} ${
          props.articleCard && "article"
        }`}
      >
        <div class="leadership-card-img-background">
          <div class="leadership-card-img">
            <img
              class="static-pic"
              src={
                props.img && props.img[0] === "/"
                  ? `${process.env.PUBLIC_URL}${props.img}`
                  : props.img
              }
              onError={(e) => {
                e.target.src = avatar;
              }}
              alt={props.title}
            />
          </div>
        </div>
        <div class="leadership-card-bottom">
          <div class="leadership-card-text">
            <div class="leadership-card-title">
              <h3>{props.title}</h3>
              {props.articleCard && props.position && (
                <p class="leadership-card-position">{props.position}</p>
              )}
            </div>
            <div class="leadership-card-paragraph">
              <p>{props.paragraph}</p>
            </div>
            {props.articleCard && hasContact && (
              <div class="leadership-card-contact">
                {props.discordHandle && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      props.discordID
                        ? "https://discord.com/users/" + props.discordID
                        : "#"
                    }
                  >
                    <img src={SACNASDiscord} alt="Discord" />
                  </a>
                )}
                {props.linkedin && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.linkedin}
                  >
                    <img src={SACNASLinkedIn} alt="LinkedIn" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        {!props.articleCard && (
          <div
            class={
              expandedContact
                ? "leadership-card-red expanded"
                : hasContact
                  ? "leadership-card-red"
                  : "leadership-card-red nocontact"
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
                  <img class="leadership-expand" src={expand} alt="Expand" />
                  <div class="leadership-expand-label">Contact</div>
                  <div
                    class="leadership-close-wrapper"
                    onClick={() => {
                      setExpandedContact(false);
                    }}
                  >
                    <img class="leadership-close" src={close} alt="Close" />
                  </div>
                </div>
                <div class="contact-info">
                  {props.email ? (
                    <div class="leadership-social">
                      <a href={"mailto:" + props.email}>
                        <img src={SACNASEmail} alt={`Email ${props.title}`} />
                        {props.email}
                      </a>
                    </div>
                  ) : (
                    <></>
                  )}
                  {props.discordHandle ? (
                    <div class="leadership-social">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={
                          props.discordID
                            ? "https://discord.com/users/" + props.discordID
                            : "#"
                        }
                      >
                        <img src={SACNASDiscord} alt="Discord" />
                        {props.discordHandle}
                      </a>
                    </div>
                  ) : (
                    <></>
                  )}
                  {props.linkedin ? (
                    <div class="leadership-social">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={props.linkedin}
                      >
                        <img src={SACNASLinkedIn} alt="LinkedIn" />
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
        )}
      </div>
    </div>
  );
}

export default LeadershipCard;
