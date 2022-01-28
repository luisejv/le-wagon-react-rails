import React , {useContext, useState} from 'react'
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';

const initialFormValue = {
    title: "",
    description: "",
  };

export default function TodoForm() {
    
    const [ store, dispatch ] = useContext(StoreContext)
    
    const [ formValue, setFormValue ] = useState(initialFormValue)
    const { title, description } = formValue;
    

    const handleInputChange = (e) => {
        const changedFormValues = {
          ...formValue,
          [e.target.name]: e.target.value,
        };
    
        setFormValue(changedFormValues);
      };

      const handleSubmit = (e) => {
          e.preventDefault();

          const newTodo = {
            id: Date.now(),
            ...formValue,
            completed: false,
          };

          dispatch({ 
            type: types.todoAdd, 
            payload : newTodo
        })
          setFormValue(initialFormValue);
      };
      
      console.log(" soy store", store)

    return (
        <div>
            soy un Form
            <form onSubmit={handleSubmit}>
            <input 
        type="text"
        placeholder="Titulo"
        name="title"
        value={title}
        onChange={handleInputChange}/>
        <textarea 
        placeholder="Descripcion"
        name="description"
        value={description}
        onChange={handleInputChange}
        > </textarea>
            <button > agregar </button>
            </form>
            <div> soy la</div>
        </div>
    )
}
