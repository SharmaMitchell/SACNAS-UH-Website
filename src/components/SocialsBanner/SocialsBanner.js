import React from "react";
import "./SocialsBanner.css";

import SACNASInsta from "../../assets/SACNAS-Insta.png";
import SACNASDiscord from "../../assets/SACNAS-Discord.png";
import SACNASFacebook from "../../assets/SACNAS-Facebook.png";
import SACNASTwitter from "../../assets/SACNAS-Twitter.png";
import SACNASLinkedIn from "../../assets/SACNAS-LinkedIn.png";

function SocialsBanner() {
  return (
    <div class="SocialsBanner">
      <div class="socials-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/uhsacnas/"
        >
          <img
            class="social-item"
            src={SACNASInsta}
            alt="SACNAS UH Instagram"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/KKq7Ygc3p4"
        >
          <img
            class="social-item"
            src={SACNASDiscord}
            alt="SACNAS UH Discord"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/University-of-Houston-SACNAS-316313025690469/"
        >
          <img
            class="social-item"
            src={SACNASFacebook}
            alt="SACNAS UH Facebook"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/uh_sacnas"
        >
          <img
            class="social-item"
            src={SACNASTwitter}
            alt="SACNAS UH Twitter"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/82377992"
        >
          <img
            class="social-item"
            src={SACNASLinkedIn}
            alt="SACNAS UH LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}

export default SocialsBanner;
