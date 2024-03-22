import React, { useEffect } from "react";
import LeadershipContent from "../components/LeadershipContent/LeadershipContent";

function Leadership() {
  useEffect(() => {
    document.title =
      "Leadership - SACNAS UH | Celebrating Scientific Research and Diversity in STEM";
  }, []);

  return (
    <>
      <LeadershipContent />
    </>
  );
}

export default Leadership;
