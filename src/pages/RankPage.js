import styled from '@emotion/styled';
import React from 'react';
import TopContent from '../components/RankPage/TopContent';
import TopRanker from '../components/RankPage/TopRanker';

const RankPage = () => {
  return (
    <Container>
      <CotentWrap>
        <TopContent />
        <TopRank>
          <TopRanker
            medalImg={'https://tmi.nexon.com/img/assets/icon_goldmedal.png'}
          />
          <TopRanker
            medalImg={'https://tmi.nexon.com/img/assets/icon_silvermedal.png'}
          />
          <TopRanker
            medalImg={'https://tmi.nexon.com/img/assets/icon_bronzemedal.png'}
          />
        </TopRank>
      </CotentWrap>
    </Container>
  );
};

export default RankPage;

const Container = styled.div`
  position: relative;
  background-color: #fafafa;
  padding-bottom: 200px;
  min-height: 800px;
`;

const CotentWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  background: #005fcc;
  overflow: hidden;
`;

const TopRank = styled.div`
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 55px;
  width: 1300px;
  margin: 0 auto;
`;
