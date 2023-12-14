import React from "react";
import "./DonateContent.css";
import SACNASGroup from "../../assets/SACNAS-Group.jpg";
import DonateButton from "./DonateButton";
import paypalButton from "../../assets/paypal-donate-button-black-crop.png";
import ChevronLogo from "../../assets/Chevron-logo.png";
import AltairLogo from "../../assets/Altair-logo.png";

function DonateContent() {
  return (
    <div class="donate-wrapper">
      <div class="donate-container">
        <div class="donate-text">
          <div class="donate-title">
            <h2>Donation</h2>
          </div>
          <div class="donate-paragraph">
            <p>
              Thank you for choosing to donate to SACNAS UH. By supporting us,
              you enable us to host cultural and educational events, facilitate
              community outreach, and help foster an environment to promote
              equity of opportunity in STEM.{" "}
            </p>
            <p>
              Previous donations have been put towards impactful activities
              including Asia Fest, a celebration of Asian American and Pacific
              Islander heritage month, community field trips around houston
              including Brazos Bend State Park and the Houston Museum of Natural
              Science, and more.
            </p>
            <p>
              With the help of our generous donors, we hope to host bigger and
              better events moving forward, to share the diverse cultures of our
              community.{" "}
            </p>
          </div>
        </div>
        <div class="donate-image border">
          <img src={SACNASGroup} />
          <div class="donate-thanks">
            <h3>Thank You From SACNAS UH!</h3>
          </div>
        </div>
      </div>
      <div class="donate-button-container paypal">
        <a target="_blank" rel="noopener" href="https://paypal.me/SACNASUH/">
          <img src={paypalButton} />
        </a>
        ˚
      </div>
      <div class="donate-button-list">
        <DonateButton amount="25" />
        <DonateButton amount="50" />
        <DonateButton amount="100" />
        <DonateButton amount="250" />
        <DonateButton amount="500" />
        <DonateButton amount="" />
      </div>
      <div class="donate-container">
        <div class="donate-text">
          <div class="donate-title">
            <h2>Sponsorship</h2>
          </div>
          <div class="donate-paragraph">
            <p>
              If you are interested in partnering with SACNAS UH and supporting
              our mission to promote equity of opportunity in STEM, we would
              love to hear from you. By becoming a sponsor, you will not only
              have the opportunity to impact the lives of our members, but also
              to connect with a vibrant community of individuals and
              organizations committed to diversity and inclusion in STEM. Please
              contact us to learn more about partnership opportunities and the
              impact your sponsorship can make. We look forward to hearing from
              you.
            </p>
          </div>
        </div>
      </div>
      <div class="donate-container">
        <div class="donate-text">
          <div class="donate-title">
            <h2>Sponsors and Partners</h2>
          </div>
          <div class="donate-paragraph">
            <p>
              We would like to extend a heartfelt thank you to our generous
              sponsors and partners. Your support enables us to host cultural
              and educational events, facilitate community outreach, and promote
              equity of opportunity in STEM. Previous sponsorships and
              partnerships have allowed us to organize impactful activities like
              Asia Fest, community field trips, career workshops, and more. With
              your continued support, we look forward to hosting even bigger and
              better events, and sharing the diverse cultures of our community
              with the world.
            </p>
          </div>
        </div>
      </div>
      <div class="sponsors-container">
        <img src={ChevronLogo} />
        <img src={AltairLogo} />
      </div>
    </div>
  );
}

export default DonateContent;
