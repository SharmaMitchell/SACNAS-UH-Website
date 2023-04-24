import React, { useState, useEffect } from "react";
import "./ResourcesContent.css";
import VideoCard from "./VideoCard";
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
    img: "https://i.ytimg.com/vi/6I0J0l9c6gA/maxresdefault.jpg",
  },
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
    img: "https://i.ytimg.com/vi/6I0J0l9c6gA/maxresdefault.jpg",
  },
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
    img: "https://i.ytimg.com/vi/6I0J0l9c6gA/maxresdefault.jpg",
  },
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
    img: "https://i.ytimg.com/vi/6I0J0l9c6gA/maxresdefault.jpg",
  },
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
    img: "https://i.ytimg.com/vi/6I0J0l9c6gA/maxresdefault.jpg",
  },
  {
    title: "SACNAS UH: 2021 Virtual Graduation",
    description: "SACNAS UH 2021 Virtual Graduation",
    date: "May 2021",
    link: "https://www.youtube.com/watch?v=6I0J0l9c6gA",
    img: "https://i.ytimg.com/vi/6I0J0l9c6gA/maxresdefault.jpg",
  },
];

const SACNAS_UH_YT_ID = "UC2X1nE_E-cpXlSXWKvaRCtQ";
const NUM_VIDEOS = 6;
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
          <h2>Workshops</h2>
        </div>
        <div class="resources-content">
          <div class="resources-content-container">
            {videos.map((video) => (
              <VideoCard
                title={video.title}
                description={video.description}
                date={video.date}
                link={video.link}
                img={video.img}
              />
            ))}
          </div>
        </div>
        <div class="resources-title">
          <h2>Articles</h2>
        </div>
        <div class="resources-content">
          <div class="resources-content-container"></div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesContent;
