import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {

  // As todos added and removed adn many more things we need to maintain a state to todos
  const [todos, setTodos] = useState([]) // default state is empty array

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo) => todo.id !== id)) 
    // basically filtering all todos which doesnt match so removing ids which doesnt match id
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) =>
        prevTodo.id === id ? {...prev, completed : !prevTodo.completed} : prevTodo
      )
    )
  }

  // We use this for - when app start first time then we want this below useEffect to render
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  }, [])

  // Using this one more because when any change in array we want it to again refresh..
  // We can simply add array change in above useEffect but problem = whole will run again 
  // We just want above one to run one on start and not later then that
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
