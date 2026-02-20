import { useEffect, useState } from "react";
import { getAllFlexData } from "../api/flexApi";
import axios from "axios";

function Report() {
  const [summary, setSummary] = useState(null);

  const fetchReport = async () => {
  try {
    const readings = await getAllFlexData();

    const now = new Date();
    const threeHoursAgo = new Date(now.getTime() - 1 * 60 * 60 * 1000);

    const recentData = (readings || []).filter(
      (item) => new Date(item.createdAt) >= threeHoursAgo
    );

    let good = 0, average = 0, bad = 0;

    recentData.forEach((item) => {
      if (item.value < 15) good++;
      else if (item.value < 70) average++;
      else bad++;
    });

    const total = recentData.length;

    setSummary({
      total,
      good,
      average,
      bad,
      goodPercent: total ? (good / total) * 100 : 0,
      avgPercent: total ? (average / total) * 100 : 0,
      badPercent: total ? (bad / total) * 100 : 0,
    });

  } catch (err) {
    console.error("Report fetch error:", err);
  }
};

  useEffect(() => {
    fetchReport();
    const interval = setInterval(fetchReport, 15000); // every 15 sec
    return () => clearInterval(interval);
  }, []);

  if (!summary) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="flex flex-col gap-8 p-4 text-white">
      
      {/* Current Status */}
      <div className="bg-green-500/10 border border-green-400/30 p-6 rounded-2xl">
        <h2 className="text-lg">Current Status</h2>
        <h1 className="text-2xl font-bold text-green-400">
          {summary.goodPercent > summary.badPercent ? "Good Posture" : "Bad Posture"}
        </h1>
      </div>

      {/* Timeline Cards */}
      <div className="flex gap-6">

        <div className="flex-1 bg-green-500/10 border border-green-400/30 p-6 rounded-2xl">
          <h3>Good</h3>
          <h1 className="text-2xl">{summary.goodPercent.toFixed(1)}%</h1>
          <p>{summary.good} intervals</p>
        </div>

        <div className="flex-1 bg-yellow-400/10 border border-yellow-400/30 p-6 rounded-2xl">
          <h3>Average</h3>
          <h1 className="text-2xl">{summary.avgPercent.toFixed(1)}%</h1>
          <p>{summary.average} intervals</p>
        </div>

        <div className="flex-1 bg-red-500/10 border border-red-400/30 p-6 rounded-2xl">
          <h3>Bad</h3>
          <h1 className="text-2xl">{summary.badPercent.toFixed(1)}%</h1>
          <p>{summary.bad} intervals</p>
        </div>

      </div>
      {/* Tips Section */}
      <div className="bg-white/5 p-6 rounded-xl">
        <h2 className="text-xl mb-4">Posture Tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keep your shoulders relaxed and back straight</li>
          <li>Position your screen at eye level</li>
          <li>Take breaks every 30 minutes</li>
          <li>Keep your feet flat on floor</li>
          <li>Maintain natural spine curve</li>
        </ul>
      </div>

    </div>
  );
}

export default Report;
