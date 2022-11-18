import React, {useState, useEffect} from 'react'
import './MailListContent.css'

/* Get window size for scaling iFrames */
function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function MailListContent() {
  
  const [windowSize, setWindowSize] = useState(getWindowSize()); /* Window size State */
  
  /* On window resize (and page load), set iFrame & Newsletter preview height */
  /* Mainly optimized for the Google Form, to avoid scrolling within the iFrame */
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);
  
  let iFrameHeight = "1750";
  let previewHeight = "1700";
  if (windowSize.innerWidth <= 320){
    iFrameHeight = "2500";
    previewHeight = "2450";
  }
  else if (windowSize.innerWidth <= 380){
    iFrameHeight = "2200";
    previewHeight = "2150";
  }
  else if (windowSize.innerWidth <= 500){
    iFrameHeight = "2000";
    previewHeight = "1950";
  }
  else if (windowSize.innerWidth < 768){
    iFrameHeight = "1850";
    previewHeight = "1800";
  }

  
  const [previewURL, setPreviewURL] = useState(""); /* URL for most recent newsletter */
  const [previewLoading, setPreviewLoading] = useState(true); /* newletter preview loading state */
  
  /* Get most recent newsletter URL from mailchimp */
  useEffect(() => {
    fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://us3.campaign-archive.com/home/?u=9725fd8683bb429d5d3d28d33&id=1c72884554"))
      .then(function (response) {
        //console.log(response);
        return response.json();
      })
      .then(function (data) {
        //console.log(data.contents);
        let theURL = data.contents.match(/<li class="campaign">\d*\/\d*\/\d* - <a href="(.*?)"/)[1]; /* Pull string matching this regex to extract URL */
        //console.log(theURL);
        
        setPreviewURL(theURL);
        setPreviewLoading(false);
        return;
      });
  }, []);

  return (
    <div class="mail-list-container">
      <div class="mail-list-title">
        <h2>Mail List</h2>
      </div>
      <div class="mail-list">
        <div class="gform-wrapper">
            <iframe
                class="gform"
                src="https://docs.google.com/forms/d/e/1FAIpQLScaahgIdex5tTTZnRiWNXglj62eJ4t9Ut505KCtjWuo55IqTw/viewform?embedded=true"
                // width="700"
                height={iFrameHeight}
                frameborder="0"
                marginHeight="0"
                marginWidth="0"
                // scrolling='no'
            >
                Loading…
            </iframe>
        </div>
        <div class="mail-list-preview">
            <iframe 
                class="mail-list-embed"
                src={previewURL}
                height={previewHeight}
                frameborder="0"
                marginHeight="0"
                marginWidth="0"
            >
                Loading Newsletter Preview...
            </iframe>
        </div>
      </div>
    </div>
  );
}

export default MailListContent