import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate("/dashboard")
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center">
          Welcome back
        </h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          Login to access your dashboard
        </p>

        {/* Form (UI only, fake auth for now) */}
        <div className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          This is a demo auth flow using Context API
        </p>
      </div>
    </div>
  )
}

export default Login
