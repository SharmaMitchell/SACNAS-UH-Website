import React, { useEffect } from "react";
import ResearchContent from "../components/ResearchContent/ResearchContent";

function Research() {
  useEffect(() => {
    document.title =
      "Research - SACNAS UH | Celebrating Scientific Research and Diversity in STEM";
  }, []);

  return (
    <>
      <ResearchContent />
    </>
  );
}

export default Research;
