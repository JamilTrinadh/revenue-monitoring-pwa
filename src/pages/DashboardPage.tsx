import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../app/store"
import { logout } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import KPICards from "../features/dashboard/components/KPICards"
import RevenueChart from "../features/dashboard/components/RevenueChart"
import FiltersBar from "../features/dashboard/components/FiltersBar"
import DrillDownModal from "../features/dashboard/components/DrillDownModal"
import { useState, useCallback } from "react"

export default function DashboardPage() {
  const { role } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleDrillDown = useCallback(() => {
    setOpen(true)
  }, [])


  const handleLogout = () => {
    dispatch(logout())
    sessionStorage.clear()
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Revenue Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-600">
            Role: <strong>{role}</strong>
          </span>
          <button
            onClick={handleLogout}
            className="bg-slate-900 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <FiltersBar />
        <KPICards onDrillDown={handleDrillDown} />
        <RevenueChart />
        {open && <DrillDownModal onClose={() => setOpen(false)} />}
      </main>
    </div>
  )
}
