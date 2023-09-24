import React, { useState, useEffect, useRef } from "react";
import "./ImageCard.css";
import axios from "axios";
import {Cloudinary} from "@cloudinary/url-gen";

const ImageCard = ({ files }) => {
 
  const containerRef = useRef(null);

  useEffect(()=>{
   if (window && containerRef.current) {
     window.cloudinary.galleryWidget({
       container: containerRef.current,
       cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
       mediaAssets: [
         {tag: "media-gallery"},
       ],
       aspectratio: '16:9',
       carouselStyle : 'indicators',
       carouselLocation : 'bottom'
     })
     
     .render()
   }
  }, [])
  

  return (
    <>
    <div className="">
      <div ref={containerRef} style={{width:"800px", height: '380px', margin: 'auto'}} ></div>
    </div>
      
      {files &&
        files.length > 0 &&
        files.map((f) => {
          return (
            <div className="card">
              {" "}
              <img src={f.preview} alt="" />{" "}
            </div>
          );
        })}
    </>
  );
};

export default ImageCard;
