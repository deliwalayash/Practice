import { useAuth } from "../context/AuthContext"

const Dashboard = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Home Dashboard</h1>
      <p className="mt-2">
        Authenticated: {isAuthenticated ? "Yes" : "No"}
      </p>
    </div>
  )
}

export default Dashboard
