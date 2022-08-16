import React from 'react'
import './Banner.css'
import SacnasLogo from '../../assets/SACNASUH-Crop.png';

function Banner() {
  return (
    <div id="banner">
        <div class="banner-container">
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