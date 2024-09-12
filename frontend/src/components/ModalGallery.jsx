import React, {useState} from "react";
import "../styles/gallery.css"

function ModalGallery(props){ //index, selectedImage, closeModal, pictureDataAll
  
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
            <div onClick={()=>{previousPicture(props.index)}} style={{color: "white", cursor: "pointer"}}>PREVIOUS</div>
            <div className="modal-content">
              <img onClick={closeModal} src={'http://localhost:5000'+props.selectedImage.fileLocation.full} alt="Full size" style={{ maxWidth: '100%', height: '100%' }} />
            </div>
            <div onClick={()=>{nextPicture(props.index)}} style={{color: "white", cursor: "pointer"}}>NEXT</div>
          </div>
  }

  export default ModalGallery

