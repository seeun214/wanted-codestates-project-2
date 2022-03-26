import styled from '@emotion/styled';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const RankChart = ({ data }) => {
  let duration = 1;
  const latelyRank =
    data &&
    data.slice(0, 50).map((rank, index) => {
      return {
        rank: rank.matchRank === '99' || !rank.matchRank ? 8 : rank.matchRank,
        game: index + 1,
      };
    });

  return (
    <div>
      <LineChart
        width={320}
        height={250}
        data={latelyRank}
        margin={{
          top: 20,
          right: 10,
          left: -30,
          bottom: 35,
        }}
      >
        <CartesianGrid stroke="#ebebeb" />
        <XAxis dataKey="game" reversed tick={false} domain={[1, 50]} />
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
          strokeWidth="1"
          stroke="#07f"
          fill="#07f"
          dot={{ strokeWidth: 1, r: 2 }}
          animationDuration={duration}
        />
      </LineChart>
    </div>
  );
};

export default RankChart;
