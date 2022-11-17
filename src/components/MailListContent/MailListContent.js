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
                marginheight="0"
                marginwidth="0"
                // scrolling='no'
            >
                Loading…
            </iframe>
        </div>
        <div class="mail-list-preview">
            <iframe 
                class="mail-list-embed"
                src="https://us3.campaign-archive.com/?u=9725fd8683bb429d5d3d28d33&id=1bd21a8dd5"
                height={previewHeight}
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            >
                Loading Newsletter Preview...
            </iframe>
        </div>
      </div>
    </div>
  );
}

export default MailListContent