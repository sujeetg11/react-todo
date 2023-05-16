import React, { useState } from 'react'


const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")


    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("title or Description cannot be blank")
        }
        else{
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="titile" className="form-label">Todo Iitle</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
               
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
