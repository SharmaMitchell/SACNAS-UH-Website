import React from 'react'
import './MailAndMoney.css'

import SACNASEmail from '../../assets/SACNAS-Email.png';
import SACNASMailList from '../../assets/SACNAS-Mail-List.png';
import SACNASDonate from '../../assets/SACNAS-Donate-Alt.png';

function MailAndMoney() {
  return (
    <div class="mnm">
        <div class="mnm-container">
            <a href="mailto:UH.sacnas@gmail.com"><img class="mnm-item email" src={SACNASEmail}/></a>
            <a href="https://docs.google.com/forms/d/1-SeoYFAoiSlfEbw1fAaSH6szb5Ss_eFMAFqCEnePXIc/viewform"><img class="mnm-item list" src={SACNASMailList}/></a>
            <a href="https://www.paypal.com/donate?token=iCBTsPT1wiq46YSnMTHP32dWC5ReQzcEekkuCXQ_llQC1yHkdxzsW5ycjYgGPPYavfm945p4x1k2gsVs"><img class="mnm-item donate" src={SACNASDonate}/></a>
        </div>
    </div>
  )
}

export default MailAndMoney