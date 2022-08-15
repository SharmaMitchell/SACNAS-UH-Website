import React from 'react'
import './SocialsBanner.css'

import SACNASInsta from '../../assets/SACNAS-Insta.png';
import SACNASDiscord from '../../assets/SACNAS-Discord.png';
import SACNASFacebook from '../../assets/SACNAS-Facebook.png';
import SACNASTwitter from '../../assets/SACNAS-Twitter.png';
import SACNASLinkedIn from '../../assets/SACNAS-LinkedIn.png';

function SocialsBanner() {
  return (
    <div class="SocialsBanner">
        <div class="socials-container">
            <a href="https://www.instagram.com/uhsacnas/"><img class="social-item" src={SACNASInsta}/></a>
            <a href="#TODO"><img class="social-item" src={SACNASDiscord}/></a>
            <a href="https://www.facebook.com/University-of-Houston-SACNAS-316313025690469/"><img class="social-item" src={SACNASFacebook}/></a>
            <a href="https://twitter.com/uh_sacnas"><img class="social-item" src={SACNASTwitter}/></a>
            <a href="https://www.linkedin.com/company/82377992"><img class="social-item" src={SACNASLinkedIn}/></a>
        </div>
    </div>
  )
}

export default SocialsBanner