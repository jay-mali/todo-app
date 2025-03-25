import { useState } from 'react'

function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (!editText.trim()) return
    onEdit(todo.id, editText)
    setIsEditing(false)
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ flex: 1, marginRight: '10px' }}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <div
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              flex: 1
            }}
          >
            <p>{todo.text}</p>
          </div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default ToDoItem
