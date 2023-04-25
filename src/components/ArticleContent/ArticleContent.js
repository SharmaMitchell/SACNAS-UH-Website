import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticleContent.css";
import LeadershipCard from "../LeadershipContent/LeadershipCard";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function ArticleContent() {
  const { articleId } = useParams();
  const [profileData, setProfileData] = useState([]);
  const [profileDataLoading, setProfileDataLoading] = useState(true);
  const [articleData, setArticleData] = useState([]);
  const [articleDataLoading, setArticleDataLoading] = useState(true);
  const [articleMetadata, setArticleMetadata] = useState({});
  const [articleMetadataLoading, setArticleMetadataLoading] = useState(true);

  /* Public Google Sheet ID */
  const SHEET_ID = "1vvNnL1TntLB3_nFWm-cm0ZEZDgJvFTjGcTxyWbWfebc";

  const sheetRanges = [
    "Faculty Advisors!A2:D10",
    "Faculty Co-Advisors!A2:D10",
    "Officers!A2:H20",
    "Mentors and Support Officers!A2:H20",
    "Alumni Advisors!A2:D10",
    "Founding Faculty!A2:C2",
    "Alumni List!A1:J20",
  ];
  let RANGES = sheetRanges[0];
  for (let i = 1; i < sheetRanges.length; i++) {
    RANGES += "&ranges=" + sheetRanges[i];
  }

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

  /* Leadership data API call to retreive data from Google Sheets */
  useEffect(() => {
    // Check if data exists in session storage
    const storageData = sessionStorage.getItem("leadershipData");
    if (storageData) {
      const leadershipData = JSON.parse(storageData);
      const flattenedData = leadershipData.flatMap((entry) =>
        entry.values.slice(1)
      );
      const person = flattenedData.find(
        (entry) => entry[0] === "Mitchell Sharma"
      );
      setProfileData(person);
      setProfileDataLoading(false);
      return;
    }

    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchGet?ranges=${RANGES}&key=${API_KEY}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data.valueRanges);
        if (data.valueRanges != undefined) {
          // Store data in session storage
          sessionStorage.setItem(
            "leadershipData",
            JSON.stringify(data.valueRanges)
          );
          const leadershipData = data.valueRanges;
          const flattenedData = leadershipData.flatMap((entry) =>
            entry.values.slice(1)
          );
          const person = flattenedData.find(
            (entry) => entry[0] === "Mitchell Sharma"
          );
          setProfileData(person);
          setProfileDataLoading(false);
        }
        return data.valueRanges;
      });
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
        {!profileDataLoading && (
          <LeadershipCard
            title={profileData[0]}
            paragraph={profileData[2]}
            img={profileData[3]}
            width="m"
          />
        )}
      </div>
    </div>
  );
}

export default ArticleContent;
