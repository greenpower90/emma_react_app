import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function About() {
    const [articleData, setArticleData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Make a GET request to the backend
      fetch('http://localhost:5000/about')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setArticleData(data.data); // Assuming 'data' is the correct structure
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    if (!articleData) {
      return <p>No data available</p>;
    }
  
    // Access properties directly if 'articleData' is the correct structure
    const { title, pictureLink, articleText } = articleData;
  
    return (
      <main className="page">
        <div className="content">
          <div className="content-article">
            <div className="article-grid">
              <div className="article-part">
                <h1 className="inside-article-title js-title">{title}</h1>
                <img
                  style={{ width: '100%', objectFit: 'cover', marginBottom: '15px' }}
                  src={pictureLink}
                  alt={title}
                />
                <p>{articleText}</p>
              </div>
              <Navbar />
            </div>
          </div>
        </div>
      </main>
    );
  }

  export default About