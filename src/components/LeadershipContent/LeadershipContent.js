import React from "react";
import "./LeadershipContent.css";
import LeadershipCard from "./LeadershipCard";
import Spinner from "../Spinner/Spinner";
import { useLeadershipData } from "../../hooks/useLeadershipData";

function LeadershipContent() {
  const { leadershipData, loading } = useLeadershipData();

  const sections = [
    /* Sections for leadership cards (besides alumni) */
    {
      title: "Faculty Advisors",
      category: "leadership-founders",
    },
    {
      title: "Faculty Co-Advisors",
      category: "leadership-founders",
    },
    {
      title: "Officers",
      category: "leadership-officers",
    },
    {
      title: "Support Officers",
      category: "leadership-officers",
    },
    {
      title: "SACNAS UH Alumni Advisory Board",
      category: "leadership-officers",
    },
    {
      title: "Founders",
      category: "leadership-founders",
    },
  ];
  return (
    <>
      <div class="leadership">
        <div class="leadership-container">
          {sections?.map((section, index) => {
            return loading ||
              (!loading && leadershipData[index]?.values?.length > 0) ? (
              <>
                <div class="leadership-section-title">
                  <h2>{section.title}</h2>
                </div>
                <div class={section.category}>
                  {loading ? (
                    <Spinner />
                  ) : (
                    leadershipData[index]?.values?.map((entry) => {
                      let fac = section.category === "leadership-founders";
                      return (
                        <LeadershipCard
                          title={fac ? entry[0] : entry[0] + ": " + entry[1]}
                          paragraph={fac ? entry[1] : entry[2]}
                          img={fac ? entry[2] : entry[3]}
                          email={fac ? entry[3] : entry[4]}
                          discordHandle={entry[5]}
                          discordID={entry[6]}
                          linkedin={entry[7]}
                          width={
                            fac && index !== 5 ? "m" : undefined
                          } /* Small cards for faculty, except founding */
                        />
                      );
                    })
                  )}
                </div>
              </>
            ) : null;
          })}
          {!loading && (
            <>
              <div class="leadership-section-title">
                <h2>SACNAS UH Alumni</h2>
              </div>
              <div class="leadership-alumni-blurb">
                <p>
                  Our chapter at UH was founded in 2018-2019 and began with an
                  undergraduate student base. Below are SACNAS-UH alumni.
                </p>
              </div>
            </>
          )}
          <div class="leadership-alumni">
            {loading ? (
              <Spinner />
            ) : (
              leadershipData[6]?.values?.map((entry) => {
                return (
                  <div class="leadership-alumlist">
                    <h3>{entry[0]}</h3>
                    {(() => {
                      const alumlist = [];
                      for (let i = 1; i < entry.length; i++) {
                        alumlist.push(<p>{entry[i]}</p>);
                      }
                      return alumlist;
                    })()}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadershipContent;
