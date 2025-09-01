import { useState, useEffect } from "react";

export function useLeadershipData() {
  const [leadershipData, setLeadershipData] = useState(
    []
  ); /* Leadership data */
  const [loading, setLoading] = useState(true); /* Leadership loading state */

  /* Public Google Sheet ID */
  const SHEET_ID = "1vvNnL1TntLB3_nFWm-cm0ZEZDgJvFTjGcTxyWbWfebc";
  /* Read-only API key, limited to sacnas-uh.org domain */
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const sheetRanges = [
    "Faculty Advisors!A2:D10",
    "Faculty Co-Advisors!A2:D10",
    "Officers!A2:H20",
    "Mentors and Support Officers!A2:H20",
    "Alumni Advisors!A2:D10",
    "Founders!A2:H10",
    "Alumni List!A1:J20",
  ];
  let RANGES = sheetRanges[0];
  for (let i = 1; i < sheetRanges.length; i++) {
    RANGES += "&ranges=" + sheetRanges[i];
  }

  /* Leadership data API call to retreive data from Google Sheets */
  useEffect(() => {
    // Check if data exists in session storage
    const storageData = sessionStorage.getItem("leadershipData");
    if (storageData) {
      setLeadershipData(JSON.parse(storageData));
      setLoading(false);
      return;
    }

    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchGet?ranges=${RANGES}&key=${API_KEY}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data.valueRanges);
        if (data.valueRanges !== undefined) {
          setLeadershipData(data.valueRanges);
          setLoading(false);
          // Store data in session storage
          sessionStorage.setItem(
            "leadershipData",
            JSON.stringify(data.valueRanges)
          );
        }
        return data.valueRanges;
      });
  }, [API_KEY, RANGES]);

  return { leadershipData, loading };
}
