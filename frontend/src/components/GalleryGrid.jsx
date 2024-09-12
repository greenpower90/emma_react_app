import React, {useState} from "react";
import "../styles/gallery.css"
import ModalGallery from "./ModalGallery";



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
         <ModalGallery 
            index={index}
            setIndex={setIndex} 
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            pictureDataAll={pictureDataAll}
            setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>    
    );
}

export default GalleryGrid;