import React from "react";
import { useArticleData } from "../../hooks/useArticleData";
import ArticleUi from "../ArticleContent/ArticleUI";

function ErasContent() {
  // TODO: Update article to new ERAS article once available
  // const articleId = "1hOzkW5A4Ynd9ywJFwzTqmNUENGih2D6-U7kvzC-nnWk";
  const articleId = "1odb8EHku5KW2TT1hhaCMO0TAW8qYAiEdoHu8Yh-mM-E";

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
