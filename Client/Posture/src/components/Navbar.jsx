// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  return (
    <nav className="rounded-xl flex flex-row bg-gray-800/40 border border-gray-700 p-1 mb-8">
      <h1 className="text-xl font-semibold p-2 mx-8">IOT Smart Posture</h1>

      <div className="flex flex-row gap-8 items-center">
        <Link
          to="/"
          className={`text-lg font-medium p-2 transition-all duration-200 ${
            location.pathname === "/" ? "text-blue-400" : "text-white hover:text-blue-400"
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/reports"
          className={`text-lg font-medium p-2 transition-all duration-200 ${
            location.pathname === "/reports" ? "text-blue-400" : "text-white hover:text-blue-400"
          }`}
        >
          Reports
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
