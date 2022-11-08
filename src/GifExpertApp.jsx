import { useState } from "react";
import { AddCategory, GifGrid} from './components';



export const GifExpertApp = () => {


const [categories, setCategories] = useState(['Dragon Ball']);

const addCategory = (value) =>{    
  if(categories.includes(value)) return;

    setCategories([...categories,value]);
}

  return (
    <>
        {/* <titulo/> */}
        <h1>GifExpertApp</h1>
        
        <AddCategory onAddCategory={value => addCategory(value)}></AddCategory>

        
        {/* <listado de categorias/> */}
        
            {categories.map((category)=>
              <GifGrid category={category} key={category}/>
                
            )
            }
        
       
    </>
  )
}
