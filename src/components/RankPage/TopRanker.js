import styled from '@emotion/styled';
import React from 'react';
import CircleChart from '../Chart/CircleChart';

const TopRanker = ({ medalImg, marginLeft }) => {
  return (
    <Container marginLeft={marginLeft}>
      <MedalImg alt="medalImg" src={medalImg}></MedalImg>
      <UserInfo>
        <Nick>법사케피</Nick>
        <SubInfo>
          순위<BoldText>1위</BoldText>
        </SubInfo>
        <SubInfo>
          누적포인트<BoldText>6,991PT</BoldText>
        </SubInfo>
      </UserInfo>
      <PercentWrap>
        <WinPercent>
          <PercentTitle>승률</PercentTitle>
          <CircleChart
            percent={'65'}
            color={'#07f'}
            size={'57px'}
            innerSize={'47px'}
            fontSize={'16px'}
          />
        </WinPercent>
        <RetirePercent>
          <PercentTitle>리타이어율</PercentTitle>
          <CircleChart
            percent={'40'}
            color={'#f62459'}
            size={'57px'}
            innerSize={'47px'}
            fontSize={'16px'}
          />
        </RetirePercent>
      </PercentWrap>
    </Container>
  );
};

export default TopRanker;

const Container = styled.div`
  z-index: 5;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0')};
  position: relative;
  display: inline-block;
  flex: 1;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 42px;
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
`;

const MedalImg = styled.img`
  position: absolute;
  top: -12px;
  left: 10px;
`;

const UserInfo = styled.div`
  padding-top: 37px;
  padding-bottom: 20px;
  padding-left: 40px;
  border-radius: 10px;
  background-image: url('https://tmi.nexon.com/img/background_flag_w.png');
  background-size: cover;
  background-position: 80%;
`;

const Nick = styled.div`
  margin-bottom: 13px;
  vertical-align: middle;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  color: #07f;
`;

const SubInfo = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`;

const BoldText = styled.span`
  margin-left: 5px;
  font-weight: 700;
`;

const PercentTitle = styled.p`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 500;
`;

const PercentWrap = styled.div`
  display: flex;
  border-top: 1px solid #07f;
`;

const WinPercent = styled.div`
  position: relative;
  padding-top: 25px;
  flex: 1;
  text-align: center;
  ::after {
    position: absolute;
    content: ' ';
    display: block;
    top: 20px;
    right: 0;
    width: 1px;
    height: 75px;
    background-color: #f2f2f2;
    border: none;
    opacity: 1;
  }
`;

const RetirePercent = styled.div`
  position: relative;
  padding-top: 25px;
  flex: 1;
  text-align: center;
`;
