import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import React, { useState, useEffect } from 'react';
function App() {
  const onDelete=(todo) =>{
    console.log("delete",todo);
  
    setTodos(todos.filter((e)=>{
      return e!==todo;

    }));
  }
 const addTodo =(title,desc)=>{
   console.log("added ",title,desc)
   let sno;
   if(todos.length===0){
     sno=1;
   }
   else{
     sno=todos[todos.length-1].sno+1;
   }
   const Mytodo={
     sno:sno,
     title:title,
     desc:desc,
   }
   setTodos([...todos,Mytodo]);
   console.log(Mytodo);
 
  } 

  
const [todos, setTodos] = useState([]);
  return (
    <>
    <Header title="Todo List" name="Home"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} title="Todo-List" onDelete={onDelete}/>
    <Footer/>
    
   
    </>
  );
}

export default App;
