import React, { useEffect } from "react";
import MailListContent from "../components/MailListContent/MailListContent";

function MailList() {
  useEffect(() => {
    document.title =
      "Mail List - SACNAS UH | Celebrating Scientific Research and Diversity in STEM";
  }, []);

  return (
    <>
      <MailListContent />
    </>
  );
}

export default MailList;
