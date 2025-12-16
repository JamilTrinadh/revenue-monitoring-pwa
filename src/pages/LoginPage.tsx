import { useDispatch } from "react-redux"
import { loginSuccess } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleLogin = (role: "ADMIN" | "VIEWER") => {
    if (loading) return

    setLoading(true)

    setTimeout(() => {
      dispatch(
        loginSuccess({
          role,
          token: "mock-jwt-token",
        })
      )

      sessionStorage.setItem("auth", JSON.stringify({ role }))
      navigate("/dashboard")
      setLoading(false)
    }, 700)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Revenue Monitoring PWA
        </h1>

        <button
          disabled={loading}
          className="w-full bg-slate-900 text-white py-2 rounded mb-3 disabled:opacity-50"
          onClick={() => handleLogin("ADMIN")}
        >
          {loading ? "Logging in..." : "Login as Admin"}
        </button>

        <button
          disabled={loading}
          className="w-full bg-slate-600 text-white py-2 rounded disabled:opacity-50"
          onClick={() => handleLogin("VIEWER")}
        >
          {loading ? "Logging in..." : "Login as Viewer"}
        </button>
      </div>
    </div>
  )
}
