import React, { useEffect, useState } from "react"
import "../styles/gallery_main.css"
import "../styles/gallery.css"
import { Link } from 'react-router-dom';

function GallerySub(props){
    return <div className="gallery-item">
                <Link id={props.id} to={"/galerie/vyber?id="+props.id}>
                    <h3>{props.galleryName}</h3>
                    <img className="gallery-collection-img" src={'http://localhost:5000/'+props.galleryPictureSrc} />
                </Link>
            </div>
}
export default GallerySub