import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticleContent.css";
import ArticleCard from "../ResourcesContent/ArticleCard";
import Spinner from "../Spinner/Spinner";
import LeadershipCard from "../LeadershipContent/LeadershipCard";

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

  const [authorData, setAuthorData] = useState([]);
  const [authorDataLoading, setAuthorDataLoading] = useState(true);

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
          let formattedData = data.replace(/color: *.*?;/g, "");

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

          // reduce weight of bold text
          formattedData = formattedData.replace(
            /font-weight:700/g,
            "font-weight:500"
          );

          // remove line height
          formattedData = formattedData.replace(/line-height: *.*?;/g, "");

          // remove orphans, widows, page break
          formattedData = formattedData.replace(/orphans: *.*?;/g, "");
          formattedData = formattedData.replace(/widows: *.*?;/g, "");
          formattedData = formattedData.replace(
            /line-page-break-after: *.*?;/g,
            ""
          );

          // remove google redirect
          const matchRegex =
            /https?:\/\/www\.google\.com\/url\?q=([^&;]+)&(?:amp;)?[^"]*/g;
          const matches = formattedData.matchAll(matchRegex);
          for (const match of matches) {
            const originalUrl = decodeURIComponent(match[1]);
            const isOnSameDomain = originalUrl.startsWith(
              "https://sacnas-uh.org"
            );
            const slug = isOnSameDomain
              ? originalUrl.replace("https://sacnas-uh.org", "")
              : "";
            const newUrl = isOnSameDomain ? slug : originalUrl;
            formattedData = formattedData.replace(match[0], newUrl);
          }

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

  // TODO: Fetch leadership data from Google Drive if not in session storage
  useEffect(() => {
    const sessionData = sessionStorage.getItem("leadershipData");
    if (sessionData && !articleMetadataLoading) {
      const leadershipData = JSON.parse(sessionData);
      const flattenedData = leadershipData.flatMap((entry) =>
        entry.values.slice(1)
      );
      const author = flattenedData.find(
        (entry) => entry[0] === articleMetadata.author
      );
      setAuthorData(author);
      setAuthorDataLoading(false);
    }
  }, [articleMetadataLoading]);

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
              {!authorDataLoading && (
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
