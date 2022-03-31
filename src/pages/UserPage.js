import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMatchList } from '../redux/reducers/matchListReducer';
import { useParams } from 'react-router-dom';
import Profile from '../components/UserPage/Profile';
import Banner from '../components/UserPage/Banner';
import TotalRecord from '../components/UserPage/StatsContent/TotalRecord';
import RankTrend from '../components/UserPage/StatsContent/RankTrend';
import Comment from '../components/UserPage/StatsContent/Comment';
import Tab from '../components/UserPage/Tab';
import RecordTable from '../components/UserPage/RecordTable/RecordTable';
import RecordList from '../components/UserPage/RecordList/RecordList';
import Loading from '../components/Loading';

const UserPage = () => {
  const soloType =
    '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a';
  const teamType =
    'effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e';
  const { data, loading, error } = useSelector((state) => state.matchList);
  const [nickName, setNickName] = useState('');
  const [matchType, setMatchType] = useState('solo');
  const [matchCode, setMatchCode] = useState('');
  const dispatch = useDispatch();
  const params = useParams();

  console.log(data);

  useEffect(() => {
    dispatch(
      getUserMatchList({
        nickName: params.nick,
        matchCode,
      }),
    );
  }, [matchCode, nickName, dispatch, params.nick]);

  useEffect(() => {
    if (matchType === 'solo') {
      setMatchCode(soloType);
    } else {
      setMatchCode(teamType);
    }
  }, [matchType]);

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
          nickName={data.nickName}
          character={data.character}
          matchType={matchType}
          setMatchType={setMatchType}
        />
        <Banner nickName={data.nickName} />
        <StatsWrap>
          <TotalRecord data={data.userMatch} />
          <RankTrend data={data.userMatch} />
          <Comment />
        </StatsWrap>
        <Tab />
        <InfoWrap>
          <RecordTableWrap>
            <RecordTable userMatchdata={data.userMatch} />
          </RecordTableWrap>

          <RecordListWrap>
            {data.userMatch?.map((data, index) => (
              <RecordList data={data} key={index} />
            ))}
          </RecordListWrap>
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

const InfoWrap = styled.div`
  display: flex;
  margin-top: 20px;
`;

const RecordTableWrap = styled.span`
  width: 327px;
  margin-right: 10px;
`;

const RecordListWrap = styled.span`
  width: 660px;
  margin-top: 40px;
`;
