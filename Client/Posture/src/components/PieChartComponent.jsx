
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getAllFlexData } from "../api/flexApi";

function PieChartComponent() {
  const [data, setData] = useState([
    { name: "Good", value: 0 },
    { name: "Average", value: 0 },
    { name: "Bad", value: 0 },
  ]);

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

useEffect(() => {
  const fetchFlexData = async () => {
    try {
      const readings = await getAllFlexData();

      if (!readings || readings.length === 0) {
        console.log("No new data — keeping previous data");
        return;
      }

      // Classify readings based on bend percentage
      let good = 0, average = 0, bad = 0;
      readings.forEach((r) => {
        if (r.value < 30) good++;
        else if (r.value < 70) average++;
        else bad++;
        });

        setData([
          { name: "Good", value: good },
          { name: "Average", value: average },
          { name: "Bad", value: bad },
        ]);
      } catch (err) {
        console.error(" Error fetching flex data:", err);
      }
  };

    fetchFlexData();
    const interval = setInterval(fetchFlexData, 5000); // auto refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[250px] h-[270px] transition-all duration-500">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
            isAnimationActive={true}
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              color: "white",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;
