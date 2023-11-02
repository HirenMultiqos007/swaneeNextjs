"use client"
import Images from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const ImageLoder = ({ imageData, onClick }) => {
  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const imageLoadingPromises = new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageData;
      image.addEventListener("load", () => {
        resolve(imageData); // Resolve the promise with the loaded item
        setIsLoading(false);
        setUrl(imageData);
      });
      // image.onload = () => {
      //   setIsLoading(false);
      //   setUrl(imageData);
      // };
      // image.addEventListener("error", (error) => {
      //   console.error("Error loading image:", error);
      //   setUrl("")
      //   // reject(error); // Reject the promise if there's an error loading the image
      //   setIsLoading(false)
      // });
    });
    // return () => {
    //   // Clean up event listeners if component unmounts
    //   image.onload = null;
    //   // image.onerror = null;
    // };

  }, []);
  return (
    <>
      {isLoading ? (
        <div className="skeleton-wrapper">
          <Skeleton width="100%" height="100%" className="d-block" />
        </div>
      ) : (
        <Images src={url} alt="url" onClick={onClick} width={384} height={580} key={imageData}/>
      )}
    </>
  );
};

export default ImageLoder;
