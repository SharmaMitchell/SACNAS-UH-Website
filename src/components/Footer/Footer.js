import React from 'react'
import './Footer.css'
import MailAndMoney from '../MailAndMoney/MailAndMoney'

function Footer() {
  return (
    <div class='footer'>
        <div class="footer-container">
            <div class="brand">
                <a><h1>SACNAS UH</h1></a>
            </div>
            <div class="blurb">
                <p>Society for the Advancement of Chicanos/Hispanics and Native Americans in Science</p>
                <p>University of Houston Chapter</p>
            </div>
            <MailAndMoney />
        </div>
    </div>
  )
}

export default Footer