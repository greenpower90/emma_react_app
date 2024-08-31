import React, { useEffect, useState } from "react";
import GallerySub from "./GallerySub";
import "../styles/gallery_main.css"
import "../styles/gallery.css"

function Galerie() {
  const [galerieData, setGalleryData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetching data from the backend
    fetch("http://localhost:5000/galerie")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from backend:", data.data);
        // Check if the data is an array before setting it
        if (Array.isArray(data.data)) {
          setGalleryData(data.data); // Update state with the fetched data
        } else {
          console.error("Expected array but got:", data.data);
          setGalleryData([]); // Set an empty array if data is not as expected
        }
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
        setGalleryData([]); // Update state in case of error to an empty array
      });
  }, []); // Empty dependency array to run only once when the component mounts




  return (
    <div>
      <h2 id="galleryTitle">Galerie</h2>
      <div id="main-gallery-grid">
        {galerieData.length > 0 ? (
          galerieData.map((galerie, index) => { 
            return <GallerySub
              galerryData={galerieData}
              id={index}
              key={index}
              galleryName={galerie.galleryName}
              galleryPictureSrc={galerie.galleryPicture} // Fixed: Reference individual galerie object
            />}
          )
      ) : (
        <p>No data available</p>
      )}
      </div>
    </div>
  );
}

export default Galerie;
