import { memo } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const hasData = true

const data = hasData
  ? [
      { month: "Jan", revenue: 2400 },
      { month: "Feb", revenue: 1398 },
      { month: "Mar", revenue: 9800 },
    ]
  : []


function RevenueChart() {
  if (!data.length) {
    return (
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <p className="text-slate-500">
          No revenue data available
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Revenue Trend
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#0f172a"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default memo(RevenueChart)
