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
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      {/* Left */}
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-bold">
          VibeApp
        </Link>

        {isAuthenticated && (
          <Link
            to="/dashboard"
            className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
          >
            Dashboard
          </Link>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        {!isAuthenticated ? (
          <Link
            to="/login"
            className="px-4 py-1 rounded bg-indigo-600 text-white text-sm"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-1 rounded bg-red-600 text-white text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
