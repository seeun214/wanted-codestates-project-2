import styled from '@emotion/styled';
import React from 'react';
import { ContentBox } from '../../styles/styles';
import { BlueText, Summary, Title } from './TotalRecord';

const RankTrend = () => {
  return (
    <ContentBox>
      <Title>
        <BlueText>순위변동</BlueText>추이
        <Summary>
          <TextWrap>
            지난 40경기
            <Blue>3.58위</Blue>
          </TextWrap>
          <TextWrap>
            최근 40경기
            <Blue>3.58위</Blue>
          </TextWrap>
        </Summary>
      </Title>
      <canvas
        data-v-26fbf5ea=""
        id="line"
        width="600"
        height="360"
        class="chartjs-render-monitor"
      ></canvas>
    </ContentBox>
  );
};

export default RankTrend;

const TextWrap = styled.span`
  margin-left: 5px;
`;

const Blue = styled.span`
  color: #07f;
  margin-left: 5px;
`;
