import React from "react"
import ArticleOverview from './ArticleOverview';
import Navbar from "./Navbar";
import Intermezzo from "./Intermezzo";

function OverviewGrid({ articles }){
    return <div className="bottom-part-main-grid">
        <div className="articles-bottom-left-grid js-articles-bottom-left-grid">
        {articles.length > 0 ? (
                          articles.map((article, index) => {
                            if(article.cathegory.id !== 'intermezzo'){
                              return <ArticleOverview 
                              key={index}
                              articleId={article.articleId}
                              cathegoryId={article.cathegory.id}
                              cathegoryName={article.cathegory.name}
                              dimension={article.dimension}
                              date={article.date} 
                              imgSrc={article.picture}
                              articleTitle={article.title}
                              articleOverview={article.text}
                            />
                            }
                            else if(article.cathegory.id === 'intermezzo'){
                              return <Intermezzo 
                                addStyle={article.addStyle} 
                                dimension={article.dimension} 
                                text={article.text} 
                                title={article.title} 
                              />
                            }
                          }
                          )
                          ) : (
                            <p>Loading articles...</p>
                          )}
                        
        </div>
        <Navbar />
    </div>
  }

  export default OverviewGrid