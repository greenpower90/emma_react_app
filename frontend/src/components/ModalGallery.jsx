import React, {useState} from "react";
import "../styles/gallery.css"
import ModalBtn from "./ModalBtn";

function ModalGallery(props){ //index, setIndex, selectedImage, setSelectedImage, pictureDataAll, setIsModalOpen
  
    function nextPicture(index){
      const newIndex = index + 1 < props.pictureDataAll.length ? index + 1 : 0
      props.setIndex(newIndex)
      props.setSelectedImage(props.pictureDataAll[newIndex])
    }
  
    function previousPicture(index){
      const newIndex = index - 1 < 0 ? props.pictureDataAll.length -1 : index - 1
      props.setIndex(newIndex)
      props.setSelectedImage(props.pictureDataAll[newIndex])
    }

    function closeModal(){
      props.setIsModalOpen(false)
  }
  
  
    return <div className="modal" >
            <ModalBtn ClickFunction={closeModal}
                      style="close-modal-btn"
                      text="X"
                      />
            <ModalBtn ClickFunction={()=>{previousPicture(props.index)}}
                      style="btn-left"
                      text="předchozí"
                      />
            <ModalBtn ClickFunction={()=>{nextPicture(props.index)}}
                      style="btn-right"
                      text="další"
                      />
            <div className="modal-content">
              <img  src={'http://localhost:5000'+props.selectedImage.fileLocation.full} alt="Full size" style={{ maxWidth: '100%', height: '100%' }} />
            </div>
            
          </div>
  }

  export default ModalGallery

