import React from "react";

function ModalBtn(props){
    return <div 
              onClick={props.ClickFunction} 
              className={`modal-btn ${props.style}`}
                >{props.text}
            </div>
} 

export default ModalBtn