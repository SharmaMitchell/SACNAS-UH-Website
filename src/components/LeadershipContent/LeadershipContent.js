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
        </div>
      </div>
    </>
  );
}

export default LeadershipContent;
