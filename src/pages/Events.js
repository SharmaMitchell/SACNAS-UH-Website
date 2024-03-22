import React, { useEffect } from "react";
import EventsContent from "../components/EventsContent/EventsContent";

function Events() {
  useEffect(() => {
    document.title =
      "Events - SACNAS UH | Celebrating Scientific Research and Diversity in STEM";
  }, []);

  return (
    <>
      <EventsContent />
    </>
  );
}

export default Events;
