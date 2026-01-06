import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLeadershipData } from "../../hooks/useLeadershipData";
import { useArticleData } from "../../hooks/useArticleData";
import ArticleUi from "./ArticleUI";

/**
 * Fetches article content and passes it to ArticleUI.
 * Handles logic for:
 *   - Setting page title to article title
 *   - Getting author data from leadership data
 */
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

  const { leadershipData, leadershipDataLoading } = useLeadershipData();

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

  return (
    <ArticleUi
      authorData={authorData}
      authorDataLoading={authorDataLoading}
      articleData={articleData}
      articleMetadata={articleMetadata}
      articleDataLoading={articleDataLoading}
      articleMetadataLoading={articleMetadataLoading}
    />
  );
}

export default ArticleContent;
