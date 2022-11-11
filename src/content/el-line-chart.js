import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/**
* Elemento line chart
*
*
*/
export default function ElLineChartJs() {
  const [chartData, setChartData] = useState({
    labels: ["Boston", "Worcester", "Springfield", "Lowel", "Cambridge"],
    datasets: [
      {
        fill: false,
        label: "Population",
        data: [117594, 181455, 153060, 106519, 105162],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',

      }
    ]
  });

  return (
    <>
      <Line
        className="max-w-full max-h-[10rem]"
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          title: {
            display: true,
            text: "Largest cities of Massachusetts"
            /* fontSize: 25 */
          },
          legend: { display: true, position: "bottom" }
        }}
      />
    </>
  );
}
