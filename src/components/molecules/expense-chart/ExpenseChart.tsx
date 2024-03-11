import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import clx from "../../../utils/clx";

const data = [
  { name: "Subscribed (40.1%)", value: 400 },
  { name: "Taxs (25%)", value: 300 },
  { name: "Rent (6.1%)", value: 300 },
  { name: "Others (19.2%)", value: 200 },
];
const COLORS = ["#E7854D", "#31B099", "#C65468", "#4D81E7"];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        fill={"#1A1C1E"}
        fontWeight={700}
        fontSize={24}
      >
        100%
      </text>
      <text
        x={cx}
        y={cy}
        dy={16}
        textAnchor="middle"
        fill={"#6C7278"}
        fontSize={12}
      >
        Data Recorded
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const RenderLegend = ({ lists }) => {
  return (
    <ul className="space-y-3">
      {lists?.map((entry, index) => {
        return (
          <li
            key={`item-${index}`}
            className={clx(
              `${entry?.color} flex items-center justify-between`,
              {
                "text-[#E7854D]": index === 0,
                "text-[#31B099]": index === 1,
                "text-[#C65468]": index === 2,
                "text-[#4D81E7]": index === 3,
              },
            )}
          >
            <p className="flex items-center gap-3">
              <span
                className={clx(`inline-block h-3 w-3 rounded-full`, {
                  "bg-[#E7854D]": index === 0,
                  "bg-[#31B099]": index === 1,
                  "bg-[#C65468]": index === 2,
                  "bg-[#4D81E7]": index === 3,
                })}
              ></span>
              <span className="text-gray">{entry.name}</span>
            </p>
            <span>${entry?.value}</span>
          </li>
        );
      })}
    </ul>
  );
};

const ExpenseChart = () => {
  const handleMouseEnter = (params) => {
    console.log("handleMouseEnter");
  };

  return (
    <div className=" mt-6 space-y-6">
      <div className="flex justify-center">
        <PieChart width={190} height={190} onMouseEnter={handleMouseEnter}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
            activeIndex={0}
            activeShape={renderActiveShape}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <RenderLegend lists={data} />
    </div>
  );
};

export default ExpenseChart;
