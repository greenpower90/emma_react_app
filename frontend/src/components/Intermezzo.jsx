import React from 'react'

function Intermezzo(props){
    return <div className={`article-container ${props.dimension} ${props.addStyle}`}>
    <div class="article-title"> {props.title} </div>
    <div class="article-overview">
      <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
    </div>
</div>
}

export default Intermezzo