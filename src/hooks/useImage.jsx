import { useState } from "react";

export const useImage = (initialValue = false) => {
  const [modal, setModal] = useState(initialValue);
  const [imgSrc, setImgSrc] = useState("");

  const getImage = (imgSrc) => {
    setImgSrc(imgSrc);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return [modal, imgSrc, getImage, closeModal];
};
