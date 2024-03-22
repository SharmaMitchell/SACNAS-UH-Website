import { useState, useEffect } from "react";

export function useArticlesData() {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const ARTICLES_FOLDER_ID = "1eMQ0gxH5luOtG5NZXERPc2t_OyEyKqh-";
  const fields = "files(id, name, createdTime, thumbnailLink, mimeType)";

  const [articles, setArticles] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  useEffect(() => {
    const sessionData = sessionStorage.getItem("articlesData");

    if (sessionData) {
      const { articles, thumbnails } = JSON.parse(sessionData);
      setArticles(articles);
      setThumbnails(thumbnails);
      setArticlesLoading(false);
    } else {
      fetch(
        `https://www.googleapis.com/drive/v3/files?q="${ARTICLES_FOLDER_ID}"+in+parents&fields=${fields}&key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const articles = data.files.filter(
            (file) => file.mimeType === "application/vnd.google-apps.document"
          );
          const thumbnails = data.files.filter(
            (file) => file.mimeType !== "application/vnd.google-apps.document"
          );

          //sort articles by date
          articles.sort((a, b) => {
            return new Date(b.createdTime) - new Date(a.createdTime);
          });

          setArticles(articles);
          setThumbnails(thumbnails);
          setArticlesLoading(false);

          const articlesData = JSON.stringify({ articles, thumbnails });
          sessionStorage.setItem("articlesData", articlesData);
        });
    }
  }, [API_KEY]);

  return { articles, thumbnails, articlesLoading };
}
