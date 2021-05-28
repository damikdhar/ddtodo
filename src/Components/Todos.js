import React from 'react'
import TodoItems from "../Components/TodoItems";

function Todos(props) {
    return (
        <>
            <div className="container">
                <h3 className="text-center">{props.title}</h3>
<div className="text-center">
                {props.todos.length === 0 ? "No Todos to Display" :
                    props.todos.map((todo) => {

                        return(
                            <>

                         <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
                        </>
                        )



                    })
                }</div>
            </div>
        </>
    );

}

export default Todos
