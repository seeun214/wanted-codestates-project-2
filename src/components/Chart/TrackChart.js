import styled from '@emotion/styled';
import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';
import { recordData } from '../../assets/dummyData';

const TrackChart = () => {
  const data = recordData;

  return (
    <Container>
      <Title>
        {/* {mapName} */}브로디 비밀의 연구소
        <GrayText>기록분포</GrayText>
      </Title>
      <ChartWrap>
        <AreaChart width={320} height={150} data={data}>
          <XAxis
            dataKey="record"
            interval={0}
            ticks={[
              "2'04",
              "2'10",
              "2'16",
              "2'22",
              "2'28",
              "2'34",
              "2'40",
              "2'46",
              "2'52",
              "2'58",
            ]}
          />
          <YAxis
            domain={[0, 4.5]}
            interval={0}
            ticks={[
              '0',
              '0.5',
              '1.0',
              '1.5',
              '2.0',
              '2.5',
              '3.0',
              '3.5',
              '4.0',
              '4.5',
            ]}
          />
          <CartesianGrid strokeDasharray="0 0" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="라이더비율"
            stroke="#0077FE"
            fill="#b0d6ff"
            dot={{ strokeWidth: 1, r: 2 }}
          />
        </AreaChart>
      </ChartWrap>
    </Container>
  );
};

export default TrackChart;

const Container = styled.div`
  margin-right: 20px;
  width: 278px;
  height: 178.5px;
`;
const Title = styled.div`
  font-size: 14px;
  display: flex;
`;

const GrayText = styled.p`
  margin-left: 10px;
  color: #a1a1a1;
`;

const ChartWrap = styled.div`
  margin: 10px 20px 10px -40px;
`;
