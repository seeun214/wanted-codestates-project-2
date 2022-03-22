import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllMatchList,
  getUserMatchList,
} from '../redux/reducers/matchListReducer';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const UserPage = () => {
  const soloType =
    '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a';
  const [nickName, setNickName] = useState('BBEESSTT');
  const [matchType, setMatchType] = useState(soloType);
  const { data, loading, error } = useSelector((state) => state.matchList);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(
      getUserMatchList({
        nickName: nickName,
        matchType,
      }),
    );
  }, [matchType]);

  useEffect(() => {
    if (params.id) {
      setNickName(params.id);
    }
  }, [params.id]);

  console.log('user Page');
  console.log(data.userMatch);
  console.log(data.nickName);
  console.log(data.character);

  return loading ? (
    <Loading />
  ) : (
    <UserContainer>
      <Inner>
        <Message>
          <FontAwesomeIcon icon={faInfoCircle} />
          카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다.
        </Message>
        <Profile
          nickName={data?.nickName}
          character={data?.character}
          matchType={matchType}
          setMatchType={setMatchType}
        />
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
