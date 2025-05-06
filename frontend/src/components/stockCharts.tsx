// components/StockChart.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 5000 },
  { name: "Feb", value: 10000 },
  { name: "Mar", value: 25000 },
  { name: "Apr", value: 17000 },
  { name: "May", value: 33000 },
  { name: "Jun", value: 30000 },
];

const StockChart = () => (
  <div className="bg-white p-4 shadow rounded-lg mt-6">
    <h3 className="font-semibold mb-2">Stock Overview</h3>
    <div className="flex gap-x-16">
      <ResponsiveContainer width="100%" height={290}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="z-10">
        <img
          src="/illustration.png"
          alt="Inventory Dashboard"
          className="w-full h-auto object-contain max-h-[500px]"
        />
      </div>
    </div>
  </div>
);

export default StockChart;
