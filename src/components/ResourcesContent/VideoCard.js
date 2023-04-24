import React from "react";
import "./VideoCard.css";
import expand from "../../assets/expand.png";

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
      <div class="video-card-view">
        <a class="video-card-view-button" href={props.link}>
          View on YouTube
          <img class="video-card-view-arrow" src={expand} />
        </a>
      </div>
    </div>
  );
}

export default VideoCard;
