import React, {useState, useEffect} from "react";
import "./EventsContent.css";
import EventCard from "./EventCard";
import Spinner from "../Spinner/Spinner";

function EventsContent() {
  /* Public Google Sheet ID */
  const SHEET_ID = '19AWlwwjbWWRGz68mzYSHN5-mKiKmKZbHZDuDpZegtmE';
  /* Read-only API key, limited to sacnas-uh.org domain */
  const API_KEY = 'AIzaSyCWFLx8b9hgh5nlwhN_9S6awfghwUBoXLo';
  
  const [upcoming, setUpcoming] = useState([]);
  const [uLoading, setULoading] = useState(true);

  useEffect(() => {fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Upcoming!A2:G18?key=${API_KEY}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      /*console.log(data.values);*/
      let eventData = data.values;
      setUpcoming(data.values);
      setULoading(false);
      return eventData;
    })},[]);

  const [previous, setPrevious] = useState([]);
  const [pLoading, setPLoading] = useState(true);

  useEffect(() => {fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Archive!A2:G18?key=${API_KEY}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      /*console.log(data.values);*/
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
            
            {uLoading ? <Spinner /> : upcoming.map((event) => {
              return(<EventCard title={event[0]} description={event[1]} img={event[5]}/>)
            })}
            
          </div>
        </div>
        <div class="events-previous">
          <h2>Previous Events</h2>
          <div class="event-list">
            {pLoading ? <Spinner /> : previous.map((event) => {
              return(<EventCard title={event[0]} description={event[1]} img={event[5]}/>)
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsContent;
