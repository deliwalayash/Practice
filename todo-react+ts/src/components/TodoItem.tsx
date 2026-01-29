import type { Todo } from "../types/todo"

type Props = {
  todo: Todo
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
  startEdit: (todo: Todo) => void
}

const TodoItem = ({ todo, toggleTodo, deleteTodo, startEdit }: Props) => {
  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      className="flex cursor-pointer items-center justify-between bg-white/5 hover:bg-white/10 backdrop-blur rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.01]"
    >
      <span className={`flex-1 mr-4 ${todo.completed ? "line-through text-slate-400" : ""}`}>
        {todo.title}
      </span>

      <div className="flex items-center gap-3 bg-black/20 px-3 py-1 rounded-lg">

        <span>{todo.completed ? "✅" : "⏳"}</span>

        <button
          onClick={(e) => {
            e.stopPropagation()
            startEdit(todo)
          }}
          className="hover:scale-110 transition"
        >
          ✏️
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            deleteTodo(todo.id)
          }}
          className="hover:scale-110 transition"
        >
          🗑
        </button>

      </div>
    </div>
  )
}

export default TodoItem
