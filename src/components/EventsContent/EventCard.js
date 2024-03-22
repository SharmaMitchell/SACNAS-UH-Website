import React, { useCallback, useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import "./EventCard.css";
import expand from "../../assets/expand.png";
import zoom from "../../assets/zoom.png";
import maps from "../../assets/maps.png";
import calendar from "../../assets/calendar.png";
import linkImg from "../../assets/link.png";
import defaultEventImg from "../../assets/DefaultEvent.png";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";

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

  const [viewMore, setViewMore] =
    useState(false); /* State for card expansion */
  const toggleViewMore = () =>
    setViewMore(!viewMore); /* Function to toggle card expansion */

  /* Image zoom state */
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasZoomed, setHasZoomed] = useState(false);
  const handleZoomChange = useCallback(
    (shouldZoom) => {
      setIsZoomed(shouldZoom);
      if (!hasZoomed) {
        setHasZoomed(true);
      }
    },
    [hasZoomed]
  );
  const handleZoomOut = () => {
    if (isZoomed) {
      handleZoomChange();
    }
  };

  /* Handle img loading, errors */
  const [imgError, setImgError] = useState(false);
  const [rawImgError, setRawImgError] = useState(false);
  const handleImgError = () => {
    isZoomed ? setRawImgError(true) : setImgError(true);
  };

  /* Setting Links and link labels, if they're passed in */
  let link1Tag = ``;
  let link2Tag = ``;
  if (props.link1 !== undefined && props.link1 !== "") {
    link1Tag = (
      <a target="_blank" rel="noopener noreferrer" href={props.link1}>
        {props.link1Label || "Event Link"}
      </a>
    );
  }
  if (props.link2 !== undefined && props.link2 !== "") {
    link2Tag = (
      <a target="_blank" rel="noopener noreferrer" href={props.link2}>
        {props.link2Label || "Event Link 2"}
      </a>
    );
  }

  // let rawImgURL = "";
  // if (props.img) {
  //   if (props.img.indexOf("i.imgur.com") != -1) {
  //     rawImgURL =
  //       props.img.slice(0, props.img.lastIndexOf("l")) +
  //       props.img.slice(props.img.lastIndexOf("l") + 1);
  //   }
  //   else {
  //     rawImgURL = props.img;
  //   }
  // }

  let formattedCalDates = props.date;
  if (props.date) {
    let calendarDateNum = Date.parse(props.date);
    let calendarDateISO = new Date(calendarDateNum);
    let day = calendarDateISO.getDate().toString();
    let month = (calendarDateISO.getMonth() + 1).toString();
    if (month.length < 2) {
      month = "0" + month;
    }
    let year = calendarDateISO.getFullYear().toString();
    let calendarDate = year + month + day;

    let calendarStartTime =
      props.time
        .replace(":", "")
        .replace(/(AM|PM)/, "")
        .replace(" ", "") + "00";
    if (calendarStartTime.length < 6) {
      calendarStartTime = "0" + calendarStartTime;
    }
    if (props.time.indexOf("PM") !== -1) {
      calendarStartTime = (Number(calendarStartTime) + 120000).toString();
    }
    let calendarEndTime = (Number(calendarStartTime) + 20000).toString(); // End time 2 hours after

    formattedCalDates =
      calendarDate +
      "T" +
      calendarStartTime +
      "/" +
      calendarDate +
      "T" +
      calendarEndTime;
  }

  return (
    <div class="event-card">
      {/* <Link to="#" class="event-card-link-wrapper"> */}
      <div class="event-card-container">
        <div class="event-img">
          <div class="event-img-overlay">
            <div class="overlay-row">
              {/* <a target="_blank" rel="noopener" href={rawImgURL}><img src={zoom}/></a> */}
              <a onClick={handleZoomChange}>
                <img src={zoom} alt="zoom" />
              </a>
              {link1Tag !== "" ? (
                <a target="_blank" rel="noopener noreferrer" href={props.link1}>
                  <img src={linkImg} alt={props.link1Label || "Event Link"} />
                </a>
              ) : (
                <></>
              )}
            </div>
            <div class="overlay-row">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${props.title}&dates=${formattedCalDates}&details=${props.description}&location=${props.location}&sf=true&output=xml`}
              >
                <img src={calendar} alt="Add to Google Calendar" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${props.location}`}
              >
                <img src={maps} alt="Directions via Google Maps" />
              </a>
            </div>
          </div>
          <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomOut}>
            <img
              onError={handleImgError}
              class="poster"
              src={imgError || rawImgError ? defaultEventImg : props.img}
              alt={`Event: ${props.title}`}
            />
          </ControlledZoom>
          {/* {imgError ? <Spinner /> : <></>} */}
        </div>
        <a onClick={toggleViewMore} class="event-card-link-wrapper">
          <div class={viewMore ? "event-text full" : "event-text"}>
            <h3>{props.title}</h3>
            <p class="event-description">{props.description}</p>
            <div class="event-more-info">
              <div class="event-location">
                {props.location ? (
                  <p>
                    <b>Location:</b> {props.location}
                  </p>
                ) : (
                  <></>
                )}
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
              <img
                class={
                  viewMore
                    ? "event-view-more-expand active"
                    : "event-view-more-expand"
                }
                alt={`View ${viewMore ? "Less" : "More"}`}
                src={expand}
              />
            </a>
          </div>
        </a>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default EventCard;
