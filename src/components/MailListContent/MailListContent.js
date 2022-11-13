import React, {useState, useEffect} from 'react'
import './MailListContent.css'

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function MailListContent() {
  
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  let iFrameHeight = "1750";
  if (windowSize.innerWidth <= 320){
    iFrameHeight = "2500";
  }
  else if (windowSize.innerWidth <= 380){
    iFrameHeight = "2200";
  }
  else if (windowSize.innerWidth <= 500){
    iFrameHeight = "2000";
  }
  else if (windowSize.innerWidth < 768){
    iFrameHeight = "1850";
  }

  return (
    <div>
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
    </div>
  );
}

export default MailListContent