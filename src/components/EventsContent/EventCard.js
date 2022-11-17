import React, { useState } from 'react'
import { Link }from 'react-router-dom'
import './EventCard.css'
import expand from '../../assets/expand.png'

function EventCard(props) {
  /* Props:
      title - event title
      description - event description
      location - event location
      date - event date
      time - time of event
      img - event image
      link1Label - label for link 1 (optional)
      link1 - link 1 (event-related URL, ex. sign-up form, RSVP)
      link2Label - label for linl 2
      link2 - link 2
  */
  // console.log(props);

  const [viewMore, setViewMore] = useState(false); /* State for card expansion */
  const toggleViewMore = () => setViewMore(!viewMore); /* Function to toggle card expansion */

  /* Setting Links and link labels, if they're passed in */
  let link1Tag = ``;
  let link2Tag = ``;
  if (props.link1 != undefined && props.link1 != ""){
  link1Tag = (<a href={props.link1}>{props.link1Label}</a>);
 }
 if (props.link2 != undefined && props.link2 != ""){
  link2Tag = (<a href={props.link2}>{props.link2Label}</a>);
 }

  return (
    <div class="event-card">
      <Link to="#" class="event-card-link-wrapper">
        <div class="event-card-container" onClick={toggleViewMore}>
          <div class="event-img">
            <img src={props.img} />
          </div>
          <div class={viewMore ? "event-text full" : "event-text"}>
            <h3>{props.title}</h3>
            <p class="event-description">{props.description}</p>
            <div class="event-more-info">
              <div class="event-location">
                {props.location ? <p><b>Location:</b> {props.location}</p> : <></>}
              </div>
              <div class="event-datetime">
                {props.time ? <p>{props.time}</p> : <></>}
                {/* {props.time && props.date ? <p>, </p> : <></>} */}
                {props.date ? <p>{props.date}</p> : <></>}
              </div>
              <div class="event-links">
                {link1Tag}
                {link2Tag}
              </div>
            </div>
          </div>
          <div class="event-view-more-bg">
            <a class="event-view-more-button">
              View {viewMore ? "Less" : "More"}
              <img class={viewMore ? "event-view-more-expand active" : "event-view-more-expand"} src={expand} />
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventCard