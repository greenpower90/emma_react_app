import React, { useEffect, useState } from 'react';
//import Navbar from "./components/Navbar"
import Quote from "./components/Quote"
import Mainpicture from './components/Mainpicture';
import "./styles/general.css"
//import ArticleOverview from './components/ArticleOverview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galerie from "./components/Galerie"
import OverviewGrid from "./components/OverviewGrid"
import MainPage from './components/MainPage';
import SortOverview from './components/SortOverview';
import Navbar from './components/Navbar';
import Article from './components/Article';
import { useLocation } from 'react-router-dom';
import About from './components/About';
import GalerieVyber from './components/GalerieVyber';

function App() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    document.title = 'Emma Robinson'
    // Make a GET request to the backend
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        setArticles(data.data.articles)
      });
  }, []);
  
  return (
    <Router>
       <Routes>
        <Route
            path="/"
            element={<MainPage articles={articles} />}
        />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/galerie/vyber" element={<GalerieVyber />} />
          <Route path="/article" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/tipy_na_vylety" element={<SortOverview articles={articles} sortBy='tipy_na_vylety'/>} />
          <Route path="/vzkazy_v_lahvi" element={<SortOverview articles={articles} sortBy='vzkazy_v_lahvi'/>} />
      </Routes>
    </Router>
  );
}

export default App;
