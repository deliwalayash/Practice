import { useState } from "react"
import type { Todo } from "./types/todo"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [inputValue, setInputValue] = useState("")

  const addOrUpdateTodo = (title: string) => {
    if (!title.trim()) return

    if (editingId !== null) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editingId ? { ...todo, title } : todo
        )
      )
      setEditingId(null)
      setInputValue("")
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        title,
        completed: false
      }
      setTodos(prev => [...prev, newTodo])
      setInputValue("")
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id)
    setInputValue(todo.title)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 border border-white/10 p-8 animate-fade-in">

        <h1 className="text-3xl font-bold tracking-wide text-indigo-400 mb-6 flex items-center gap-2">
          🚀 Todo App
        </h1>

        <TodoInput
          value={inputValue}
          setValue={setInputValue}
          onSubmit={addOrUpdateTodo}
          isEditing={editingId !== null}
        />

        <div className="mt-6 space-y-3">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              startEdit={startEdit}
            />
          ))}

          {todos.length === 0 && (
            <p className="text-center text-slate-400 text-sm mt-6">
              ✨ Your list is empty. Add something beautiful.
            </p>
          )}
        </div>

      </div>
    </div>
  )
}

export default App
