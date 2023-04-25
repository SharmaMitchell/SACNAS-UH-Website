import React, { useState, useEffect } from "react";
import "./ArticleCard.css";
import expand from "../../assets/expand.png";

function ArticleCard(props) {
  const [imgURL, setImgURL] = useState(props.img);
  const defaultImg = "/assets/articles/defaultthumbnail.jpg";

  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    console.log(props.img);
    if (props.img === "" || props.img === undefined) {
      setImgURL(defaultImg);
      console.log("default");
    }
  }, [props.img]);

  return (
    <div class="article-card">
      <div class="article-card-container">
        <a class="article-card-image" href={props.link}>
          <img
            src={imgURL}
            onError={() => {
              setImgURL(defaultImg);
            }}
            alt="Article Thumbnail"
            referrerpolicy="no-referrer"
          />
        </a>
        <a class="article-card-title" href={props.link}>
          <h3>{props.title}</h3>
        </a>
        <div class="article-card-date">
          <p>
            {props.author} | {formattedDate}
          </p>
        </div>
      </div>
      <div class="article-card-view">
        <a class="article-card-view-button" href={props.link}>
          Read Article
          <img class="article-card-view-arrow" src={expand} />
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
