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
  const [filteredArticles, setFilteredArticles] = useState([]);
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
    try {
      if (!leadershipDataLoading && !articleMetadataLoading) {
        const flattenedData = leadershipData.flatMap((entry) => entry.values);
        let author = flattenedData.find(
          (entry) => entry[0] === articleMetadata.author
        );
        // If author name ends in ", PhD", set entry[3] to entry[2] and remove entry[2]
        if (author && author[0].endsWith(", PhD")) {
          author[3] = author[2];
          author[2] = "";
        }
        setAuthorData(author);
        setAuthorDataLoading(false);
      }
    } catch {
      console.log("Error loading author data in ArticleContent");
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
      const headings = document.querySelectorAll(
        'h1[id^="h."], h2[id^="h."], h3[id^="h."], h4[id^="h."]'
      );
      const labeledHeadings = Array.from(headings).map((heading) => {
        const headingLabel = heading.querySelector("span").textContent;
        const headingId = heading.getAttribute("id");
        const level = parseInt(heading.tagName.substring(1));
        return [headingLabel, headingId, level];
      });
      setArticleSections(labeledHeadings);
    }
  }, [articleDataLoading, articleData]);

  // Filter articles to only those that are not the current article
  useEffect(() => {
    if (!articlesLoading) {
      setFilteredArticles(
        articles.filter(
          (article) => article.name.split(" by ")[0] !== articleMetadata?.title
        )
      );
    }
  }, [articlesLoading, articles, articleMetadata]);

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
            {articleSections.length > 0 && (
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
            )}
            {outlineExpanded && (
              <div className="article-outline-content">
                <ul>
                  {articleDataLoading ? (
                    <Spinner />
                  ) : (
                    articleSections?.map(([headingLabel, headingId, level]) => (
                      <li
                        key={headingId}
                        style={{
                          marginLeft: `${(level > 2 ? level - 2 : 0) * 2}rem`,
                          listStyleType: level >= 3 ? "circle" : "none",
                        }}
                      >
                        <a
                          href={`#${headingId}`}
                          style={{
                            textDecoration: level <= 2 ? "underline" : "none",
                          }}
                        >
                          {headingLabel}
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
              {filteredArticles?.map((article) => (
                <ArticleCard
                  key={article.id}
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
