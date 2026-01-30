import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Home = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Build scalable React apps <br />
          <span className="text-indigo-600">the right way</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A modern React + TypeScript starter with routing, authentication,
          global theme, and clean architecture — inspired by real-world MERN
          workflows.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
            >
              Go to Dashboard
            </Link>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold">React Router v6</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Clean multi-page navigation with protected routes and programmatic
            redirects.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold">Context API</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Global theme and authentication state without Redux or boilerplate.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold">Production Ready</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Structured like real MERN applications used in professional teams.
          </p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="mt-24 text-center">
        <p className="text-sm text-gray-500">
          Built with ❤️ using React, TypeScript & Tailwind
        </p>
      </section>
    </div>
  )
}

export default Home
