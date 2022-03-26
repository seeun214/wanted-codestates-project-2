import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import TrackChart from '../../Chart/TrackChart';
import { BlueText } from '../StatsContent/TotalRecord';
import TrackTable from './TrackTable';
import TrackMetaData from '../../../assets/track.json';
import KartThumnail from './KartThumnail';
import KartTable from './KartTable';
import KartMetaData from '../../../assets/kart.json';

const RecordTable = ({ userMatchdata, matchType }) => {
  const [trackData, setTrackData] = useState();
  const [tabIndex, setTabIndex] = useState(1);
  const [kartData, setKartData] = useState();

  useEffect(() => {
    if (userMatchdata) {
      const trackId = userMatchdata.map((el) => el.trackId);
      const uniqueTrackId = [...new Set(trackId)];
      const trackInfo = uniqueTrackId.map((trackId) => {
        const trackList = userMatchdata.filter((el) => el.trackId === trackId);
        const trackMatch = TrackMetaData.find((el) => el.id === trackId);
        const number = trackList.length;
        const win = trackList.filter(
          (el) => el.trackId === trackId && el.matchWin === '1',
        ).length;
        const recordArray = trackList.map((el) => Number(el.matchTime));

        return {
          trackId,
          trackName: trackMatch.name,
          number,
          win,
          recordArray,
        };
      });
      trackInfo.sort((a, b) => b.number - a.number);
      setTrackData(trackInfo);
    }
  }, [userMatchdata]);

  useEffect(() => {
    if (userMatchdata) {
      const kartId = userMatchdata.map((el) => el.kart);
      const uniqueKartId = [...new Set(kartId)];
      const kartInfo = uniqueKartId.map((kartId) => {
        const kartList = userMatchdata.filter((el) => el.kart === kartId);
        const kartMatch = KartMetaData.find((el) => el.id === kartId);
        const number = kartList.length;
        const win = kartList.filter(
          (el) => el.kart === kartId && el.matchWin === '1',
        ).length;
        const retire = kartList.filter(
          (el) => el.kart === kartId && el.matchRetired === '1',
        ).length;
        return {
          kartId,
          kartList,
          kartName: kartMatch.name,
          number,
          win,
          retire,
        };
      });
      kartInfo.sort((a, b) => b.number - a.number);
      setKartData(kartInfo);
    }
  }, [userMatchdata]);

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
          {tabIndex === 1 ? (
            <TrackChart />
          ) : (
            <KartThumnail kartData={kartData} />
          )}
        </GraphWrap>
        <TableWrapper>
          {tabIndex === 1 ? (
            <TrackTable trackData={trackData} />
          ) : (
            <KartTable kartData={kartData} />
          )}
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
