import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Research from "./pages/Research";
import Leadership from "./pages/Leadership";
import Resources from "./pages/Resources";
import Article from "./pages/Article";
import Donate from "./pages/Donate";
import MailList from "./pages/MailList";
import SocialsBanner from "./components/SocialsBanner/SocialsBanner";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light",
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <ScrollToTop />
        <Navbar dark={switchTheme} theme={theme} />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/research" element={<Research />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/maillist" element={<MailList />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <SocialsBanner />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
