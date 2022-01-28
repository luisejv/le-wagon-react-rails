import React, { useContext } from 'react'
import { StoreContext } from '../store/StoreProvider'
import { types } from '../store/storeReducer'
import Todo from './Todo'
import TodoForm from "./TodoForm"

export default function TodoList() {

  const [ store, dispatch ] = useContext(StoreContext)

    const { todos } = store

    const handleReset = ()=>{
        dispatch({ type: types.todoReset })
    }

    console.log(" soy store", store)
    
    return (
        <div>
             <h2> soy todo list</h2>
      {todos.length === 0 ? (
        <div>
          No hay tareas. Porfavor agrega una{":)"}
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
          />
        ))
      )}
      <button
            onClick={handleReset}
          >
           X
          </button>
          <TodoForm />
        </div>
    )
}
