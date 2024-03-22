import React, { useEffect } from "react";
import DonateContent from "../components/DonateContent/DonateContent";

function Donate() {
  useEffect(() => {
    document.title =
      "Donate - SACNAS UH | Celebrating Scientific Research and Diversity in STEM";
  }, []);

  return (
    <>
      <DonateContent />
    </>
  );
}

export default Donate;
