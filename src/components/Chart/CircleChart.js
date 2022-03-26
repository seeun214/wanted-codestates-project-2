import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';

const CircleChart = ({ percent, color, size, innerSize, fontSize }) => {
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
    <Circle ref={chart} size={size}>
      <InnerCircle innerSize={innerSize}>
        <Percent color={color} fontSize={fontSize}>
          {percent}%
        </Percent>
      </InnerCircle>
    </Circle>
  );
};

export default CircleChart;

const Circle = styled.div`
  margin: 20px auto;
  width: ${(props) => (props.size ? props.size : '87px')};
  height: ${(props) => (props.size ? props.size : '87px')};
  border-radius: 50%;
  position: relative;
  transition: 0.3s;
`;

const InnerCircle = styled.span`
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => (props.innerSize ? props.innerSize : '68px')};
  height: ${(props) => (props.innerSize ? props.innerSize : '68px')};
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
  font-size: ${(props) => (props.fontSize ? props.fontSize : '20px')};
  font-weight: 700;
  color: ${(props) => props.color};
`;
