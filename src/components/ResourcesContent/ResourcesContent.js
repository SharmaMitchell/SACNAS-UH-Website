import React, { useState, useEffect } from "react";

/* 
TODO:
- Properly set up API call (need API key)
- Add a link to the SACNAS UH YouTube channel (May want to add that to the footer too)
*/

const videos = [
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
  },
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
  },
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
  },
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
  },
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
  },
];

const SACNAS_UH_YT_ID = "UC2X1nE_E-cpXlSXWKvaRCtQ";
const NUM_VIDEOS = 5;
// const API_KEY = process.env.SACNAS_UH_YT_API_KEY;

function ResourcesContent() {
  //   const [videos, setVideos] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet
  //             &channelId=${SACNAS_UH_YT_ID}
  //             &maxResults=${NUM_VIDEOS}
  //             &order=date
  //             &type=video
  //             &key=${API_KEY}`)
  //       .then((response) => response.json())
  //       .then((data) => setVideos(data.items));
  //   }, []);

  return (
    <div class="resources">
      <div class="resources-container">
        <div class="resources-title">
          <h1>Resources</h1>
        </div>
        <div class="resources-content">
          <div class="resources-content-container">
            <div class="resources-content-title">
              <h2>SACNAS UH YouTube</h2>
              {videos.map((video) => (
                <div class="resources-content-video">
                  <div class="resources-content-video-title">
                    <h3>{video.title}</h3>
                  </div>
                  <div class="resources-content-video-description">
                    <p>{video.description}</p>
                  </div>
                  <div class="resources-content-video-date">
                    <p>{video.date}</p>
                  </div>
                  <div class="resources-content-video-link">
                    <a href={video.link}>Link</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesContent;
