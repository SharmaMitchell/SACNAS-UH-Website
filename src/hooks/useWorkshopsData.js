import { useState, useEffect, useMemo } from "react";

export function useWorkshopsData() {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const SACNAS_UH_YT_ID = "UC2X1nE_E-cpXlSXWKvaRCtQ";
  const NUM_VIDEOS = 12;

  const [videos, setVideos] = useState([]);
  const [videosLoading, setVideosLoading] = useState(true);
  const fallbackVideos = useMemo(
    () => [
      {
        snippet: {
          title:
            "Gilman Scholarship Info Webinar w/Previous Scholarship Recipient hosted by SACNAS UH",
          description:
            "Gilman Scholarship Info Webinar: https://www.gilmanscholarship.org",
          publishedAt: "2022-11-29T00:00:00.000Z",
        },
        id: {
          videoId: "ku1-LGhb_2I",
        },
      },
      {
        snippet: {
          title:
            "SACNAS-UH Mentorship: STEM Graduate Student Experiences Panel 2022",
          description:
            "Recording of the mentorship meeting on September 9, 2022",
          publishedAt: "2022-09-09T00:00:00.000Z",
        },
        id: {
          videoId: "R42JLpnkLJE",
        },
      },
      {
        snippet: {
          title: "Graduate Application Materials - SACNAS UH 2022",
          description: "",
          publishedAt: "2022-08-12T00:00:00.000Z",
        },
        id: {
          videoId: "vHXIaWYpQn0",
        },
      },
      {
        snippet: {
          title: "SACNAS + CAPS Mental Health Awareness",
          description: "",
          publishedAt: "2021-09-10T00:00:00.000Z",
        },
        id: {
          videoId: "Ku7iWY_zsKI",
        },
      },
      {
        snippet: {
          title:
            "SACNAS UH Mentorship Program Series - CVs Resumes and Interviews",
          description: "",
          publishedAt: "2021-08-09T00:00:00.000Z",
        },
        id: {
          videoId: "K4WpaYvmHuk",
        },
      },
      {
        snippet: {
          title: "NSM SACNAS Grad School Workshop",
          description:
            "Advice and pointers about applying to and surviving graduate school from our very own UH SACNAS Graduate Committee, and the Chair of Graduate Affairs for Biology and Biochem at UH",
          publishedAt: "2020-09-13T00:00:00.000Z",
        },
        id: {
          videoId: "ind9m5EZuSQ",
        },
      },
    ],
    []
  );

  // NOTE: This fetch is rly expensive and reaches quota limits quickly (100 reqs/day)
  // TODO: Fetch using Google Apps Script once per day and store on Sheets
  useEffect(() => {
    const videosFromStorage = sessionStorage.getItem("workshopVideos");

    if (videosFromStorage) {
      setVideos(JSON.parse(videosFromStorage));
      setVideosLoading(false);
    } else {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${SACNAS_UH_YT_ID}&maxResults=${NUM_VIDEOS}&order=date&type=video&key=${API_KEY}&hqdefault=true`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.items === undefined) {
            setVideos(fallbackVideos);
          } else {
            setVideos(data.items);
            sessionStorage.setItem(
              "workshopVideos",
              JSON.stringify(data.items)
            );
          }
          setVideosLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [API_KEY, fallbackVideos]);

  return { videos, videosLoading };
}
