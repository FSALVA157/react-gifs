import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import LoadingSpinner from "./LoadingSpiner";



export const GifGrid = ({category}) => {

  
  const {images, isLoading} = useFetchGifs(category);
  
  
  
  return (
            <>
              <h1 >{category}</h1>              
          
              {
                isLoading
                ? <LoadingSpinner/>
                :null
              }
              
              <div className="card-grid">
              {
                images.map((image) =>(
                  <GifItem key={image.id} image={image}/>
                ))
              }
              </div>                   
                 
            </>
  )
}
