import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Don't get rid of this
import "./Chart.css"
function LineChart({ chartData, multiAxis, pricetype }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false, // Show legend only for multi-axis charts
        labels: {
          boxWidth: 20, // Adjust size of legend boxes
          font: {
            size: 12, // Responsive font size for the legend
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allows full control over size via CSS
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
        ticks: {
          callback: function (value, index, values) {
            return `$${value}`; // Customize tick labels for crypto1
          },
        },
      },
      crypto2: multiAxis && {
        position: "right",
        ticks: {
          callback: function (value, index, values) {
            return `$${value}`; // Customize tick labels for crypto2
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
