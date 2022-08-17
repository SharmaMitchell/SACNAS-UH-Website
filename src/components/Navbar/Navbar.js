import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Style sheet
import navBarImg from '../../assets/fa_bars.png'

import MailAndMoney from '../MailAndMoney/MailAndMoney';

function Navbar(props) {
  const location = useLocation().pathname;
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
        <nav id="navbar" >
          <div class="navbar-container">
            <div class="nav-bar">
              <Link to='#' class='menu-bars'>
                <img src={navBarImg} onClick={showSidebar} />
              </Link>
              <div class="lhs">
                <div onClick={props.dark} className={`dark-toggle${props.theme === 'dark' ? " dark" : ""}`}>
                  <div class="notch"></div>
                </div>
                <div class="spam">
                  <MailAndMoney />
                </div>
              </div>
              
              <div class="brand">
                <a><h1>SACNAS UH</h1></a>
              </div>
              <div class="nav-list">
                <ul>
                  <li><a class={location==="/" ? "cu-page" : ""} href="/">Home</a></li>
                  <li><a class={location==="/events" ? "cu-page" : ""} href="/events">Events</a></li>
                  <li><a class={location==="/research" ? "cu-page" : ""} href="/research">Research</a></li>
                  <li><a class={location==="/leadership" ? "cu-page" : ""} href="/leadership">Leadership</a></li>
                  { /*<li><a class={location==="/advisors" ? "cu-page" : ""} href="/advisors">Advisors</a></li> */ }
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav class={sidebar ? 'sidebar active' : 'sidebar'}>
          <div class="nav-list">
            <ul class="nav-list-items" onClick={showSidebar}>
              <li><a class={location==="/" ? "cu-page" : ""} href="/">Home</a></li>
              <li><a class={location==="/events" ? "cu-page" : ""} href="/events">Events</a></li>
              <li><a class={location==="/research" ? "cu-page" : ""} href="/research">Research</a></li>
              <li><a class={location==="/leadership" ? "cu-page" : ""} href="/leadership">Leadership</a></li>
              { /*<li><a href="#advisors">Advisors</a></li> */ }
            </ul>
          </div>
        </nav>
        <div class={sidebar ? 'side-blur active' : 'side-blur'} onClick={showSidebar}>
          {/* To click outside of sidebar & close */}
        </div>
    </>
  )
}

export default Navbar