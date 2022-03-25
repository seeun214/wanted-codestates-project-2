import styled from '@emotion/styled';
import React from 'react';

const RankList = () => {
  return (
    <Container>
      <RankLists>
        <ListWrap>
          <List>
            <Head>
              <Rank>#</Rank>
              <Nick>닉네임(순위변동)</Nick>
              <Cnt>주행횟수</Cnt>
              <Point>누적포인트(전일대비)</Point>
              <Avg>평균순위</Avg>
            </Head>
          </List>
          <List>
            <UserInfo>
              <Rank>4</Rank>
              <Nick>
                1234Kcm
                <UpDown>-</UpDown>
              </Nick>
              <Cnt>508회</Cnt>
              <Point>3,608 PT</Point>
              <Avg>2.3 위</Avg>
            </UserInfo>
          </List>
        </ListWrap>
      </RankLists>
    </Container>
  );
};

export default RankList;

const Container = styled.div`
  z-index: 5;
  width: 1000px;
  position: relative;
  padding-top: 40px;
  margin: 0 auto;
  background-color: transparent;
`;

const RankLists = styled.div`
  margin-top: 490px;
`;

const ListWrap = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const List = styled.li`
  position: relative;
  margin-bottom: 10px;
  list-style: none;
`;

const UserInfo = styled.div`
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
`;

const Head = styled.div`
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
`;

const Rank = styled.span`
  vertical-align: middle;
  font-weight: 500;
  font-size: 16px;
`;

const Nick = styled.span`
  position: absolute;
  left: 220px;
`;

const UpDown = styled.span``;

const Cnt = styled.span`
  position: absolute;
  right: 140px;
`;

const Point = styled.span`
  display: inline-block;
  width: 120px;
  position: absolute;
  right: 260px;
`;

const Avg = styled.span`
  position: absolute;
  right: 60px;
`;
