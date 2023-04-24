import React, {useState, useEffect} from "react";
import "./EventsContent.css";
import EventCard from "./EventCard";
import Spinner from "../Spinner/Spinner";

function EventsContent() {
  /* Public Google Sheet ID */
  const SHEET_ID = '19AWlwwjbWWRGz68mzYSHN5-mKiKmKZbHZDuDpZegtmE';
  /* Read-only API key, limited to sacnas-uh.org domain */
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  
  const [upcoming, setUpcoming] = useState([]); /* Upcoming events data */
  const [uLoading, setULoading] = useState(true); /* Upcoming events loading state */

  /* Upcoming events API call to retreive data from Google Sheets */
  useEffect(() => {fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Upcoming!A2:J18?key=${API_KEY}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      // console.log(data.values);
      let eventData = data.values;
      setUpcoming(data.values);
      setULoading(false);
      return eventData;
    })},[]);

  const [previous, setPrevious] = useState([]); /* Previous events data */
  const [pLoading, setPLoading] = useState(true); /* Previous events loading state */
  
  /* Previous events API call to retreive data from Google Sheets */
  useEffect(() => {fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Archive!A2:J18?key=${API_KEY}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      // console.log(data.values);
      let eventData = data.values;
      setPrevious(data.values);
      setPLoading(false);
      return eventData;
    })},[]);

  return (
    <div class="events">
      <div class="events-container">
        <div class="events-upcoming">
          <h2>Upcoming Events</h2>
          <div class="event-list">
            
            {uLoading ? <Spinner /> : upcoming?.map((event) => { /* If events are loading, return spinner (loading animation) */
              return( /* Once events have loaded, return 'upcoming' (event data) mapped to the EventCard component */
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
                />)
            })}
            
          </div>
        </div>
        <div class="events-previous">
          <h2>Previous Events</h2>
          <div class="event-list">
            {pLoading ? <Spinner /> : previous?.map((event) => { /* If events are loading, return spinner (loading animation) */
              return( /* Once events have loaded, return 'previous' (event data) mapped to the EventCard component */
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
              />)
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsContent;
