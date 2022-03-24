import styled from '@emotion/styled';
import React from 'react';

const TopRanker = ({ medalImg }) => {
  return (
    <Container>
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
        <WinPercent></WinPercent>
        <RetirePercent></RetirePercent>
      </PercentWrap>
    </Container>
  );
};

export default TopRanker;

const Container = styled.div`
  /* margin-left: 88px; */
  position: relative;
  display: inline-block;
  flex: 1;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 42px;
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
`;

const MedalImg = styled.img``;

const UserInfo = styled.div``;

const Nick = styled.div``;

const SubInfo = styled.div``;

const BoldText = styled.div``;

const PercentWrap = styled.div``;

const WinPercent = styled.div``;

const RetirePercent = styled.div``;
