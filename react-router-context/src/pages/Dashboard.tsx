import { useAuth } from "../context/AuthContext"

const Dashboard = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Overview of your application activity
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide">
            Auth Status
          </h3>
          <p className="mt-3 text-2xl font-semibold">
            {isAuthenticated ? "Logged In" : "Guest"}
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide">
            Projects
          </h3>
          <p className="mt-3 text-2xl font-semibold">3</p>
          <p className="mt-1 text-sm text-gray-500">
            Sample placeholder data
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide">
            Tech Stack
          </h3>
          <p className="mt-3 text-2xl font-semibold">MERN</p>
          <p className="mt-1 text-sm text-gray-500">
            React • Node • MongoDB
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-2">
            Recent Activity
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This section can be connected to backend APIs to show
            real user activity, logs, or analytics.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-2">
            Notes
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Use this space for reminders, tasks, or admin messages.
            Designed as a flexible container.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
