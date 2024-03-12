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
  Area,
  AreaChart,
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

const AnalysisAreaChart = () => {
  return (
    <>
      <AreaChart width={180} height={80} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4D81E7" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4D81E7" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4D81E7" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4D81E7" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip active={false} />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#4D81E7"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </>
  );
};

export default AnalysisAreaChart;
