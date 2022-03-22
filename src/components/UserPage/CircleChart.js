import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';

const CircleChart = ({ percent, color }) => {
  const chart = useRef(null);
  let i = 1;

  const colorFn = (i, color) => {
    chart.current.style.background = `conic-gradient(${color} 0% ${i}%, #dedede 1% 100%)`;
  };

  const makeChart = (percent, color) => {
    const chartFunc = setInterval(() => {
      if (i <= percent) {
        if (chart.current) {
          colorFn(i, color);
          i += 1;
        } else {
          return;
        }
      } else {
        clearInterval(chartFunc);
      }
    }, 10);
  };

  useEffect(() => {
    makeChart(percent, color);
  }, [percent, color]);

  return (
    <Circle ref={chart}>
      <InnerCircle>
        <Percent color={color}>{percent}%</Percent>
      </InnerCircle>
    </Circle>
  );
};

export default CircleChart;

const Circle = styled.div`
  margin: 20px auto;
  width: 83px;
  height: 83px;
  border-radius: 50%;
  position: relative;
  transition: 0.3s;
`;

const InnerCircle = styled.span`
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  transform: translate(-50%, -50%);
`;

const Percent = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -20px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
