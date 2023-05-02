import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticleContent.css";
import ArticleCard from "../ResourcesContent/ArticleCard";
import Spinner from "../Spinner/Spinner";
import LeadershipCard from "../LeadershipContent/LeadershipCard";
import { useArticlesData } from "../../hooks/useArticlesData";
import { useLeadershipData } from "../../hooks/useLeadershipData";
import { useArticleData } from "../../hooks/useArticleData";
import expand from "../../assets/expand.png";

function ArticleContent() {
  const { articleId } = useParams();

  const [authorData, setAuthorData] = useState([]);
  const [authorDataLoading, setAuthorDataLoading] = useState(true);

  const {
    articleData,
    articleMetadata,
    articleDataLoading,
    articleMetadataLoading,
  } = useArticleData(articleId);
  const [articleSections, setArticleSections] = useState([]);
  const { articles, thumbnails, articlesLoading } = useArticlesData();
  const { leadershipData, leadershipDataLoading } = useLeadershipData();

  const [outlineExpanded, setOutlineExpanded] = useState(false);

  const handleOutlineExpand = () => {
    setOutlineExpanded(!outlineExpanded);
  };

  // Set page title to article title, once it has loaded
  useEffect(() => {
    if (articleMetadata?.title) {
      document.title =
        articleMetadata.title +
        ", by " +
        articleMetadata.author +
        " | SACNAS UH";
    }
  }, [articleMetadata]);

  // Get author data from leadership data, once metadata has loaded
  useEffect(() => {
    if (!leadershipDataLoading && !articleMetadataLoading) {
      const flattenedData = leadershipData.flatMap((entry) =>
        entry.values.slice(1)
      );
      const author = flattenedData.find(
        (entry) => entry[0] === articleMetadata.author
      );
      setAuthorData(author);
      setAuthorDataLoading(false);
    }
  }, [
    articleMetadataLoading,
    leadershipDataLoading,
    leadershipData,
    articleMetadata,
  ]);

  // Set article sections for outline
  useEffect(() => {
    if (!articleDataLoading) {
      // 1. Get all headings based on id, starting with "h."
      // 2. Label headings based on the text within the span contaned within the heading
      // 3. Navigate to the heading when the outline link is clicked
      // (Use <a> tags with href="#id" to navigate to the heading)
      // TODO: Ensure smooth scrolling is enabled for this
    }
  }, [articleDataLoading]);

  return (
    <div className="article">
      <div className="article-wrapper">
        <div className="article-container">
          <div className="article-title">
            <h2>
              {articleMetadataLoading ? "Loading..." : articleMetadata.title}
            </h2>
            <p>
              {articleMetadataLoading
                ? "Loading..."
                : `${articleMetadata.author} | ${articleMetadata.createdTime}`}
            </p>
            <button
              className={
                outlineExpanded ? "article-outline active" : "article-outline"
              }
              onClick={handleOutlineExpand}
            >
              <a className="article-outline-button">
                <img
                  class={
                    outlineExpanded
                      ? "article-outline-expand active"
                      : "article-outline-expand"
                  }
                  src={expand}
                />
                Article Outline
              </a>
            </button>
            {outlineExpanded && (
              <div className="article-outline-content">
                <ul>
                  {articleDataLoading ? (
                    <Spinner />
                  ) : (
                    articleData
                      .split("<h2>")
                      .slice(1)
                      .map((section) => (
                        <li>
                          <a href={`#${section.split("</h2>")[0]}`}>
                            {section.split("</h2>")[0]}
                          </a>
                        </li>
                      ))
                  )}
                </ul>
              </div>
            )}
          </div>
          {articleDataLoading ? (
            <Spinner />
          ) : (
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: articleData }}
            ></div>
          )}
        </div>
        <div className="article-sidebar">
          <div className="article-sidebar-container">
            <div className="article-sidebar-content">
              {authorData && !authorDataLoading && (
                <LeadershipCard
                  title={authorData[0]}
                  position={authorData[1]}
                  paragraph={authorData[2]}
                  img={authorData[3]}
                  discordHandle={authorData[5]}
                  discordID={authorData[6]}
                  linkedin={authorData[7]}
                  articleCard={true}
                />
              )}
              <div className="article-sidebar-title">
                <h3>More from SACNAS UH</h3>
              </div>
              {articles
                ?.filter(
                  (article) =>
                    article.name.split(" by ")[0] !== articleMetadata?.title
                )
                .map((article) => (
                  <ArticleCard
                    title={article.name.split(" by ")[0]}
                    date={article.createdTime}
                    link={`/article/${article.id}`}
                    img={
                      thumbnails.find(
                        (thumbnail) =>
                          thumbnail.name.split(".")[0] === article.name
                      )?.thumbnailLink
                    }
                    author={article.name.split(" by ")[1]}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleContent;
