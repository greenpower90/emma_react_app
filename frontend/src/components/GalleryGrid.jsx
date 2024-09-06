import React, {useState} from "react";
import "../styles/gallery.css"

function GalleryGrid(props) {
    const pictureDataAll = props.Src

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [index, setIndex] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);

    function openModal(selectedImage, index){
        setSelectedImage(selectedImage)
        setIsModalOpen(true)
        setIndex(index)
    }

    function closeModal(){
        setIsModalOpen(false)
    }

    function nextPicture(index){
      const newIndex = index + 1 < pictureDataAll.length ? index + 1 : 0
      setIndex(newIndex)
      setSelectedImage(pictureDataAll[newIndex])
    }

    function previousPicture(index){
      const newIndex = index - 1 < 0 ? pictureDataAll.length -1 : index - 1
      setIndex(newIndex)
      setSelectedImage(pictureDataAll[newIndex])
    }

    return (<div>
        <div className="gallery-grid js-gallery-grid">
            {pictureDataAll.map((pictureData, index)=>{
                return <img src={'http://localhost:5000'+pictureData.fileLocation.small} 
                            id={pictureData.id} 
                            key={index}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            className={`gallery-img ${pictureData.dimension.spanCollumn} ${pictureData.dimension.spanRow} `}
                            onClick={()=>{
                                openModal(pictureData, index)
                            }} 
                            />
            })}
        </div>

        {isModalOpen && (
        <div className="modal" >
          <div onClick={()=>{previousPicture(index)}} style={{color: "white"}}>PREVIOUS</div>
          <div className="modal-content">
            <img onClick={closeModal} src={'http://localhost:5000'+selectedImage.fileLocation.full} alt="Full size" style={{ maxWidth: '100%', height: '100%' }} />
            
          </div>
          <div onClick={()=>{nextPicture(index)}} style={{color: "white"}}>NEXT</div>
        </div>
      )}



    </div>
        
    );
}

export default GalleryGrid;