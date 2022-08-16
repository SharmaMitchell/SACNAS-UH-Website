import React from 'react'
import './EventCard.css'

function EventCard(props) {
  /* Props:
      title - event title
      description - event description
      img - event image
  */
  return (
    <div class="event-card">
      <div class="event-card-container">
        <div class="event-img">
          <img src={props.img} />
        </div>
        <div class="event-text">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard