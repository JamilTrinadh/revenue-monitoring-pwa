export default function FiltersBar() {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4">
      <input
        type="date"
        className="border p-2 rounded"
      />

      <input
        type="date"
        className="border p-2 rounded"
      />

      <select className="border p-2 rounded">
        <option>All Regions</option>
        <option>North</option>
        <option>South</option>
        <option>East</option>
        <option>West</option>
      </select>
    </div>
  )
}
