import React from 'react'

export default function Todo({ todo, todoDelete}) {

    console.log(todo)
    return (
        <div>
            <h1>
            {todo.title}
            </h1>
            <p>
            {todo.description}
            </p>
            <button
            onClick={() => todoDelete(todo.id)}
          >
           X
          </button>
        </div>
    )
}
