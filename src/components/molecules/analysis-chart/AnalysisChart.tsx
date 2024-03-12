import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

// Function to format ticks with 'k' suffix
const formatYAxisTick = (value) => {
  return `${value / 1000}k`;
};

const AnalysisChart = () => {
  return (
    <>
      <BarChart width={210} height={120} data={data}>
        <CartesianGrid strokeDasharray="5 5" vertical={false} />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis fontSize={12} tickFormatter={formatYAxisTick} />
        <Bar dataKey="uv" fill="#E7854D" barSize={20} />
      </BarChart>
    </>
  );
};

export default AnalysisChart;
