import React from "react";
import "./ResourcesContent.css";
import VideoCard from "./VideoCard";
import ArticleCard from "./ArticleCard";
import Spinner from "../Spinner/Spinner";
import { useArticlesData } from "../../hooks/useArticlesData";
import { useWorkshopsData } from "../../hooks/useWorkshopsData";
/* 
TODO:
- Add a link to the SACNAS UH YouTube channel (May want to add that to the footer too)
*/

function ResourcesContent() {
  const { articles, thumbnails, articlesLoading } = useArticlesData();
  const { videos, videosLoading } = useWorkshopsData();

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
