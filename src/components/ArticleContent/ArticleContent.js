import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticleContent.css";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function ArticleContent() {
  const { articleId } = useParams();
  const [articleData, setArticleData] = useState([]); /* Article data */

  useEffect(() => {
    if (articleId === "" || articleId === undefined) return;
    fetch(
      `https://www.googleapis.com/drive/v3/files/${articleId}/export?mimeType=text/html&key=${API_KEY}`
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        let formattedData = data.replace(
          /color:#000000;/g,
          "color:var(--text-primary);"
        );

        formattedData = formattedData.replace(
          /<img/g,
          '<img referrerpolicy="no-referrer" class="article-img"'
        );

        // remove hardcoded height and width values
        formattedData = formattedData.replace(/height: *.*?/g, "");
        formattedData = formattedData.replace(/width: *.*?/g, "");

        setArticleData(formattedData);
        console.log(formattedData);
      });
  }, [articleId]);

  return (
    <div className="article">
      <div className="article-wrapper">
        <div
          className="article-container"
          dangerouslySetInnerHTML={{ __html: articleData }}
        ></div>
      </div>
    </div>
  );
}

export default ArticleContent;
