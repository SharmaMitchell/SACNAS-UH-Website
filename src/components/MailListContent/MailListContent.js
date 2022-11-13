import React from 'react'
import './MailListContent.css'

function MailListContent() {
  return (
    <div>
      <div class="gform-wrapper">
        <iframe
            class="gform"
            src="https://docs.google.com/forms/d/e/1FAIpQLScaahgIdex5tTTZnRiWNXglj62eJ4t9Ut505KCtjWuo55IqTw/viewform?embedded=true"
            // width="700"
            height="1750"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
        >
            Loading…
        </iframe>
      </div>
    </div>
  );
}

export default MailListContent