import React, { useState, useEffect } from "react";
import "./LeadershipContent.css";
import LeadershipCard from "./LeadershipCard";

/* Importing leadership data for the cards */
/* (To add/remove officers, change these files in './LeadershipData') */
import { FacultyAdvisors } from './LeadershipData/FacultyAdvisors'
import { Officers } from './LeadershipData/Officers'
import { Mentors } from './LeadershipData/Mentors'
import { SupportOfficers } from './LeadershipData/SupportOfficers'
import { AlumniAdvisors } from "./LeadershipData/AlumniAdvisors";
import { CoAdvisors } from './LeadershipData/CoAdvisors'
import { FoundingAdvisor } from "./LeadershipData/FoundingAdvisor";
import { SACNASAlumni } from "./LeadershipData/SACNASAlumni";
import Spinner from "../Spinner/Spinner";

function LeadershipContent() {
  const [leadershipData, setLeadershipData] = useState([]); /* Upcoming events data */
  const [loading, setLoading] = useState(true); /* Leadership loading state */

  /* Public Google Sheet ID */
  const SHEET_ID = '1vvNnL1TntLB3_nFWm-cm0ZEZDgJvFTjGcTxyWbWfebc';
  /* Read-only API key, limited to sacnas-uh.org domain */
  const API_KEY = 'AIzaSyCWFLx8b9hgh5nlwhN_9S6awfghwUBoXLo';
  
  const sheetRanges = [
    "Officers!A2:H20",
    "Mentors and Support Officers!A2:H20",
    "Faculty Advisors!A2:D10",
    "Faculty Co-Advisors!A2:D10",
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
      console.log(data.valueRanges);
      if(data.valueRanges != undefined){
        setLeadershipData(data.valueRanges);
        setLoading(false);
      }
      return data.valueRanges;
    })},[]);
  
  return (
    <>
      <div class="leadership">
        <div class="leadership-container">
          <div class="leadership-section-title"><h2>Faculty Advisors</h2></div>
          <div class="leadership-faculty">
            {loading ? <Spinner /> : leadershipData[2].values.map((entry) => {
                return(
                    <LeadershipCard 
                        title = {entry[0]}
                        paragraph = {entry[1]}
                        img = {entry[2]}
                        email = {entry[3]}
                        width = "m" /* for faculty advisor cards */
                    />
                )
            })}
          </div>
          <div class="leadership-section-title"><h2>Faculty Co-Advisors</h2></div>
          <div class="leadership-faculty">
            {loading ? <Spinner /> : leadershipData[3].values.map((entry) => {
                return(
                    <LeadershipCard 
                        title = {entry[0]}
                        paragraph = {entry[1]}
                        img = {entry[2]}
                        email = {entry[3]}
                        width = "m" /* for faculty advisor cards */
                    />
                )
            })}
          </div>
          <div class="leadership-section-title"><h2>Officers</h2></div>
          <div class="leadership-officers">
            {loading ? <Spinner /> : leadershipData[0].values.map((entry) => {
                    return(
                        <LeadershipCard 
                            title = {entry[0] + ": " + entry[1]}
                            paragraph = {entry[2]}
                            img = {entry[3]}
                        />
                    )
                })}
          </div>
          <div class="leadership-section-title"><h2>Mentors & Support Officers</h2></div>
          <div class="leadership-officers">
            {loading ? <Spinner /> : leadershipData[1].values.map((entry) => {
                    return(
                        <LeadershipCard 
                            title = {entry[0] + ": " + entry[1]}
                            paragraph = {entry[2]}
                            img = {entry[3]}
                        />
                    )
                })}
          </div>
          <div class="leadership-section-title"><h2>SACNAS UH Alumni Advisory Board</h2></div>
          <div class="leadership-officers">
            {loading ? <Spinner /> : leadershipData[4].values.map((entry) => {
                    return(
                        <LeadershipCard 
                            title = {entry[0] + ": " + entry[1]}
                            paragraph = {entry[2]}
                            img = {entry[3]}
                        />
                    )
                })}
          </div>
          
          <div class="leadership-section-title"><h2>Founding Chapter Faculty Advisor (2018-2019)</h2></div>
          <div class="leadership-faculty">
            {loading ? <Spinner /> : leadershipData[5].values.map((entry) => {
                return(
                    <LeadershipCard 
                        title = {entry[0]}
                        paragraph = {entry[1]}    
                        img = {entry[2]}
                    />
                )
            })}
          </div>
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
