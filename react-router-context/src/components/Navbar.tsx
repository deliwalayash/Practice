import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tight">
            VibeApp
          </Link>

           <Link
    to="/"
    className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
  >
    Home
  </Link>

          {isAuthenticated && (
            <Link
              to="/dashboard"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          {!isAuthenticated ? (
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
