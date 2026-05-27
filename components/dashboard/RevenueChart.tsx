"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

type Props = {
  data: {
    date: string;

    revenue: number;
  }[];
};

export default function RevenueChart({ data }: Props) {
  return (
    <div
      className="
        w-full
        h-87.5
      "
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="date" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#000"
            fill="#000"
            fillOpacity={0.1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
