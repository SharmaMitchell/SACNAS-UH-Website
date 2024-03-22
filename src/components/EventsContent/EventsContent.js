import React from "react";
import "./EventsContent.css";
import EventCard from "./EventCard";
import Spinner from "../Spinner/Spinner";
import { useEventsData } from "../../hooks/useEventsData";

function EventsContent() {
  const { upcoming, previous, uLoading, pLoading } = useEventsData();

  return (
    <div class="events">
      <div class="events-container">
        <div class="events-upcoming">
          <h2>Upcoming Events</h2>
          <div class="event-list">
            {uLoading ? (
              <Spinner />
            ) : (
              upcoming?.map((event) => {
                /* If events are loading, return spinner (loading animation) */
                return (
                  /* Once events have loaded, return 'upcoming' (event data) mapped to the EventCard component */
                  <EventCard
                    title={event[0]}
                    description={event[1]}
                    location={event[2]}
                    date={event[3]}
                    time={event[4]}
                    img={event[5]}
                    link1Label={event[6]}
                    link1={event[7]}
                    link2Label={event[8]}
                    link2={event[9]}
                  />
                );
              })
            )}
          </div>
        </div>
        <div class="events-previous">
          <h2>Previous Events</h2>
          <div class="event-list">
            {pLoading ? (
              <Spinner />
            ) : (
              previous?.map((event) => {
                /* If events are loading, return spinner (loading animation) */
                return (
                  /* Once events have loaded, return 'previous' (event data) mapped to the EventCard component */
                  <EventCard
                    title={event[0]}
                    description={event[1]}
                    location={event[2]}
                    date={event[3]}
                    time={event[4]}
                    img={event[5]}
                    link1Label={event[6]}
                    link1={event[7]}
                    link2Label={event[8]}
                    link2={event[9]}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsContent;
