import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {

    // We want tp tracl what user is writing so to tract that 
    const [todo, setTodo] = useState("")

    // Add this todo 
    const {addTodo} = useTodo()

    // When add clicked finctionality
    const add = (e) =>{
        e.preventDefault()
        if(!todo) reteurn 
        addTodo({todo, completed: false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className='flex'>
        
        <input type='text'
               placeholder='Write Todo...'
               className='w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
               value={todo}
               onChange={(e) => setTodo(e.target.value)} 
        />

        <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>
            Add
        </button>

    </form>
  )
}

export default TodoForm