import { useEffect, useState } from "react";
import { getGifs } from "../services/GetGifs";



export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewImages = async ()=>{
    const newData = await getGifs(category);
    setImages(newData);
    setIsLoading(false);
    
  }

  useEffect(() => {
    getNewImages();
    
  }, [])
  

  return {
    images,
    isLoading
  }
}
