import React, { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TopicsContext } from "../../Layout/Main";

const Statistics = () => {
  const [statisticsData] = useContext(TopicsContext);
  const { data } = statisticsData;

  return (
    <div className="my-20">
      <h1 className="text-center text-2xl font-bold font-sans mb-3 text-violet-600">
        Statistics of The All Question{" "}
      </h1>
      <ResponsiveContainer width="90%" height={400}>
        <LineChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
