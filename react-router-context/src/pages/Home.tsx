import { useTheme } from "../context/ThemeContext"

const Home = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Home</h1>

      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Current theme: <span className="font-semibold">{theme}</span>
      </p>

      <button
        onClick={toggleTheme}
        className="mt-6 px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default Home
