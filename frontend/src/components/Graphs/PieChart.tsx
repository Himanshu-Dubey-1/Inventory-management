import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement,ArcElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale,BarElement, LinearScale, PointElement, ArcElement, LineElement, Title, Tooltip, Legend);

interface IGraph {
 label: string[];
 datas: number[];
}

const PieChart: React.FC<IGraph> = ({label , datas}) => {

  const data = {
    labels: label.map((product) => product),
    datasets: [
      {
        label: "Sales ($)",
        data: datas.map((product) => product),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3, // Smooth line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Monthly Sales Chart" },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-md rounded-md ">
      <h2 className="text-lg font-semibold mb-4">Sales Data</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

