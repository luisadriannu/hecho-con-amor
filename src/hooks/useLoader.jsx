import { useState } from "react";

export const useLoader = () => {
  const [loaderGallery, setLoaderGallery] = useState(true);

  setTimeout(() => {
    setLoaderGallery(false);
  }, 6000);

  return [loaderGallery];
};
