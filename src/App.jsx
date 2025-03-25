import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import AddToDo from './components/AddToDo'

function App() {
  const [todos, setTodos] = useState([]) 

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
    setTodos(updatedTodos)
  }

  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <AddToDo onAdd={addTodo} />
      <ToDoList
        todos={todos}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  )
}

export default App
