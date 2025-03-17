import React from "react";
import { useArticleData } from "../../hooks/useArticleData";
import ArticleUi from "../ArticleContent/ArticleUI";

function ErasContent() {
  // TODO: Update article to new ERAS article once available
  const articleId = "1hOzkW5A4Ynd9ywJFwzTqmNUENGih2D6-U7kvzC-nnWk";

  const {
    articleData,
    articleMetadata,
    articleDataLoading,
    articleMetadataLoading,
  } = useArticleData(articleId);
  return (
    <ArticleUi
      articleData={articleData}
      articleMetadata={articleMetadata}
      articleDataLoading={articleDataLoading}
      articleMetadataLoading={articleMetadataLoading}
    />
  );
}

export default ErasContent;
