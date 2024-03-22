import React from "react";
import "./VideoCard.css";
import expand from "../../assets/expand.png";

function VideoCard(props) {
  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div class="video-card">
      <div class="video-card-container">
        <a
          class="video-card-image"
          target="_blank"
          rel="noopener"
          href={props.link}
        >
          <img src={props.img} alt="Video Thumbnail" />
        </a>
        <a
          class="video-card-title"
          target="_blank"
          rel="noopener"
          href={props.link}
        >
          <h3>{props.title}</h3>
        </a>
        <div class="video-card-date">
          <p>{formattedDate}</p>
        </div>
      </div>
      <div class="video-card-view">
        <a
          class="video-card-view-button"
          target="_blank"
          rel="noopener"
          href={props.link}
        >
          View on YouTube
          <img class="video-card-view-arrow" src={expand} />
        </a>
      </div>
    </div>
  );
}

export default VideoCard;
