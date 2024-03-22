import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    if (props.img === "" || props.img === undefined) {
      setImgURL(defaultImg);
    }
  }, [props.img]);

  return (
    <div class="article-card">
      <div class="article-card-container">
        <Link class="article-card-image" to={props.link}>
          <img
            src={imgURL}
            onError={() => {
              setImgURL(defaultImg);
            }}
            alt="Article Thumbnail"
            referrerPolicy="no-referrer"
          />
        </Link>
        <Link class="article-card-title" to={props.link}>
          <h3>{props.title}</h3>
        </Link>
        <div class="article-card-date">
          <p>
            {props.author} | {formattedDate}
          </p>
        </div>
      </div>
      <div class="article-card-view">
        <Link class="article-card-view-button" to={props.link}>
          Read Article
          <img class="article-card-view-arrow" src={expand} alt="view" />
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
