// src/pages/Dashboard.jsx
import StatusCard from "../components/StatusCard"
import PieChartComponent from "../components/PieChartComponent"
import PostureGraph from "../components/PostureGraph";
import PostureLogTable from "../components/PostureLogTable";

function Dashboard() {
  return (
    <div className="flex flex-col gap-8 p-2">
      {/* Top Section: Cards + Pie Chart */}
      <div className="flex flex-row justify-between items-start">
        {/* Left Side - Cards */}
        <div className="flex gap-16">
          <StatusCard title="Current Status" value="Sitting" color="bg-blue-400/80" />
          <StatusCard title="Posture Position" value="Good" color="bg-yellow-300/90" />
          
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Graph takes more space */}
        <div className="flex-1 min-w-[60%]">
          <PostureGraph />
        </div>

        {/* Pie chart on the right */}
        <div className="w-full lg:w-[350px] flex justify-center lg:justify-end">
          <PieChartComponent />
        </div>
      </div>
      {/* Bottom: Log Table */}
      <div className="mt-1">
        <PostureLogTable />
      </div>
    </div>
    
  )
}

export default Dashboard
