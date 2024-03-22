import React from "react";
import "./Spinner.css";

/* Loading animation (used for events page) */
function Spinner() {
  return (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
