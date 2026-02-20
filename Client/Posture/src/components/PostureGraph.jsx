// // // import React, { useEffect, useState } from "react";
// // // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// // // import axios from "axios";

// // // const PostureGraph = () => {
// // //   const [data, setData] = useState([]);

// // //   // 🧠 Dummy CSV data (replace with API data later)
// // //   const sampleData = [
// // //     { timestamp: "12:18", bend: 99, posture: "Bad" },
// // //     { timestamp: "12:19", bend: 87, posture: "Bad" },
// // //     { timestamp: "12:20", bend: 34, posture: "Good" },
// // //     { timestamp: "12:21", bend: 6, posture: "Good" },
// // //     { timestamp: "12:22", bend: 36, posture: "Good" },
// // //     { timestamp: "12:23", bend: 85, posture: "Bad" },
// // //     { timestamp: "12:24", bend: 10, posture: "Good" },
// // //     { timestamp: "12:25", bend: 1, posture: "Good" },
// // //     { timestamp: "12:26", bend: 30, posture: "Good" },
// // //     { timestamp: "12:27", bend: 7, posture: "Good" },
// // //     { timestamp: "12:28", bend: 76, posture: "Bad" },
// // //   ];

// // //   // ⚙️ Fetch from backend (when integrated)
// // //   const fetchData = async () => {
// // //     try {
// // //       // const res = await axios.get("http://localhost:5000/api/posture-readings");
// // //       // setData(res.data);
// // //       setData(sampleData); // comment this out when using backend
// // //     } catch (err) {
// // //       console.error("Error fetching posture data:", err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchData();
// // //     const interval = setInterval(fetchData, 5000); // auto refresh every 5s
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div className="  transition-all duration-500 ">
// // //       <h2 className="text-xl font-semibold mb-6 mx-20 ">Posture Trend (Bend %)</h2>
// // //       <div className="w-full h-[200px]">
// // //         <ResponsiveContainer width="110%" height="100%">
// // //           <LineChart data={data}>
// // //             <CartesianGrid strokeDasharray="3 3" stroke="#444" />
// // //             <XAxis dataKey="timestamp" stroke="#ccc" />
// // //             <YAxis domain={[0, 100]} stroke="#ccc" />
// // //             <Tooltip
// // //               contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151" }}
// // //               labelStyle={{ color: "#fff" }}
// // //             />
// // //             <Line
// // //               type="monotone"
// // //               dataKey="bend"
// // //               stroke="#3b82f6"
// // //               strokeWidth={3}
// // //               dot={{
// // //                 stroke: "#fff",
// // //                 strokeWidth: 2,
// // //                 fill: (d) => (d.posture === "Bad" ? "#ef4444" : "#22c55e"), // red for bad, green for good
// // //               }}
// // //               activeDot={{ r: 6 }}
// // //               animationDuration={800}
// // //             />
// // //           </LineChart>
// // //         </ResponsiveContainer>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PostureGraph;

// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import axios from "axios";

// const PostureGraph = () => {
//   const [data, setData] = useState([]);

//   // 🔹 Fetch flex sensor data from backend
//   const fetchData = async () => {
//     try {
//       // Make GET request to backend route
//       const res = await axios.get("http://localhost:5000/api/flex/all");

//       // Format backend data for graph
//       const formattedData = res.data.map((item) => ({
//         timestamp: new Date(item.createdAt).toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         bend: item.value, // the sensor reading
//         posture: item.value > 50 ? "Bad" : "Good", // simple classification
//       }));

//       setData(formattedData);
//     } catch (err) {
//       console.error("❌ Error fetching posture data:", err);
//     }
//   };

//   // 🔁 Auto-refresh graph every 5 seconds
//   useEffect(() => {
//     fetchData();
//     const interval = setInterval(fetchData, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="transition-all duration-500">
//       <h2 className="text-xl font-semibold mb-6 mx-20">Posture Trend (Bend %)</h2>

//       <div className="w-full h-[250px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//             <XAxis dataKey="timestamp" stroke="#ccc" />
//             <YAxis domain={[0, 100]}  stroke="#ccc" />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#1f2937",
//                 border: "1px solid #374151",
//               }}
//               labelStyle={{ color: "#fff" }}
//             />
//             <Line
//               type="monotone"
//               dataKey="bend"
//               stroke="#3b82f6"
//               strokeWidth={3}
//               dot={{
//                 stroke: "#fff",
//                 strokeWidth: 2,
//                 fill: (d) => (d.posture === "Bad" ? "#ef4444" : "#22c55e"), // red for bad, green for good
//               }}
//               activeDot={{ r: 6 }}
//               animationDuration={800}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default PostureGraph;


import  { useEffect, useState } from "react";
import { getAllFlexData } from "../api/flexApi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const PostureGraph = () => {
  const [data, setData] = useState([]);

  // 🔹 Fetch flex sensor data from backend
  const fetchData = async () => {
    try {
      // const res = await axios.get("http://localhost:5000/api/flex/all");
      // const readings = res.data;
      const readings = await getAllFlexData();

      if (!readings || readings.length === 0) {
        console.log("No new data — keeping previous data");
        return;
      }

      

      // 🔹 Format + limit to last 30 readings
      const formattedData = readings
       .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .slice(-30)
        .map((item) => ({
          timestamp: new Date(item.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          bend: Math.min(Math.max(item.value, 0), 100), // Clamp 0–100
          posture: item.value > 15 ? "Bad" : "Good",
        }));

      setData(formattedData);
    } catch (err) {
      console.error("Error fetching posture data:", err);
    }
  };

  //  Auto-refresh every 5 seconds
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="transition-all duration-500">
      <h2 className="text-xl font-semibold mb-6 mx-20">Posture Trend (Bend %)</h2>

      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis
              dataKey="timestamp"
              stroke="#ccc"
              tick={{ fontSize: 12 }}
              interval="preserveEnd"
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              stroke="#ccc"
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
              }}
              labelStyle={{ color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="bend"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{
                stroke: "#fff",
                strokeWidth: 2,
                r: 4,
                fill: (d) => (d.posture === "Bad" ? "#ef4444" : "#22c55e"),
              }}
              activeDot={{ r: 6 }}
              animationDuration={600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PostureGraph;
