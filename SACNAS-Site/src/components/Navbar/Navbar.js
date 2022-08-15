import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; // Style sheet
import navBarImg from '../../assets/fa_bars.png'

function Navbar(props) {
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
              <div>
                <div onClick={props.dark} className={`dark-toggle${props.theme === 'dark' ? " dark" : ""}`}>
                  <div class="notch"></div>
                </div>
              </div>
              <div class="spam">
                <h2>Spam</h2>
              </div>
              <div class="brand">
                <a><h1>SACNAS UH</h1></a>
              </div>
              <div class="nav-list">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="/research">Research</a></li>
                  <li><a href="/leadership">Leadership</a></li>
                  { /*<li><a href="#advisors">Advisors</a></li> */ }
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav class={sidebar ? 'sidebar active' : 'sidebar'}>
          <div class="nav-list">
            <ul class="nav-list-items" onClick={showSidebar}>
              <li><a href="/">Home</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/research">Research</a></li>
              <li><a href="/leadership">Leadership</a></li>
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