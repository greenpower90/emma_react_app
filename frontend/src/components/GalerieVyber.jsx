import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import GalleryGrid from "./GalleryGrid";
import "../styles/gallery.css"
import "../styles/gallery_main.css"
import "../styles/image.css"

function GalerieVyber() {
    const [data, setGalleryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        let id = queryParams.get('id');
        console.log('ID:', id);

        if (id) {
            fetch(`http://localhost:5000/galerie/${id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("Data from backend:", data.data);
                    setGalleryData(data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching gallery data:", error);
                    setError(error.message);
                    setLoading(false);
                });
        } else {
            setLoading(false);
            setError("No ID provided in the URL");
        }
    }, [location]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return data ? <div>
        <h2>{data.galleryName}</h2>
        <GalleryGrid Src={data.galleryData}/></div> : <p>No data available</p>;
}

export default GalerieVyber;
