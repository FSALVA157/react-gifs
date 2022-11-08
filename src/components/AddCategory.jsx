import { useState } from 'react';

export function AddCategory({onAddCategory}) {

  const [inputValue, setInputValue] = useState("")

  const handlerOnChange = (e) => {
        //value = e.target.value;
        setInputValue(e.target.value);
  }

  const onSubmitForm = (e)=>{
    e.preventDefault();    
    if(inputValue.trim().length <= 1) return;

    onAddCategory( inputValue.trim());
    setInputValue("");
  }

  return (
    // <form onSubmit={(event)=>onSubmitForm(event)} >
    <form onSubmit={onSubmitForm} > 
      <input
          type="text"
          placeholder="buscar gifs"
          value={inputValue}
          onChange= {(event)=>handlerOnChange(event)}
      />
    </form>
  )
}
