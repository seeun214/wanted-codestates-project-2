import styled from '@emotion/styled';
import React from 'react';

const RecordList = () => {
  return (
    <ListContainer>
      <Section>
        <Type>15시간 전</Type>
        <Result>
          #1
          <Total>/ 8</Total>
        </Result>
        <Track> 1920 아슬아슬 비행장</Track>
        <Kart>몬스터 X LE</Kart>
        <Time> 2'28'56</Time>
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
  margin-left: 10px;
  margin-top: 40px;
`;
const Section = styled.div`
  position: relative;
  box-sizing: border-box;
  display: table;
  margin-bottom: 5px;
  width: 100%;
  height: 88px;
  font-size: 16px;
  background-color: #fff;
  border-width: 1px 1px 1px 4px;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1;
  border-style: solid;
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
  color: #1f334a;
  opacity: 0.5;
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
