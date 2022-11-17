import React from 'react'
import {useLocation} from 'react-router-dom';
import './Banner.css'
import SacnasLogo from '../../assets/SACNASUH-Crop.png';

/* Top banner component, with SACNAS Logo, UH Background, etc. */
function Banner() {
  const location = useLocation().pathname; /* Page location for larger banner size on homepage */
  return (
    <div id="banner" class={location === "/" ? "banner home" : "banner"}>
        <div class={location === "/" ? "banner-container home" : "banner-container"}>
            <div class="banner-text">
                <h1>SACNAS UH</h1>
                <h2>Celebrating Scientific Research  and diversity in stem</h2>
            </div>
            <div class="banner-logo">
                <img src={SacnasLogo}/>
            </div>
        </div>
    </div>
  )
}

export default Banner