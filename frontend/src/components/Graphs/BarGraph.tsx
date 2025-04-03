import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement,ArcElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale,BarElement, LinearScale, PointElement, ArcElement, LineElement, Title, Tooltip, Legend);

interface IGraph {
 label: string[];
 datas: number[];
 title?: string;
 heading?: string;
}

const BarGraph: React.FC<IGraph> = ({label , datas, title, heading}) => {


  const data = {
    labels: label.map((product) => product),
    datasets: [
      {
        label: "Sales ($)",
        data: datas.map((product) => product),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio:  false,
    scales: {
      y: {
        beginAtZero: true,
      },
      // x: {
      //   beginAtZero: true,
      // },
    },
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: `${title ? title : "Bar Graph"}` },
    },
  };

  return (
    <div className="max-w-lg p-5 bg-white shadow-md rounded-md ">
      <h2 className="text-lg font-semibold mb-4">{heading ? heading : "Data"}</h2>
      <Bar data={data} options={options} className="w-[15rem] md:w-[25rem] pb-10" />
    </div>
  );
};

export default BarGraph;

