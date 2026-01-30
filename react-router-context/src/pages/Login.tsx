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
    <div className="p-8">
      <h1 className="text-3xl font-bold">Login</h1>

      <button
        onClick={handleLogin}
        className="mt-6 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
      >
        Login
      </button>
    </div>
  )
}

export default Login
