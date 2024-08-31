import React, { useEffect, useState } from "react"
import "../styles/general.css"

function Quote(){
    const [quote, setQuote] = useState({
        id:'',
        text: '',
        writer:'',
        totalQty: ''
    })

    useEffect(() => {
        // Make a GET request to the backend
        fetch('http://localhost:5000/random-quote')
          .then(response => response.json())
          .then(data => {
            //console.log("Data from backendSSS:", data.data);
            setQuote({
                id: data.data.quote.id,
                text: data.data.quote.quote,
                writer:data.data.quote.writer,
                totalQty: data.data.quotesQty
            })
          });
      }, []);
    
    //console.log('UPDATESTATE', quote)

    function nextQuote(quoteId, totalQty){
        const nextQuote = quoteId +1 > totalQty ? 1 : quoteId +1
        //console.log(nextQuote)
        fetch(`http://localhost:5000/quote?id=${nextQuote}`)
              .then(response => response.json())
              .then(data => {
                //console.log("Data from backendSSS:", data.data);

                setQuote({
                    id: data.data.quote.id,
                    text: data.data.quote.quote,
                    writer:data.data.quote.writer,
                    totalQty: data.data.quotesQty
                })
              });
    }
    function previousQuote(quoteId, totalQty){
        const previousQuote = quoteId -1 < 1 ? totalQty : quoteId - 1
        //console.log(nextQuote)
        fetch(`http://localhost:5000/quote?id=${previousQuote}`)
              .then(response => response.json())
              .then(data => {
                //console.log("Data from backendSSS:", data.data);
                setQuote({
                    id: data.data.quote.id,
                    text: data.data.quote.quote,
                    writer:data.data.quote.writer,
                    totalQty: data.data.quotesQty
                })
              });
    }
    return <div class="div-quote">
                <div class="quote">
                    {quote.text}
                </div>
                <div class="writer">
                    {quote.writer}
                </div>
                <img onClick={()=>{
                    nextQuote(quote.id, quote.totalQty)
                }} src="../icons/arrow_next_right_icon.png" class="button-citat-right js-button-citat-right" id="Nbtn" />
                <img onClick={()=>{
                    previousQuote(quote.id, quote.totalQty)}} src="../icons/arrow_next_left_icon.png" class="button-citat-left js-button-citat-left" id="Pbtn"/>
            </div>
}
export default Quote