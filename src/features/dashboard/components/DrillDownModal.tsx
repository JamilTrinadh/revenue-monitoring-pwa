interface Props {
  onClose: () => void
}

export default function DrillDownModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Revenue Breakdown
          </h2>
          <button
            onClick={onClose}
            className="text-slate-500"
          >
            ✕
          </button>
        </div>

        <table className="w-full border">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="p-2">Region</th>
              <th className="p-2">Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">North</td>
              <td className="p-2">₹4.2M</td>
            </tr>
            <tr>
              <td className="p-2">South</td>
              <td className="p-2">₹3.1M</td>
            </tr>
            <tr>
              <td className="p-2">East</td>
              <td className="p-2">₹2.6M</td>
            </tr>
            <tr>
              <td className="p-2">West</td>
              <td className="p-2">₹2.5M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
