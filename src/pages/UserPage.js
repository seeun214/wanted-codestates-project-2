import styled from '@emotion/styled';
import React from 'react';
import Profile from '../components/UserPage/Profile';
import Banner from '../components/UserPage/Banner';
import TotalRecord from '../components/UserPage/TotalRecord';
import RankTrend from '../components/UserPage/RankTrend';
import Comment from '../components/UserPage/Comment';
import Tab from '../components/UserPage/Tab';
import LeftInfo from '../components/UserPage/LeftInfo';
import RightInfo from '../components/UserPage/RightInfo';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserPage = () => {
  return (
    <UserContainer>
      <Inner>
        <Message>
          <FontAwesomeIcon icon={faInfoCircle} />
          카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다.
        </Message>
        <Profile />
        <Banner />
        <StatsWrap>
          <TotalRecord />
          <RankTrend />
          <Comment />
        </StatsWrap>
        <Tab />
        <InfoWrap>
          <LeftInfo />
          <RightInfo />
        </InfoWrap>
      </Inner>
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.div`
  position: relative;
  background-color: #fafafa;
  padding-bottom: 100px;
  min-height: 800px;
  svg {
    margin-right: 5px;
  }
  a {
    text-decoration: none;
  }
`;

const Inner = styled.div`
  width: 1000px;
  margin: 0 auto;
  background-color: transparent;
`;

const Message = styled.div`
  height: 50px;
  padding: 22px 5px;
`;

const StatsWrap = styled.div`
  margin-top: 20px;
  display: flex;
`;

const InfoWrap = styled.div``;
