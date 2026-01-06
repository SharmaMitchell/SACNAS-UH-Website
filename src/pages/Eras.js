import React, { useEffect } from "react";
import ErasContent from "../components/ErasContent/ErasContent";

function Eras() {
  useEffect(() => {
    document.title =
      "ERAS - SACNAS UH | Celebrating Scientific Research and Diversity in STEM";
  }, []);
  return (
    <>
      <ErasContent />
    </>
  );
}

export default Eras;
