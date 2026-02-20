// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // const PostureLogTable = () => {
// // //   const [logs, setLogs] = useState([]);

// // //   // 🧠 Dummy data for now (replace with backend later)
// // //   const dummyData = [
// // //     { timestamp: "10/30/2025, 12:18:21 AM", bend: 99, posture: "Bad" },
// // //     { timestamp: "10/30/2025, 12:19:21 AM", bend: 87, posture: "Bad" },
// // //     { timestamp: "10/30/2025, 12:20:21 AM", bend: 34, posture: "Good" },
// // //     { timestamp: "10/30/2025, 12:21:21 AM", bend: 6, posture: "Good" },
// // //     { timestamp: "10/30/2025, 12:22:21 AM", bend: 36, posture: "Good" },
// // //     { timestamp: "10/30/2025, 12:23:21 AM", bend: 85, posture: "Bad" },
// // //   ];

// // //   const fetchData = async () => {
// // //     try {
// // //       // Example API endpoint
// // //       // const res = await axios.get("http://localhost:5000/api/posture-logs");
// // //       // setLogs(res.data);
// // //       setLogs(dummyData); // comment out when backend ready
// // //     } catch (err) {
// // //       console.error("Error fetching logs:", err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchData();
// // //     const interval = setInterval(fetchData, 5000); // refresh every 5 sec
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-500">
// // //       <h2 className="text-xl font-semibold mb-2 text-center text-gray-200">Posture Log History</h2>

// // //       <div className="overflow-x-auto">
// // //         <table className="min-w-full text-sm text-gray-300">
// // //           <thead className="bg-gray-700/60 text-gray-100 uppercase text-xs">
// // //             <tr>
// // //               <th className="px-4 py-3 text-left rounded-tl-xl">Timestamp</th>
// // //               <th className="px-4 py-3 text-left">Bend %</th>
// // //               <th className="px-4 py-3 text-left rounded-tr-xl">Posture Status</th>
// // //             </tr>
// // //           </thead>

// // //           <tbody>
// // //             {logs.map((row, i) => (
// // //               <tr
// // //                 key={i}
// // //                 className={`transition-colors duration-300 ${
// // //                   i % 2 === 0 ? "bg-gray-800/30" : "bg-gray-700/20"
// // //                 } hover:bg-gray-700/50`}
// // //               >
// // //                 <td className="px-4 py-3 whitespace-nowrap">{row.timestamp}</td>
// // //                 <td className="px-4 py-3">{row.bend}%</td>
// // //                 <td
// // //                   className={`px-4 py-3 font-medium ${
// // //                     row.posture === "Bad" ? "text-red-400" : "text-green-400"
// // //                   }`}
// // //                 >
// // //                   {row.posture}
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PostureLogTable;


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const PostureLogTable = () => {
// //   const [logs, setLogs] = useState([]);

// //   // 🔹 Fetch posture (flex sensor) logs from backend
// //   const fetchData = async () => {
// //     try {
// //       // ✅ Connect to your backend endpoint
// //       const res = await axios.get("http://localhost:5000/api/flex/all");

// //       // ✅ Format backend data for the table
// //       const formatted = res.data
// //         .slice(-30) // keep last 30
// //         .reverse() // latest on top
// //         .map((item) => ({
// //         timestamp: new Date(item.createdAt).toLocaleString(), // readable date/time
// //         bend: item.value, // sensor reading
// //         posture: item.value > 50 ? "Bad" : "Good", // classify based on threshold
// //       }))
// //       .reverse() // latest first
// //         .slice(0, 30);

// //       setLogs(formatted);
// //     } catch (err) {
// //       console.error("❌ Error fetching logs:", err);
// //     }
// //   };

// //   // 🔁 Auto refresh every 5 seconds
// //   useEffect(() => {
// //     fetchData();
// //     const interval = setInterval(fetchData, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-500">
// //       <h2 className="text-xl font-semibold mb-2 text-center text-gray-200">
// //         Posture Log History
// //       </h2>

// //       <div className="overflow-x-auto">
// //         <table className="min-w-full text-sm text-gray-300">
// //           <thead className="bg-gray-700/60 text-gray-100 uppercase text-xs">
// //             <tr>
// //               <th className="px-4 py-3 text-left rounded-tl-xl">Timestamp</th>
// //               <th className="px-4 py-3 text-left">Bend %</th>
// //               <th className="px-4 py-3 text-left rounded-tr-xl">
// //                 Posture Status
// //               </th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {logs.map((row, i) => (
// //               <tr
// //                 key={i}
// //                 className={`transition-colors duration-300 ${
// //                   i % 2 === 0 ? "bg-gray-800/30" : "bg-gray-700/20"
// //                 } hover:bg-gray-700/50`}
// //               >
// //                 <td className="px-4 py-3 whitespace-nowrap">
// //                   {row.timestamp}
// //                 </td>
// //                 <td className="px-4 py-3">{row.bend}%</td>
// //                 <td
// //                   className={`px-4 py-3 font-medium ${
// //                     row.posture === "Bad" ? "text-red-400" : "text-green-400"
// //                   }`}
// //                 >
// //                   {row.posture}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PostureLogTable;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PostureLogTable = () => {
//   const [logs, setLogs] = useState([]);

//   // 🔹 Fetch posture data from backend
//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/flex/all");

//       // 🔹 Format + take only the most recent 30 entries
//       const formatted = res.data
//         .slice(-30) // keep last 30
//         .map((item) => ({
//           timestamp: new Date(item.createdAt).toLocaleString(),
//           bend: Math.min(Math.max(item.value, 0), 100), // clamp 0–100
//           posture: item.value > 50 ? "Bad" : "Good",
//         }))
//         .reverse();

//       setLogs(formatted);
//     } catch (err) {
//       console.error("❌ Error fetching logs:", err);
//     }
//   };

//   // 🔁 Auto-refresh every 5 seconds
//   useEffect(() => {
//     fetchData();
//     const interval = setInterval(fetchData, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-500">
//       <h2 className="text-xl font-semibold mb-2 text-center text-gray-200">
//         Posture Log History
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-full text-sm text-gray-300">
//           <thead className="bg-gray-700/60 text-gray-100 uppercase text-xs">
//             <tr>
//               <th className="px-4 py-3 text-left rounded-tl-xl">Timestamp</th>
//               <th className="px-4 py-3 text-left">Bend %</th>
//               <th className="px-4 py-3 text-left rounded-tr-xl">
//                 Posture Status
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {logs.map((row, i) => (
//               <tr
//                 key={i}
//                 className={`transition-colors duration-300 ${
//                   i % 2 === 0 ? "bg-gray-800/30" : "bg-gray-700/20"
//                 } hover:bg-gray-700/50`}
//               >
//                 <td className="px-4 py-3 whitespace-nowrap">
//                   {row.timestamp}
//                 </td>
//                 <td className="px-4 py-3">{row.bend}%</td>
//                 <td
//                   className={`px-4 py-3 font-medium ${
//                     row.posture === "Bad" ? "text-red-400" : "text-green-400"
//                   }`}
//                 >
//                   {row.posture}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PostureLogTable;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllFlexData } from "../api/flexApi";
const PostureLogTable = () => {
  const [logs, setLogs] = useState([]);

  const fetchData = async () => {
    try {
      // const res = await axios.get("http://localhost:5000/api/flex/all");
      // const readings = res.data;
      const readings = await getAllFlexData();
      if (!readings || readings.length === 0) {
        console.log("No new data — keeping previous data");
        return;
      }

      const formatted = readings
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .slice(-30)
        .map((item) => ({
          timestamp: new Date(item.createdAt).toLocaleString(),
          bend: Math.min(Math.max(item.value, 0), 100),
          posture: item.value > 15 ? "Bad" : "Good",
        }));

      setLogs(formatted);
    } catch (err) {
      console.error("❌ Error fetching logs:", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-500">
      <h2 className="text-xl font-semibold mb-2 text-center text-gray-200">
        Posture Log History
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-300">
          <thead className="bg-gray-700/60 text-gray-100 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left rounded-tl-xl">Timestamp</th>
              <th className="px-4 py-3 text-left">Bend %</th>
              <th className="px-4 py-3 text-left rounded-tr-xl">
                Posture Status
              </th>
            </tr>
          </thead>

          <tbody>
            {logs.map((row, i) => (
              <tr
                key={i}
                className={`transition-colors duration-300 ${
                  i % 2 === 0 ? "bg-gray-800/30" : "bg-gray-700/20"
                } hover:bg-gray-700/50`}
              >
                <td className="px-4 py-3 whitespace-nowrap">{row.timestamp}</td>
                <td className="px-4 py-3">{row.bend}%</td>
                <td
                  className={`px-4 py-3 font-medium ${
                    row.posture === "Bad" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {row.posture}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostureLogTable;


