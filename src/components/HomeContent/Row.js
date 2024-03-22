import React from "react";
import "./Row.css";

function Row(props) {
  /* 
    Props:
        title: title of row (h2)
        paragraph: row paragraph (p)
        img: row image (img)
        imgborder: border on image ('yes'/'no')
  */
  return (
    <div class="row">
      <div class="row-text">
        <div class="row-title">{props.title}</div>
        <div class="row-paragraph">{props.paragraph}</div>
      </div>
      <div class={!props.imgborder ? "row-image" : "row-image border"}>
        <img src={props.img} />
      </div>
    </div>
  );
}

export default Row;
