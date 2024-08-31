import React from "react"
//import "../styles/general.css"
import { Link } from 'react-router-dom';

function ArticleOverview(props){
    
    return <div className={`article-container ${props.dimension}`}>

        <div className="article-container-top">
        <Link to={`/${props.cathegoryId}`}>
            <div className="category"> {props.cathegoryName}</div>
        </Link>  
        <div className="author-and-date-container">
            <div className="date-of-article">{props.date}</div>
        </div>
        </div>

        <Link to={`/article?id=${props.articleId}`}>
            <img className="overview-picture" 
                    src={props.imgSrc}
                    alt={props.imgAlt}
                />
            <div className="article-title">{props.articleTitle}</div>
            <div className="article-overview cursor-pointer">
                {props.articleOverview}
            </div>
            <div className="continue-reading-link">Číst dále</div>
        </Link>  
    </div>
}

export default ArticleOverview