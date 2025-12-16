import { Routes, Route, Navigate } from "react-router-dom"
import { lazy, Suspense } from "react"
import ProtectedRoute from "./features/auth/ProtectedRoute"

const LoginPage = lazy(() => import("./pages/LoginPage"))
const DashboardPage = lazy(() => import("./pages/DashboardPage"))

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500">Loading application...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  )
}

export default App
