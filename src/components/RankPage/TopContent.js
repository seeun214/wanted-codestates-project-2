import styled from '@emotion/styled';
import React from 'react';
import { MatchButton } from '../../styles/styles';
import TeamSelectButton from '../TeamSelectButton';

const TopContent = () => {
  return (
    <Container>
      <PageName>3월 TMI 랭킹</PageName>
      <Line></Line>
      <SubInfo>
        <BoldText>랭킹 산정기간</BoldText>
        2022년 03월 01일 00:00:00&nbsp;&nbsp;~&nbsp;&nbsp;2022년 03월 31일
        24:00:00
      </SubInfo>
      <SubInfo>
        <BoldText>최근 업데이트</BoldText>
        2022년 03월 24일 09:15:14
      </SubInfo>
      <GuideButton>랭킹가이드</GuideButton>
      <ButtonsWrap>
        <SpeedSelect>
          <MatchButton
            borderWidth={'0.7px 0 0.7px 0.7px'}
            borderRadius={'5px 0 0 5px'}
            width={'36px'}
            height={'25px'}
            color={'#fff'}
          >
            통합
          </MatchButton>
          <MatchButton
            borderWidth={'0.7px'}
            borderRadius={'0'}
            width={'36px'}
            height={'25px'}
            color={'#fff'}
          >
            매빠
          </MatchButton>
          <MatchButton
            borderWidth={'0.7px 0.7px 0.7px 0px'}
            borderRadius={'0 5px 5px 0'}
            width={'36px'}
            height={'25px'}
            color={'#fff'}
          >
            무부
          </MatchButton>
        </SpeedSelect>
        <TeamSelect>
          <TeamSelectButton />
        </TeamSelect>
      </ButtonsWrap>
    </Container>
  );
};

export default TopContent;

const Container = styled.div`
  z-index: 5;
  position: relative;
  width: 1000px;
  padding-top: 50px;
  margin: 0 auto;
  background-color: transparent;
`;

const PageName = styled.p`
  font-size: 22px;
  font-weight: 400;
  padding-left: 10px;
  margin-bottom: 10px;
  color: #fff;
`;

const Line = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  width: 35px;
  height: 3px;
  background-color: #fff;
`;

const SubInfo = styled.div`
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  font-size: 12px;
  font-weight: 400;
  padding-left: 10px;
  color: #fff;
`;

const BoldText = styled.span`
  font-weight: 500;
  margin-right: 5px;
`;

const GuideButton = styled.button`
  position: absolute;
  top: 110px;
  right: 10px;
  border: 1px solid #fff;
  color: #fff;
  background-color: #005fcc;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
`;

const ButtonsWrap = styled.div`
  position: relative;
  height: 45px;
`;

const SpeedSelect = styled.div`
  position: absolute;
  top: 20px;
  left: 235px;
  display: inline-block;
`;

const TeamSelect = styled.div`
  position: relative;
  top: 20px;
  left: 10px;
  display: inline-block;
  ::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 27px;
    right: -12px;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  }
`;
