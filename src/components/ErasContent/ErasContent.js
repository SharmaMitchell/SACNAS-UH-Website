import React from "react";
import { useArticleData } from "../../hooks/useArticleData";
import ArticleUi from "../ArticleContent/ArticleUI";

function ErasContent() {
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
