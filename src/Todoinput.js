import React, { useState } from 'react'

function Todoinput(props) {
    const [textinput,setInput]=useState();
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.handleclick(textinput)
            setInput("")
        }
    }
  return (
    <div className="input-container">
    <input
      type="text"
      className="input-box-todo"
      placeholder="Enter your todo"
      value={textinput}
      onChange={e=>{
        setInput(e.target.value)
      }}
      onKeyDown={handleEnterPress}
    />
    <button className="add-btn" 
    onClick={()=>{
      props.handleclick(textinput)
      setInput("")
    }}>+</button>      
  </div>
  )
}

export default Todoinput