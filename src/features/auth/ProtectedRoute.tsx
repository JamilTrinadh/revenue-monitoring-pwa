import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import type { RootState } from "../../app/store"
import type { ReactNode } from "react"


interface ProtectedRouteProps {
  children: ReactNode
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
