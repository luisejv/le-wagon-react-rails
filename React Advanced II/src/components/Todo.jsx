import React, { useState}from 'react'


export default function Todo({todo}) {
    
    const [ done, setDone ] = useState(false)

    return (
        <div>
            <h1>
            {todo.title}
            </h1>
            <p>
            {todo.description}
            </p>
            <button 
            onClick={()=>setDone(!done)} 
            style={ { background : done ? "green":"salmon"}}
            > DONE </button>
        </div>
    )
}
