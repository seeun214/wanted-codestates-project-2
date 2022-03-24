import styled from '@emotion/styled';
import React from 'react';
import { ContentBox } from '../../../styles/styles';
import RankChart from '../../Chart/RankChart';
import { BlueText, Summary, Title } from './TotalRecord';

const RankTrend = ({ data }) => {
  let totlaRank, latelyRank;
  let sumRank = 0;
  let sumlatelyRank = 0;
  let totlaRankLen = 0;
  let latelyRankLen = 0;

  const sumTotlaRank = (matchRank) => {
    if (matchRank === '99' || !matchRank) {
      matchRank = 8;
    }
    sumRank += parseInt(matchRank);
    totlaRankLen += 1;
  };

  const sumLatelyRank = (matchRank) => {
    if (matchRank === '99' || !matchRank) {
      matchRank = 8;
    }
    sumlatelyRank += parseInt(matchRank);
    latelyRankLen += 1;
  };

  if (data) {
    data.map((el) => sumTotlaRank(el.matchRank));
    totlaRank = sumRank / totlaRankLen;

    data.slice(0, 50).map((el) => sumLatelyRank(el.matchRank));
    latelyRank = sumlatelyRank / latelyRankLen;
  }

  return (
    <ContentBox>
      <Title>
        <BlueText>순위변동</BlueText>추이
        <Summary>
          <TextWrap>
            지난 200경기
            <Blue>{totlaRank}위</Blue>
          </TextWrap>
          <TextWrap>
            최근 50경기
            <Blue>{latelyRank}위</Blue>
          </TextWrap>
        </Summary>
      </Title>
      <RankChart data={data} />
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
