import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const RankChart = ({ data }) => {
  const latelyRank =
    data &&
    data.slice(0, 50).map((rank, index) => {
      return {
        rank: rank.matchRank === '99' || !rank.matchRank ? 8 : rank.matchRank,
        game: index + 1,
      };
    });
  console.log(latelyRank);
  return (
    <div>
      <LineChart
        width={300}
        height={250}
        data={latelyRank}
        margin={{
          top: 15,
          right: -10,
          left: -30,
          bottom: 35,
        }}
      >
        <CartesianGrid stroke="#ebebeb" />
        <XAxis dataKey="game" reversed tick={false} />
        <YAxis
          datakey="rank"
          reversed
          domain={[1, 8]}
          interval={0}
          ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
        />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="rank"
          stroke="#07f"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default RankChart;
