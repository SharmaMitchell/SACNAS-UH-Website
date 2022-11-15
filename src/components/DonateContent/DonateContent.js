import React from 'react'
import './DonateContent.css'
import SACNASGroup from '../../assets/SACNAS-Group.jpg';
import DonateButton from './DonateButton';
import paypalButton from '../../assets/paypal-donate-button-black-crop.png';

function DonateContent() {
  return (
    <div class="donate-wrapper">
        <div class="donate-container">
            <div class="donate-text">
                <div class="donate-title">
                    <h2>Donation</h2>
                </div>
                <div class="donate-paragraph">
                    <p>Thank you for choosing to donate to SACNAS UH. By supporting us, you enable us to host cultural and educational events, facilitate community outreach, and help foster an environment to promote equity of opportunity in STEM. </p>
                    <p>Previous donations have been put towards impactful activities including Asia Fest, a celebration of Asian American and Pacific Islander heritage month, community field trips around houston including Brazos Bend State Park and the Houston Museum of Natural Science, and more.</p>
                    <p>With the help of our generous donors, we hope to host bigger and better events moving forward, to share the diverse cultures of our community. </p>
                </div>
            </div>
            <div class="donate-image border">
                <img src={SACNASGroup}/>
                <div class="donate-thanks">
                    <h3>Thank You From SACNAS UH!</h3>
                </div>
            </div>
        </div>
        <div class="donate-button-container paypal">
            <a href="https://paypal.me/SACNASUH/">
                <img src={paypalButton} />
            </a>
            </div>
        <div class="donate-button-list">
            <DonateButton amount="25"/>
            <DonateButton amount="50"/>
            <DonateButton amount="100"/>
            <DonateButton amount="250"/>
            <DonateButton amount="500"/>
            <DonateButton amount=""/>
        </div>
    </div>
  )
}

export default DonateContent