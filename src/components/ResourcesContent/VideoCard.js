import React from "react";
import "./VideoCard.css";

function VideoCard(props) {
  return (
    <div class="video-card">
      <div class="video-card-container">
        <a class="video-card-image" href={props.link}>
          <img src={props.img} alt="Video Thumbnail" />
        </a>
        <a class="video-card-title" href={props.link}>
          <h3>{props.title}</h3>
        </a>
        <div class="video-card-date">
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
