import React,{useState,useEffect} from 'react'
import Todos from '../MyComponent/Todos';
import AddTodo from '../MyComponent/AddTodo';

const Home = () => {
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
    <div className="container mt-5">
         <AddTodo addTodo={addTodo}/>
         <Todos todos={todos} onDelete={onDelete}/>
    </div>
  )
}

export default Home
