import React, { useEffect, useState } from "react";
import "./ArticleUi.css";
import ArticleCard from "../ResourcesContent/ArticleCard";
import Spinner from "../Spinner/Spinner";
import LeadershipCard from "../LeadershipContent/LeadershipCard";
import { useArticlesData } from "../../hooks/useArticlesData";
import expand from "../../assets/expand.png";

/**
 * Renders article content, including author information, article content, and related articles.
 * Handles logic for:
 *   - Building the article outline
 *   - Filtering related articles to exclude the current article
 *
 * @props
 * authorData: author data from leadership data
 * authorDataLoading: loading state for author data
 * articleData: article content
 * articleMetadata: article metadata
 * articleDataLoading: loading state for article content
 * articleMetadataLoading: loading state for article metadata
 */
function ArticleUi(props) {
  const {
    authorData,
    authorDataLoading,
    articleData,
    articleMetadata,
    articleDataLoading,
    articleMetadataLoading,
  } = props;

  const { articles, thumbnails, articlesLoading } = useArticlesData();
  const [filteredArticles, setFilteredArticles] = useState([]);

  const [articleSections, setArticleSections] = useState([]);
  const [outlineExpanded, setOutlineExpanded] = useState(false);
  const handleOutlineExpand = () => {
    setOutlineExpanded(!outlineExpanded);
  };

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
                    alt="Expand"
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

export default ArticleUi;
