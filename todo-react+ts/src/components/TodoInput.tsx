type Props = {
  value: string
  setValue: (v: string) => void
  onSubmit: (title: string) => void
  isEditing: boolean
}

const TodoInput = ({ value, setValue, onSubmit, isEditing }: Props) => {
  return (
    <div className="flex gap-3 mt-4 animate-fade-in">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What’s on your mind?"
        className="flex-1 px-4 py-3 rounded-xl bg-slate-900/70 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      />

      <button
        onClick={() => onSubmit(value)}
        className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-500/20"
      >
        {isEditing ? "Update" : "Add"}
      </button>
    </div>
  )
}

export default TodoInput
