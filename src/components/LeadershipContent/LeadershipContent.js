import React, { useState, useEffect } from "react";
import "./LeadershipContent.css";
import LeadershipCard from "./LeadershipCard";
import Spinner from "../Spinner/Spinner";

function LeadershipContent() {
  const [leadershipData, setLeadershipData] = useState([]); /* Upcoming events data */
  const [loading, setLoading] = useState(true); /* Leadership loading state */

  /* Public Google Sheet ID */
  const SHEET_ID = '1vvNnL1TntLB3_nFWm-cm0ZEZDgJvFTjGcTxyWbWfebc';
  /* Read-only API key, limited to sacnas-uh.org domain */
  const API_KEY = 'AIzaSyCWFLx8b9hgh5nlwhN_9S6awfghwUBoXLo';
  
  const sheetRanges = [
    "Faculty Advisors!A2:D10",
    "Faculty Co-Advisors!A2:D10",
    "Officers!A2:H20",
    "Mentors and Support Officers!A2:H20",
    "Alumni Advisors!A2:D10",
    "Founding Faculty!A2:C2",
    "Alumni List!A1:J20",
  ];
  let RANGES = sheetRanges[0]
  for(let i = 1; i < sheetRanges.length; i++){
    RANGES += ("&ranges=" + sheetRanges[i])
  }

  /* Upcoming events API call to retreive data from Google Sheets */
  useEffect(() => {fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchGet?ranges=${RANGES}&key=${API_KEY}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      //console.log(data.valueRanges);
      if(data.valueRanges != undefined){
        setLeadershipData(data.valueRanges);
        setLoading(false);
      }
      return data.valueRanges;
    })},[]);
  
  const sections = [ /* Sections for leadership cards (besides alumni) */
    {
      title : "Faculty Advisors",
      category : "leadership-faculty",
    },
    {
      title : "Faculty Co-Advisors",
      category : "leadership-faculty",
    },
    {
      title : "Officers",
      category : "leadership-officers",
    },
    {
      title : "Support Officers",
      category : "leadership-officers",
    },
    {
      title : "SACNAS UH Alumni Advisory Board",
      category : "leadership-officers",
    },
    {
      title : "Founding Chapter Faculty Advisor (2018-2019)",
      category : "leadership-faculty",
    },
  ]
  return (
    <>
      <div class="leadership">
        <div class="leadership-container">
          {sections.map((section, index) => {
            return (<>
              <div class="leadership-section-title"><h2>{section.title}</h2></div>
              <div class={section.category}>
              {loading ? <Spinner /> : leadershipData[index].values.map((entry) => {
                      let fac = section.category == "leadership-faculty";
                      return(
                          <LeadershipCard 
                              title = {fac ? entry[0] : entry[0] + ": " + entry[1]}
                              paragraph = {fac ? entry[1] : entry[2]}
                              img = {fac ? entry[2] : entry[3]}
                              email = {fac ? entry[3] : entry[4]}
                              discordHandle = {entry[5]}
                              discordID = {entry[6]}
                              linkedin = {entry[7]}
                              width = {fac && index != 5 ? "m" : undefined} /* Small cards for faculty, except founding */
                          />
                      )
                  })}
            </div>
          </>)
          })}
          <div class="leadership-section-title"><h2>SACNAS UH Alumni</h2></div>
          <div class="leadership-alumni-blurb">
            <p>Our chapter at UH was founded in 2018-2019 and began with an undergraduate student base.
Below are SACNAS-UH alumni.</p>
          </div>
          <div class="leadership-alumni">
            {loading ? <Spinner /> : leadershipData[6].values.map((entry) => {
                return(
                    <div class="leadership-alumlist">
                    <h3>{entry[0]}</h3>
                    {(() => {
                        const alumlist = [];
                        for(let i = 1; i < entry.length; i++){
                            alumlist.push(<p>{entry[i]}</p>);
                        }
                        return alumlist;
                    })()}
                    </div>
                )
            })}
          </div>
            
        </div>
      </div>
    </>
  );
}

export default LeadershipContent;
