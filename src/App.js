import logo from './logo.svg';
import './App.css';
import Todoinput from './Todoinput';
import { useState } from 'react';
import Todolist from './Todolist';

function App() {
  const[todoList, setList]=useState([])
  const handleclick=(textinput)=>{
    if(textinput !== ""){
      setList([...todoList,textinput])
    }
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...todoList];
    newListTodo.splice(key,1)
    setList([...newListTodo])
  }
  return (
    <div className="main-container">
    <div className="center-container">
      <Todoinput handleclick={handleclick}/>
      <h1 className="app-heading">TODO</h1>
      <hr/>
      {todoList.map((listItem,i)=>{
        return (
          <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
      })}
    </div>
  </div>
  );
}

export default App;
