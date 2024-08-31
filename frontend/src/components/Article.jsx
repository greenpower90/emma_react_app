import React, {useEffect, useState} from "react"
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar"
import "../styles/article.css"

const localHost = 'http://localhost:5000/'

function Article(){
  const [data, setArticleData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    console.log('ID')
    console.log(id)

    console.log(`${localHost}$id?=/${id}`)

    // Make a GET request to the backend
    fetch(`http://localhost:5000/article?id=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        //console.log("Data from backend:", data.data);
        setArticleData(data.data)
        setLoading(false);
        //console.log(data.data)
        // document.title = 'O mě'
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

  if (!data) {
    return <p>No data available</p>;
  }

  //console.log(data)



    console.log(`http://localhost:5000/${data.pictureLink}`)
    return <main className="page">
                <div className="content">
                    <div className="content-article">
                        {/* <!--grid na rozdělení článku a MENU--> */}
                        <div className="article-grid">
                        <div className="article-part">
                                                
                            <h1 className="inside-article-title js-title">{data.title}</h1>
                            <img src={`http://localhost:5000/${data.picture}`} />
                            <img style={{ width: '100%', objectFit: 'cover', marginBottom: '15px' }} src={data.pictureLink} />
                            <p>{data.articleText}</p>
                        </div>
                        <Navbar />        
                        </div>
                    </div>
                </div>
            </main>
}
export default Article