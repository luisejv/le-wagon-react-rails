import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, todoDelete}) {
    return (
        <div>
             <h2> TODO LIST </h2>
      {todos.length === 0 ? (
        <div>
          No hay tareas. Porfavor agrega una{":)"}
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
          />
        ))
      )}
        </div>
    )
}
