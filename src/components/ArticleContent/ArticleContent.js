import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticleContent.css";
import ArticleCard from "../ResourcesContent/ArticleCard";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function ArticleContent() {
  const { articleId } = useParams();
  const [articleData, setArticleData] = useState([]);
  const [articleDataLoading, setArticleDataLoading] = useState(true);
  const [articleMetadata, setArticleMetadata] = useState({});
  const [articleMetadataLoading, setArticleMetadataLoading] = useState(true);

  const [articles, setArticles] = useState([]);
  const [thumnails, setThumbnails] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  useEffect(() => {
    if (articleId === "" || articleId === undefined) return;

    const articleData = sessionStorage.getItem(`articleData-${articleId}`);
    const articleMetadata = sessionStorage.getItem(
      `articleMetadata-${articleId}`
    );

    if (articleData) {
      if (articleData !== "undefined") {
        setArticleData(JSON.parse(articleData));
      }
      setArticleDataLoading(false);
    } else {
      fetch(
        `https://www.googleapis.com/drive/v3/files/${articleId}/export?mimeType=text/html&key=${API_KEY}`
      )
        .then((response) => response.text())
        .then((data) => {
          // Replace hardcoded colors with CSS variables
          let formattedData = data.replace(
            /color:#(?:[0-9a-fA-F]{3}){1,2};/g,
            "color:var(--text-primary);"
          );

          // Set all images to have no referrer policy (prevent CORS errors)
          formattedData = formattedData.replace(
            /<img/g,
            '<img referrerpolicy="no-referrer" class="article-img"'
          );

          // remove hardcoded height and width values
          formattedData = formattedData.replace(/height: *.*?;/g, "");
          formattedData = formattedData.replace(/width: *.*?;/g, "");

          // remove font size
          formattedData = formattedData.replace(/font-size: *.*?pt;/g, "");

          // remove font-family: "...";
          formattedData = formattedData.replace(/font-family: *.*?;/g, "");

          // remove line height
          formattedData = formattedData.replace(/line-height: *.*?;/g, "");

          // remove orphans, widows, page break
          formattedData = formattedData.replace(/orphans: *.*?;/g, "");
          formattedData = formattedData.replace(/widows: *.*?;/g, "");
          formattedData = formattedData.replace(
            /line-page-break-after: *.*?;/g,
            ""
          );

          setArticleData(formattedData);
          setArticleDataLoading(false);

          const articleData = JSON.stringify(formattedData);
          sessionStorage.setItem(`articleData-${articleId}`, articleData);
        });
    }

    if (articleMetadata) {
      if (articleMetadata !== "undefined") {
        setArticleMetadata(JSON.parse(articleMetadata));
      }
      setArticleMetadataLoading(false);
    } else {
      fetch(
        `https://www.googleapis.com/drive/v3/files/${articleId}?fields=createdTime%2Cname&key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const formattedDate = new Date(data.createdTime).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );
          const formattedAuthor = data.name.split(" by ")[1];
          const formattedTitle = data.name.split(" by ")[0];
          setArticleMetadata({
            title: formattedTitle,
            author: formattedAuthor,
            createdTime: formattedDate,
          });
          setArticleMetadataLoading(false);

          const articleMetadata = JSON.stringify({
            title: formattedTitle,
            author: formattedAuthor,
            createdTime: formattedDate,
          });
          sessionStorage.setItem(
            `articleMetadata-${articleId}`,
            articleMetadata
          );
        });
    }
  }, [articleId]);

  // TODO: Fetch articles and thumbnails from Google Drive if not in session storage
  useEffect(() => {
    const sessionData = sessionStorage.getItem("articlesData");
    if (sessionData) {
      const { articles, thumbnails } = JSON.parse(sessionData);
      setArticles(articles);
      setThumbnails(thumbnails);
      setArticlesLoading(false);
    }
  }, []);

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
          </div>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: articleData }}
          ></div>
        </div>
        <div className="article-sidebar">
          <div className="article-sidebar-container">
            <div className="article-sidebar-title">
              <h3>More from SACNAS UH</h3>
            </div>
            <div className="article-sidebar-content">
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
                      thumnails.find(
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
