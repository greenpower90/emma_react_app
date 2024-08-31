import React from "react";
import "../styles/gallery.css"

function GalleryGrid(props) {
    const pictureDataAll = props.Src
    return (
        <div className="gallery-grid js-gallery-grid">
            {pictureDataAll.map((pictureData, index)=>{
                return <img src={'http://localhost:5000'+pictureData.fileLocation.small} 
                            id={pictureData.id} 
                            key={index}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            className={`gallery-img ${pictureData.dimension.spanCollumn} ${pictureData.dimension.spanRow} `} 
                            />
            })}
        </div>
    );
}

export default GalleryGrid;