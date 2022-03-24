import styled from '@emotion/styled';
import React from 'react';
import { ContentBox } from '../../../styles/styles';
import CircleChart from '../../Chart/CircleChart';

const TotalRecord = ({ data }) => {
  let win, retire, total, complete, winRate, completionRate, retireRate;
  if (data) {
    win = data.filter((el) => el.matchWin === '1').length;
    retire = data.filter((el) => el.matchRetired !== '0').length;
    total = data.length;
    complete = total - retire;
    winRate = Math.round((win / total) * 100, 0);
    completionRate = Math.round((complete / total) * 100, 0);
    retireRate = Math.round((retire / total) * 100, 0);
  }

  return (
    <ContentBox>
      <Title>
        <BlueText>종합</BlueText>전적
        <Summary>
          {total}전 {win}승 {total - win}패
        </Summary>
      </Title>
      <Section>
        <Chart>
          승률
          <CircleChart color="#07f" percent={winRate} />
        </Chart>
        <Chart>
          완주율
          <CircleChart color="#9bd728" percent={completionRate} />
        </Chart>
        <Chart>
          리타이어율
          <CircleChart color="#f62459" percent={retireRate} />
        </Chart>
      </Section>
      <Bottom>
        <BlueText>최다주행</BlueText>
        모드
        <Bold>통합</Bold>
      </Bottom>
    </ContentBox>
  );
};

export default TotalRecord;

export const Title = styled.div`
  margin: 0 12px;
  padding: 0 8px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #ccc;
  color: #1f334a;
`;

export const BlueText = styled.span`
  margin-right: 5px;
  font-size: 14px;
  color: #07f;
`;

export const Summary = styled.p`
  font-size: 12px;
  float: right;
  display: inline;
  margin-left: 0.5rem;
`;

const Section = styled.p`
  width: 95%;
  margin: 0 auto;
  display: flex;
  text-align: center;
`;

const Chart = styled.p`
  position: relative;
  flex: 1;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  border-right: 1px solid #f2f2f2;
`;

const Bottom = styled.p`
  position: relative;
  margin: 8px;
  padding: 8px;
  border-top: 1px solid #f2f2f2;
  line-height: 30px;
  font-size: 14px;
`;

const Bold = styled.span`
  position: absolute;
  right: 8px;
  font-size: 20px;
  font-weight: 500;
`;
