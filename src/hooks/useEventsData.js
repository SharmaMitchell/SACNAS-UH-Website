import { useState, useEffect } from "react";

export function useEventsData() {
  /* Public Google Sheet ID */
  const SHEET_ID = "19AWlwwjbWWRGz68mzYSHN5-mKiKmKZbHZDuDpZegtmE";
  /* Read-only API key, limited to sacnas-uh.org domain */
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const [upcoming, setUpcoming] = useState([]); /* Upcoming events data */
  const [uLoading, setULoading] =
    useState(true); /* Upcoming events loading state */

  /* Upcoming events API call to retreive data from Google Sheets */
  useEffect(() => {
    const upcomingEventsData = sessionStorage.getItem("upcomingEventsData");
    if (upcomingEventsData) {
      if (upcomingEventsData !== "undefined") {
        setUpcoming(JSON.parse(upcomingEventsData));
      }
      setULoading(false);
    } else {
      fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Upcoming!A2:J19?key=${API_KEY}`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let eventData = data.values;
          setUpcoming(data.values);
          setULoading(false);
          sessionStorage.setItem(
            "upcomingEventsData",
            JSON.stringify(eventData)
          );
          return eventData;
        });
    }
  }, []);

  const [previous, setPrevious] = useState([]); /* Previous events data */
  const [pLoading, setPLoading] =
    useState(true); /* Previous events loading state */

  /* Previous events API call to retreive data from Google Sheets */
  useEffect(() => {
    const previousEventsData = sessionStorage.getItem("previousEventsData");
    if (previousEventsData) {
      if (previousEventsData !== "undefined") {
        setPrevious(JSON.parse(previousEventsData));
      }
      setPLoading(false);
    } else {
      fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Archive!A2:J19?key=${API_KEY}`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let eventData = data.values;
          setPrevious(data.values);
          setPLoading(false);
          sessionStorage.setItem(
            "previousEventsData",
            JSON.stringify(eventData)
          );
          return eventData;
        });
    }
  }, []);

  return { upcoming, previous, uLoading, pLoading };
}
