import React from "react";
import "./LeadershipContent.css";
import LeadershipCard from "./LeadershipCard";
import { FacultyAdvisors } from './LeadershipData/FacultyAdvisors'
import { Officers } from './LeadershipData/Officers'
import { Mentors } from './LeadershipData/Mentors'
import { SupportOfficers } from './LeadershipData/SupportOfficers'
import { AlumniAdvisors } from "./LeadershipData/AlumniAdvisors";
import { CoAdvisors } from './LeadershipData/CoAdvisors'
import { FoundingAdvisor } from "./LeadershipData/FoundingAdvisor";
import { SACNASAlumni } from "./LeadershipData/SACNASAlumni";

function LeadershipContent() {
  return (
    <>
      <div class="leadership">
        <div class="leadership-container">
          <div class="leadership-section-title"><h2>Faculty Advisors</h2></div>
          <div class="leadership-faculty">
            {FacultyAdvisors.map((item) => {
                return(
                    <LeadershipCard 
                        img = {item.img}
                        title = {item.title}
                        paragraph = {item.paragraph}
                        email = {item.email}
                        width = "m" /* for faculty advisor cards */
                    />
                )
            })}
          </div>
          <div class="leadership-section-title"><h2>Faculty Co-Advisors</h2></div>
          <div class="leadership-faculty">
            {CoAdvisors.map((item) => {
                return(
                    <LeadershipCard 
                        img = {item.img}
                        title = {item.title}
                        paragraph = {item.paragraph}
                        email = {item.email}
                        width = "m" /* for faculty advisor cards */
                    />
                )
            })}
          </div>
          <div class="leadership-section-title"><h2>Officers</h2></div>
          <div class="leadership-officers">
            {Officers.map((item) => {
                    return(
                        <LeadershipCard 
                            img = {item.img}
                            title = {item.title}
                            paragraph = {item.paragraph}
                            link = {item.link}
                        />
                    )
                })}
          </div>
          <div class="leadership-section-title"><h2>Mentors & Support Officers</h2></div>
          <div class="leadership-officers">
            {Mentors.map((item) => {
                    return(
                        <LeadershipCard 
                            img = {item.img}
                            title = {item.title}
                            paragraph = {item.paragraph}
                            email = {item.email}
                        />
                    )
                })}
            {SupportOfficers.map((item) => {
                return(
                    <LeadershipCard 
                        img = {item.img}
                        title = {item.title}
                        paragraph = {item.paragraph}
                        email = {item.email}
                    />
                )
            })}
          </div>
          <div class="leadership-section-title"><h2>SACNAS UH Alumni Advisory Board</h2></div>
          <div class="leadership-officers">
            {AlumniAdvisors.map((item) => {
                return(
                    <LeadershipCard 
                        img = {item.img}
                        title = {item.title}
                        paragraph = {item.paragraph}
                        email = {item.email}
                    />
                )
            })}
          </div>
          
          <div class="leadership-section-title"><h2>Founding Chapter Faculty Advisor (2018-2019)</h2></div>
          <div class="leadership-faculty">
            {FoundingAdvisor.map((item) => {
                return(
                    <LeadershipCard 
                        img = {item.img}
                        title = {item.title}
                        paragraph = {item.paragraph}
                        email = {item.email}
                        /*width = "m" /* for faculty advisor cards */
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
            {SACNASAlumni.map((item) => {
                return(
                    <div class="leadership-alumlist">
                    <h3>{item.title}</h3>
                    {(() => {
                        const alumlist = [];

                        for(let i = 0; i < item.list.length; i++){
                            alumlist.push(<p>{item.list[i]}</p>);
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
