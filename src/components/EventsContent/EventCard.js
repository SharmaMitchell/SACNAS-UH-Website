import React from 'react'
import './EventCard.css'

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
  console.log(props);
  let link1Tag = ``;
  let link2Tag = ``;
  if (props.link1 != undefined && props.link1 != ""){
  link1Tag = (<a href={props.link1}>{props.link1Label}</a>);
 }
 if (props.link2 != undefined && props.link2 != ""){
  link2Tag = (<a href={props.link2}>{props.link2Label}</a>);
 }

 let moreEventInfo = `<div class="event-datetime">
 {props.time ? <p>{props.time}</p> : <></>}
 {/* {props.time && props.date ? <p>, </p> : <></>} */}
 {props.date ? <p>{props.date}</p> : <></>}
</div>
<div class="event-location">
 {props.location ? <p>{props.location}</p> : <></>}
</div>
<div class="event-links">
 {link1Tag}
 {link2Tag}
</div>`;

  return (
    <div class="event-card">
      <div class="event-card-container">
        <div class="event-img">
          <img src={props.img} />
        </div>
        <div class="event-text">
          <h3>{props.title}</h3>
          <p class="event-description">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard