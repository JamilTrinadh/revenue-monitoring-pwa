import { memo } from "react"

const KPICards = ({
  onDrillDown,
}: {
  onDrillDown: () => void
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        onClick={onDrillDown}
        className="bg-white p-6 rounded-xl shadow cursor-pointer"
      >
        <p className="text-sm text-slate-500">Total Revenue</p>
        <h2 className="text-2xl font-bold mt-2">₹12.4M</h2>
        <p className="text-sm text-green-600 mt-1">+8.2%</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-sm text-slate-500">Monthly Growth</p>
        <h2 className="text-2xl font-bold mt-2">6.1%</h2>
        <p className="text-sm text-green-600 mt-1">+1.3%</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-sm text-slate-500">Alerts</p>
        <h2 className="text-2xl font-bold mt-2">2</h2>
        <p className="text-sm text-yellow-600 mt-1">⚠️</p>
      </div>
    </div>
  )
}

export default memo(KPICards)
