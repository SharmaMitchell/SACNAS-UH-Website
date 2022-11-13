import React from "react";
import { Link } from 'react-router-dom';
import "./MailAndMoney.css";

import SACNASEmail from "../../assets/SACNAS-Email.png";
import SACNASMailList from "../../assets/SACNAS-Mail-List.png";
import SACNASDonate from "../../assets/SACNAS-Donate-Alt.png";

function MailAndMoney(props) {
  const location = props.location;
  return (
    <div class="mnm">
      <div class="mnm-container">
        <div class={location === "/contact" ? "mnm-wrapper email cu-page" : "mnm-wrapper email"}>
          <a href="mailto:UH.sacnas@gmail.com">
            <img class="mnm-item email" src={SACNASEmail} />
          </a>
          <div class="mnm-label">
            <a href="mailto:UH.sacnas@gmail.com">Email Us</a>
          </div>
        </div>
        <div class={location === "/maillist" ? "mnm-wrapper list cu-page" : "mnm-wrapper list"}>
          <a href="https://docs.google.com/forms/d/1-SeoYFAoiSlfEbw1fAaSH6szb5Ss_eFMAFqCEnePXIc/viewform">
            <img class="mnm-item list" src={SACNASMailList} />
          </a>
          <div class="mnm-label">
            <a href="https://docs.google.com/forms/d/1-SeoYFAoiSlfEbw1fAaSH6szb5Ss_eFMAFqCEnePXIc/viewform">Mail List</a>
          </div>
        </div>
        <div class={location === "/donate" ? "mnm-wrapper donate cu-page" : "mnm-wrapper donate"}>
          <Link to="/donate">
            <img class="mnm-item donate" src={SACNASDonate} />
          </Link>
          <div class="mnm-label">
            <Link to="/donate">Donate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailAndMoney;
