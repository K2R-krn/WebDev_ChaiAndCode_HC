import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // Not required just for practice
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            complete: 'false'
        }
    ],

    // Functionality as well
    addTodo: (todo) => {},
    updateTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    toggleComplete:(id) => {}
})

// This hook basically just return another context but advantage is that 
export const useTodo =() =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider