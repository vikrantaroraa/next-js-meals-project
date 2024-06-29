"use client";

import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();

  const imageInputRef = useRef();
  const handlePickClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked Yet!</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image picked by the user" fill />
          )}
        </div>
        <div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/pmg, image/jpg"
            name={name}
            ref={imageInputRef}
            onChange={handleImageChange}
            required
          />
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Pick an image
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
