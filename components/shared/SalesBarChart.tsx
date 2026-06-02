"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function SalesBarChart() {
  const data = {
    labels: [
      "Station Name\nDummy 1",
      "Station Name\nDummy 1",
      "Station Name\nDummy 1",
      "Station Name\nDummy 1",
      "Station Name\nDummy 1",
    ],
    datasets: [
      {
        data: [260, 140, 200, 230, 140],
        backgroundColor: "#FF7A59",
        borderRadius: 0,
        barThickness: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#3D5161",
          font: {
            size: 9,
            weight: "bold" as const,
          },
        },
      },
      y: {
        min: 50,
        max: 300,
        ticks: {
          stepSize: 50,
          color: "#3D5161",
          font: {
            size: 10,
          },
          callback: function (value: string | number) {
            if (Number(value) === 50) {
              return "";
            }

            return value;
          },
        },
        grid: {
          color: "#E8E8E8",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
