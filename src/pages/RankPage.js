import styled from '@emotion/styled';
import React from 'react';
import RankList from '../components/RankPage/RankList';
import TopContent from '../components/RankPage/TopContent';
import TopRanker from '../components/RankPage/TopRanker';

const RankPage = () => {
  return (
    <Container>
      <CotentWrap>
        <TopContent />
        <TopRank>
          <TopRanker
            marginLeft={'88px'}
            medalImg={'https://tmi.nexon.com/img/assets/icon_goldmedal.png'}
          />
          <TopRanker
            medalImg={'https://tmi.nexon.com/img/assets/icon_silvermedal.png'}
          />
          <TopRanker
            medalImg={'https://tmi.nexon.com/img/assets/icon_bronzemedal.png'}
          />
          <WaveAnimate></WaveAnimate>
          <SecondWaveAnimate></SecondWaveAnimate>
        </TopRank>
      </CotentWrap>
      <RankList />
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

const WaveAnimate = styled.div`
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    swellup 7s ease -1.25s infinite;
  transform: translateZ(0);
  background: url('https://tmi.nexon.com/img/background_wave.svg') repeat-x;
  position: absolute;
  top: 270px;
  width: 6400px;
  height: 198px;
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swellup {
    0%,
    100% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }
    50% {
      -webkit-transform: translate3d(0, -50px, 0);
      transform: translate3d(0, -50px, 0);
    }
  }
`;

const SecondWaveAnimate = styled.div`
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    swelldown 7s ease -1.25s infinite;
  opacity: 1;
  background: url('https://tmi.nexon.com/img/background_wave.svg') repeat-x;
  position: absolute;
  top: 270px;
  width: 6400px;
  height: 198px;
  left: -150px;
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swelldown {
    0%,
    100% {
      -webkit-transform: translate3d(0, -50px, 0);
      transform: translate3d(0, -50px, 0);
    }
    50% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }
  }
`;

const TopRank = styled.div`
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 55px;
  width: 1000px;
  margin: 0 auto;
`;
