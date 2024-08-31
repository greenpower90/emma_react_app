import React, {useState} from "react";
import "../styles/gallery.css"

function GalleryGrid(props) {
    const pictureDataAll = props.Src

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    function openModal(selectedImage){
        setSelectedImage(selectedImage)
        setIsModalOpen(true)
    }

    function closeModal(){
        setIsModalOpen(false)
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
                                openModal(pictureData)
                            }} 
                            />
            })}
        </div>

        {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={'http://localhost:5000'+selectedImage.fileLocation.full} alt="Full size" style={{ maxWidth: '100%', height: '100%' }} />
          </div>
        </div>
      )}



    </div>
        
    );
}

export default GalleryGrid;