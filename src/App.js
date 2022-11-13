import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Home from './pages/Home';
import Events from './pages/Events';
import Research from './pages/Research';
import Leadership from './pages/Leadership';
import Donate from './pages/Donate';
import SocialsBanner from './components/SocialsBanner/SocialsBanner'
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import FloatingBanner from './components/FloatingBanner/FloatingBanner';
import DonateImg from './assets/SACNAS-Donate-Alt.png';
import './App.css';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <ScrollToTop />
        <Navbar dark={switchTheme} theme={theme}/>
        <Banner />
        <FloatingBanner 
          img={DonateImg}
          paragraph={<p><b>#GivingTuesday</b>: Support your favorite, award-winning STEM 
          student org & help us continue to strive for greatness.</p>}
          bgColor={`var(--teal)`}
          label='GivingTuesday2022'
        />
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/research' element={<Research/>} />
          <Route path='/leadership' element={<Leadership/>} />
          <Route path='/donate' element={<Donate/>} />
        </Routes>
        <SocialsBanner />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
