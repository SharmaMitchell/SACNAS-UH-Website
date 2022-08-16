import React from "react";
import "./EventsContent.css";
import EventCard from "./EventCard";
import EventExampleImage from "../../assets/friendsgiving.png";

function EventsContent() {
  return (
    <div class="events">
      <div class="events-container">
        <div class="events-upcoming">
          <h2>Upcoming Events</h2>
          <div class="event-list">
            <EventCard
              title="SACNAS Friendsgiving"
              description="SACNAS students are encouraged to bring food and games to Memorial park to celebrate a great semester and the growth of our chapter.
  "
              img={EventExampleImage}
            />
            <EventCard
              title="SACNAS Friendsgiving"
              description="SACNAS students are encouraged to bring food and games to Memorial park to celebrate a great semester and the growth of our chapter.
  "
              img={EventExampleImage}
            />
            <EventCard
              title="SACNAS Friendsgiving"
              description="SACNAS students are encouraged to bring food and games to Memorial park to celebrate a great semester and the growth of our chapter.
  "
              img={EventExampleImage}
            />
            <EventCard
              title="SACNAS Friendsgiving"
              description="SACNAS students are encouraged to bring food and games to Memorial park to celebrate a great semester and the growth of our chapter.
  "
              img={EventExampleImage}
            />
          </div>
        </div>
        <div class="events-previous">
          <h2>Previous Events</h2>
          <div class="event-list">
            <EventCard
              title="SACNAS Friendsgiving"
              description="SACNAS students are encouraged to bring food and games to Memorial park to celebrate a great semester and the growth of our chapter.
  "
              img={EventExampleImage}
            />
            <EventCard
              title="SACNAS Friendsgiving"
              description="SACNAS students are encouraged to bring food and games to Memorial park to celebrate a great semester and the growth of our chapter.
  "
              img={EventExampleImage}
            />
            <EventCard
              title="SACNAS Friendsgiving"
              description="SACNAS students are encouraged to bring food and games to Memorial park to celebrate a great semester and the growth of our chapter.
  "
              img={EventExampleImage}
            />
            <EventCard
              title="SACNAS Friendsgiving"
              description="SACNAS students are encouraged to bring food and games to Memorial park to celebrate a great semester and the growth of our chapter.
  "
              img={EventExampleImage}
            />
            <EventCard
              title="SACNAS Friendsgiving"
              description="SACNAS students are encouraged to bring food and games to Memorial park to celebrate a great semester and the growth of our chapter.
  "
              img={EventExampleImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsContent;
