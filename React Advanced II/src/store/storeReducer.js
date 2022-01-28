
const types = {
    todoAdd:"TODO_ADD",
    todoReset:"TODO_RESET",
}


const initialStore = {
    todos: [ {
        id: 1,
        title: "todo #1",
        description: "desc del todo1",
        completed: false,
      },
      {
        id: 2,
        title: "todo #2",
        description: "desc del todo2",
        completed: true,
      }, ]
}


const storeReducer = ( state, action )=> {
    switch(action.type) {
        case types.todoReset: 
        return {
            ...state, todos: []
        }
        case types.todoAdd: 
        return {
            ...state, todos: [...state.todos, action.payload ]
              };
        default:
            return state
    }

}

export { initialStore, types }
export default storeReducer