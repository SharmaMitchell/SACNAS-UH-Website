import React from 'react'

/* 
TODO:
- Get 5 latest videos from SACNAS UH YouTube channel
- Link (or embed) the videos
- List video metadata (title, description, date published) next to the link/embed 
    (if possible via youtube API)
- Add a link to the SACNAS UH YouTube channel (May want to add that to the footer too)
*/

const videos = [
    {
        title: "SACNAS UH: 2021 Virtual Graduation",
        description: "SACNAS UH 2021 Virtual Graduation",
        date: "May 2021",
        link: "https://www.youtube.com/watch?v=6I0J0l9c6gA"
    },
    {
        title: "SACNAS UH: 2021 Virtual Graduation",
        description: "SACNAS UH 2021 Virtual Graduation",
        date: "May 2021",
        link: "https://www.youtube.com/watch?v=6I0J0l9c6gA"
    },
    {
        title: "SACNAS UH: 2021 Virtual Graduation",
        description: "SACNAS UH 2021 Virtual Graduation",
        date: "May 2021",
        link: "https://www.youtube.com/watch?v=6I0J0l9c6gA"
    },
    {
        title: "SACNAS UH: 2021 Virtual Graduation",
        description: "SACNAS UH 2021 Virtual Graduation",
        date: "May 2021",
        link: "https://www.youtube.com/watch?v=6I0J0l9c6gA"
    },
    {
        title: "SACNAS UH: 2021 Virtual Graduation",
        description: "SACNAS UH 2021 Virtual Graduation",
        date: "May 2021",
        link: "https://www.youtube.com/watch?v=6I0J0l9c6gA"
    },
]

function ResourcesContent() {
  return (
    <div class="resources">
            <div class="resources-container">
                <div class="resources-title">
                    <h1>Resources</h1>
                </div>
                <div class="resources-content">
                    <div class="resources-content-container">
                        <div class="resources-content-title">
                            <h2>SACNAS UH YouTube</h2>
                            {videos.map((video) => (
                                <div class="resources-content-video">
                                    <div class="resources-content-video-title">
                                        <h3>{video.title}</h3>
                                    </div>
                                    <div class="resources-content-video-description">
                                        <p>{video.description}</p>
                                    </div>
                                    <div class="resources-content-video-date">
                                        <p>{video.date}</p>
                                    </div>
                                    < div class="resources-content-video-link">
                                        <a href={video.link}>Link</a>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ResourcesContent
