import React, { useState, useEffect } from "react";
import "./ResourcesContent.css";
import VideoCard from "./VideoCard";
import ArticleCard from "./ArticleCard";
import Spinner from "../Spinner/Spinner";
import { useArticlesData } from "../../hooks/useArticlesData";
/* 
TODO:
- Add a link to the SACNAS UH YouTube channel (May want to add that to the footer too)
*/

const SACNAS_UH_YT_ID = "UC2X1nE_E-cpXlSXWKvaRCtQ";
const NUM_VIDEOS = 6;

function ResourcesContent() {
  const [videos, setVideos] = useState([]);
  const [videosLoading, setVideosLoading] = useState(true);
  const fallbackVideos = [
    {
      snippet: {
        title:
          "Gilman Scholarship Info Webinar w/Previous Scholarship Recipient hosted by SACNAS UH",
        description:
          "Gilman Scholarship Info Webinar: https://www.gilmanscholarship.org",
        publishedAt: "2022-11-29T00:00:00.000Z",
      },
      id: {
        videoId: "ku1-LGhb_2I",
      },
    },
    {
      snippet: {
        title:
          "SACNAS-UH Mentorship: STEM Graduate Student Experiences Panel 2022",
        description: "Recording of the mentorship meeting on September 9, 2022",
        publishedAt: "2022-09-09T00:00:00.000Z",
      },
      id: {
        videoId: "R42JLpnkLJE",
      },
    },
    {
      snippet: {
        title: "Graduate Application Materials - SACNAS UH 2022",
        description: "",
        publishedAt: "2022-08-12T00:00:00.000Z",
      },
      id: {
        videoId: "vHXIaWYpQn0",
      },
    },
    {
      snippet: {
        title: "SACNAS + CAPS Mental Health Awareness",
        description: "",
        publishedAt: "2021-09-10T00:00:00.000Z",
      },
      id: {
        videoId: "Ku7iWY_zsKI",
      },
    },
    {
      snippet: {
        title:
          "SACNAS UH Mentorship Program Series - CVs Resumes and Interviews",
        description: "",
        publishedAt: "2021-08-09T00:00:00.000Z",
      },
      id: {
        videoId: "K4WpaYvmHuk",
      },
    },
    {
      snippet: {
        title: "NSM SACNAS Grad School Workshop",
        description:
          "Advice and pointers about applying to and surviving graduate school from our very own UH SACNAS Graduate Committee, and the Chair of Graduate Affairs for Biology and Biochem at UH",
        publishedAt: "2020-09-13T00:00:00.000Z",
      },
      id: {
        videoId: "ind9m5EZuSQ",
      },
    },
  ];

  // NOTE: This fetch is rly expensive and reaches quota limits quickly (100 reqs/day)
  // TODO: Fetch using Google Apps Script once per day and store on Sheets
  useEffect(() => {
    // const videosFromStorage = sessionStorage.getItem("workshopVideos");

    // if (videosFromStorage) {
    //   setVideos(JSON.parse(videosFromStorage));
    //   setVideosLoading(false);
    // } else {
    //   fetch(
    //     `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${SACNAS_UH_YT_ID}&maxResults=${NUM_VIDEOS}&order=date&type=video&key=${API_KEY}&hqdefault=true`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.items === undefined) {
    //         setVideos(fallbackVideos);
    //       } else {
    //         setVideos(data.items);
    //       }
    //       setVideosLoading(false);
    //       sessionStorage.setItem("workshopVideos", JSON.stringify(data.items));
    //     })
    //     .catch((error) => console.error(error));
    // }
    setVideos(fallbackVideos);
    setVideosLoading(false);
  }, []);

  const { articles, thumbnails, articlesLoading } = useArticlesData();

  return (
    <div class="resources">
      <div class="resources-container">
        <div class="resources-title">
          <h2>Articles</h2>
        </div>
        <div class="resources-content">
          <div class="resources-content-container">
            {articlesLoading && <Spinner />}
            {articles?.map((article) => (
              <ArticleCard
                title={article.name.split(" by ")[0]}
                date={article.createdTime}
                link={`/article/${article.id}`}
                img={
                  thumbnails.find(
                    (thumbnail) => thumbnail.name.split(".")[0] === article.name
                  )?.thumbnailLink
                }
                author={article.name.split(" by ")[1]}
              />
            ))}
          </div>
        </div>
        <div class="resources-title">
          <h2>Workshops</h2>
        </div>
        <div class="resources-content">
          <div class="resources-content-container">
            {videosLoading && <Spinner />}
            {videos?.map((video) => (
              <VideoCard
                title={video.snippet.title}
                description={video.snippet.description}
                date={video.snippet.publishedAt}
                link={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                img={`https://i.ytimg.com/vi/${video.id.videoId}/mqdefault.jpg`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesContent;
