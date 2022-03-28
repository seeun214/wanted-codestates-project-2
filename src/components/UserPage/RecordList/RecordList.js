import styled from '@emotion/styled';
import React from 'react';
import TrackMetaData from '../../../assets/track.json';
import KartMetaData from '../../../assets/kart.json';
import timeForToday from '../../../api/timeForToday';

const RecordList = ({ data }) => {
  let trackName, KartName;

  if (data) {
    trackName = TrackMetaData.find((el) => el.id === data.trackId);
    KartName = KartMetaData.find((el) => el.id === data.kart);
  }

  return (
    <ListContainer>
      <Section win={data.matchRank} retire={data.matchRetired}>
        <Type>{timeForToday(data.endTime)}</Type>
        {data.matchRetired === '1' || data.matchRank === '' ? (
          <Result win={data.matchRank} retire={'1'}>
            #리타이어
          </Result>
        ) : (
          <Result win={data.matchRank}>
            # {data.matchRank}
            <Total>/ {data.playerCount}</Total>
          </Result>
        )}

        <Track>{trackName.name}</Track>
        <Kart>{KartName.name}</Kart>
        <Time> {data.matchRetired === '1' ? '-' : data.matchTime}</Time>
        <Open>
          <Triangle></Triangle>
        </Open>
      </Section>
    </ListContainer>
  );
};

export default RecordList;

const ListContainer = styled.div`
  width: 660px;
`;
const Section = styled.div`
  position: relative;
  box-sizing: border-box;
  display: table;
  margin-bottom: 5px;
  width: 100%;
  height: 88px;
  font-size: 16px;
  background-color: ${(props) =>
    props.win === '1'
      ? '#F0F3FA;'
      : props.retire === '1' || props.win === ''
      ? '#F9F0F2'
      : '#fff'};
  border-width: 1px 1px 1px 4px;
  border-color: ${(props) =>
    props.win === '1'
      ? '#f2f2f2 #f2f2f2 #f2f2f2 #07f;'
      : props.retire === '1' || props.win === ''
      ? '#f2f2f2 #f2f2f2 #f2f2f2 #f62459;'
      : '#f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1;'};
  border-style: solid;
  opacity: 1;
`;
const Type = styled.p`
  display: table-cell;
  vertical-align: middle;
  width: 65px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

const Result = styled.p`
  display: table-cell;
  vertical-align: middle;
  width: 140px;
  padding-left: 10px;
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  color: ${(props) =>
    props.win === '1' ? '#07f' : props.retire === '1' ? '#f62459' : '#1f334a'};
  opacity: ${(props) =>
    (props.win === '1') | (props.retire === '1') ? '1' : '0.5;'};
`;
const Total = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;
const Track = styled.p`
  position: relative;
  font-weight: 400;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 150px;
  height: 30px;
`;
const Kart = styled.p`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 150px;
  height: 30px;
`;
const Time = styled.p`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 100px;
  height: 30px;
  font-weight: 500;
`;
const Open = styled.p`
  position: absolute;
  box-sizing: border-box;
  right: 0;
  width: 40px;
  height: 87px;
  line-height: 87px;
  font-weight: 400;
  text-align: center;
  border-left: 1px solid #ebebeb;
  display: table-cell;
  vertical-align: middle;
`;
const Triangle = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px;
  border-color: #a1a1a1 transparent transparent transparent;
`;
