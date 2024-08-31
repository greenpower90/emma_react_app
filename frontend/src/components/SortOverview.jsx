import React from "react"
import OverviewGrid from "./OverviewGrid"

function SortOverview({ articles, sortBy }){
    const sortArticles = articles.filter((article)=>article.cathegory.id ===sortBy)
    const title = sortArticles[0].cathegory.name
    return <div>
      <h1>{title}</h1>
      <OverviewGrid articles={sortArticles}/>
    </div>
  }

export default SortOverview