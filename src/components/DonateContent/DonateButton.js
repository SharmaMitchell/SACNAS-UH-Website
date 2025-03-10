import React from "react";
import "./DonateButton.css";

/* Buttons on the Donation page with pre-filled dollar values (or "Other", if no values) */
function DonateButton(props) {
  /* Props: 
    amount: amount of donation (if applicable), to pre-fill in URL and label
  */
  let link = "https://paypal.me/UHSACNAS/";
  let label = "Other";
  if (props.amount !== undefined && props.amount !== "") {
    link += props.amount;
    label = "$" + props.amount;
  }

  return (
    <div class="donate-button-container">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        {label}
      </a>
    </div>
  );
}

export default DonateButton;
