import AppRouter from "./router/AppRouter"
import { useTheme } from "./context/ThemeContext"
import Navbar from "./components/Navbar"


function App() {
  const { theme } = useTheme()

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
         <Navbar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
