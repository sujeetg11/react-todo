import React from 'react'
import {TodoItem} from './TodoItem';

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin : "20px auto"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center'>Todos List</h3>

      {props.todos.length===0? 'No Todos to display' : 
      props.todos.map((todo, index)=>{
        return( <TodoItem key={index} todo={todo} onDelete={props.onDelete}/> )
      })
        }
      

    </div>
  )
}

export default Todos
