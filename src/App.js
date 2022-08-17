import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Home from './pages/Home';
import Events from './pages/Events';
import Research from './pages/Research';
import Leadership from './pages/Leadership';
import Footer from './components/Footer/Footer';
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
        <Navbar dark={switchTheme} theme={theme}/>
        <Banner />
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/research' element={<Research/>} />
          <Route path='/leadership' element={<Leadership/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
