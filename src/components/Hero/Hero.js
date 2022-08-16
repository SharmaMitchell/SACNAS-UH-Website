import React from 'react'
import './Hero.css'; 
import SacnasLogo from '../../assets/SACNASUH-Crop.png';

function Hero() {
  return (
    <>
        <div id="hero">
            <div class="hero-container">
                <div class="hero-logo">
                  <img src={SacnasLogo}/>
                </div>
                <div class="hero-text">
                  <h1>SACNAS UH</h1>
                  <h2>Celebrating Scientific Research and  diversity in stem</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero