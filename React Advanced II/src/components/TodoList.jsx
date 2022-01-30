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
    
    return (
        <div>
          <h2> TODO LIST</h2>
            { todos.map((todo) => ( 
                  <Todo todo={todo} key={todo.id} /> 
          )) }

          <button onClick={handleReset} >
           Reset All
          </button>
          <TodoForm />
        </div>
    )
}
