import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import TrackChart from '../../Chart/TrackChart';
import { BlueText } from '../StatsContent/TotalRecord';
import TrackTable from './TrackTable';
import TrackMetaData from '../../../assets/track.json';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatchList } from '../../../redux/reducers/allMatchListReducer';
import KartThumnail from './KartThumnail';
import KartTable from './KartTable';

const RecordTable = ({ userMatchdata, matchType }) => {
  const [trackData, setTrackData] = useState();
  const [tabIndex, setTabIndex] = useState(1);
  const { data, loading, error } = useSelector((state) => state.matchAllList);
  const dispatch = useDispatch();
  if (userMatchdata) {
    const trackId = userMatchdata.map((el) => el.trackId);
    // const track = trackId.map((trackId)=>{
    //   TrackMetaData.map((el) => el.id === trackId);
  }
  useEffect(() => {
    dispatch(
      getAllMatchList({
        matchType,
      }),
    );
  }, [matchType]);

  console.log(data);
  return (
    <Container>
      <TabBox>
        <Tab
          className={tabIndex === 1 ? 'clickedTab' : 'tab'}
          onClick={() => setTabIndex(1)}
        >
          트랙
        </Tab>
        <Tab
          className={tabIndex === 2 ? 'clickedTab' : 'tab'}
          onClick={() => setTabIndex(2)}
        >
          카트
        </Tab>
      </TabBox>
      <TableWrap>
        {tabIndex === 1 ? (
          <>
            <Title>
              <BlueText>트랙</BlueText>전적
            </Title>
            <Summary>
              평균 상위 <SumBlueText> 8.68</SumBlueText>%
            </Summary>
          </>
        ) : (
          <Title>
            <BlueText>카트</BlueText>전적
          </Title>
        )}

        <GraphWrap>
          {tabIndex === 1 ? <TrackChart /> : <KartThumnail />}
        </GraphWrap>
        <TableWrapper>
          {tabIndex === 1 ? <TrackTable /> : <KartTable />}
        </TableWrapper>
      </TableWrap>
    </Container>
  );
};

export default RecordTable;

const Container = styled.div`
  width: 328px;
`;

const TabBox = styled.ul`
  height: 40px;
  display: flex;
`;
const Tab = styled.li`
  width: 116px;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  font-size: 0.8rem;
  color: #a1a1a1;
  background-color: #ebebeb;
  &.clickedTab {
    color: #0077ff;
    border-bottom: 2px solid #0077ff;
    background-color: #fff;
    transition: 0.4s;
  }
`;

const SumBlueText = styled.span`
  margin-left: 4px;
  font-size: 12px;
  color: #07f;
`;

const TableWrap = styled.div`
  position: relative;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
`;

const Title = styled.h5`
  position: relative;
  padding: 0 8px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #1f334a;
  vertical-align: middle;
`;

const Summary = styled.p`
  position: absolute;
  top: 26px;
  right: 28px;
  font-size: 12px;
  font-weight: 500;
`;
const GraphWrap = styled.div`
  border-top: 1px solid #ccc;
  margin: 0 25px 0 25px;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const TableWrapper = styled.ul`
  overflow-y: auto;
  height: 235px;
  text-align: center;
  border-top: 1px solid #f2f2f2;
  font-weight: 400;
`;
