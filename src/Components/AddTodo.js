import React, { useState } from 'react';

function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
    <>      
        <div className="container my-3" >      
            <form onSubmit={submit}>
                <div className="row mb-3">
                    <label for="title" className="col-sm-1 col-form-label">Todo-Title</label>
                    <div className="col-sm-4">
                        <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                    </div>
                </div>
                    
                        <div className="row mb-3">
                            <label for="desc" className="col-sm-1 col-form-label">Todo-Desc</label>
                                        <div className="col-sm-4">
                                       <input type="text"  value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc"/></div>
                                 
                         </div>    
       
      
                                        
  
                                    
     
                                        <button type="submit" className="btn btn-primary">Add</button>
           </form>
        </div>
    </>

)
}

export default AddTodo
