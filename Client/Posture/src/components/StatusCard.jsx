// src/components/StatusCard.jsx
function StatusCard({ title, value, color }) {
  return (
    <div
      className={`${color} text-black rounded-xl p-6 w-1/4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-[300px] h-[100px]`}
    >
      <h2 className="text-lg font-semibold mb-6">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

export default StatusCard
