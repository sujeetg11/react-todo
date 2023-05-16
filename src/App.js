// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header";
import Todos from './MyComponent/Todos';
import AddTodo from './MyComponent/AddTodo';
import About from './MyComponent/About';
import Footer from './MyComponent/Footer';
import React, {useState, useEffect, useLayoutEffect, useInsertionEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null) {
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log('this item is deleted', todo)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos" , JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc)
    let sno;
    if(todos.length==0){
      sno =1;
    }
    else{
    sno =todos[Todos.length -1].sno +1 ;
    }
    const myTodo ={
      sno : sno,
      title : title,
      desc : desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos));
  }, [todos])

  
  return (
    <>
    <Router>
    <Header title="this to do"   searchBar={false}  />
    <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
             <AddTodo addTodo={addTodo}/>
             <Todos todos={todos} onDelete={onDelete}/>
             </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
      </Switch>

   


    <Footer />
    </Router>
    </>

  );
}

export default App;
