import React, { useEffect, useState } from "react"
import Mainpicture from "./Mainpicture"
import Quote from "./Quote"
import OverviewGrid from "./OverviewGrid"

function MainPage(){
  const [randomPicture, setRandomPicture] = useState('')
//   const [randomQuote, setRandomQuote] = useState('')
//   const [randomWriter, setRandomWriter] = useState('')
  const [articles, setArticles] = useState([])

  useEffect(() => {
    document.title = 'Emma Robinson'
    // Make a GET request to the backend
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        //console.log("Data from backend:", data.data);
        setRandomPicture(data.data.src)
        // setRandomQuote(data.data.quote.quote)
        // setRandomWriter(data.data.quote.writer)
        setArticles(data.data.articles)
        
      });
  }, []);
    console.log(articles[0])
    return <div className="main-page">
              <Mainpicture src={randomPicture} />
              <p className="web-title">Emma Robinson & Kuba z Duba</p>
              <p className="undertitle">Neuvěřitelná dobrodružství od plotny</p>
              <Quote />
              <OverviewGrid articles={articles}/>
                <h1>FOOTER</h1>
            </div>
    }

export default MainPage