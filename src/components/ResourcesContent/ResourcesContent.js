import React, { useState, useEffect } from "react";
import "./ResourcesContent.css";
import VideoCard from "./VideoCard";
import ArticleCard from "./ArticleCard";
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

const articles = [
  {
    title: "Software Engineering Resume Essentials",
    date: "May 2023",
    link: "/article/software-engineering-resume-essentials",
    img: "https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Mitchell Sharma",
  },
  {
    title: "How to get your first internship in STEM",
    date: "May 2023",
    link: "/article/how-to-get-your-first-internship-in-stem",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80",
    author: "Mitchell Sharma",
  },
  {
    title: "Guide to Undergraduate Research",
    date: "May 2023",
    link: "/article/guide-to-undergraduate-research",
    img: "https://plus.unsplash.com/premium_photo-1661378532596-25c6f32ab3d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "An Bui",
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
          <div class="resources-content-container">
            {articles.map((article) => (
              <ArticleCard
                title={article.title}
                date={article.date}
                link={article.link}
                img={article.img}
                author={article.author}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesContent;
