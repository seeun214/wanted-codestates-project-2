import styled from '@emotion/styled';
import React from 'react';
import KartTable from './KartTable';

const KartThumnail = () => {
  return (
    <Container>
      <KartName>
        <Badge>일반</Badge>몬스터XLE
      </KartName>
      <Kart>
        <Thumnail>
          <KartImg
            alt="kartImg"
            data-v-749ad536=""
            src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/0b41bf8620b5851d7dcc7eb33765d506e530b8d2e612e6c60823f2b890da3401.png?v=1647948645"
            onerror='this.src="/img/assets/empty_kart.png"'
          ></KartImg>
        </Thumnail>
        <RecordWrap>
          <RecordList>
            <Record>
              <TrackImg
                alt="TrackImg"
                src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png"
                onerror='this.src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/allRandomThumb2@zz.png"'
              ></TrackImg>
              <Text>코리아 제주 해오름</Text>
              <Text>1'04'49</Text>
            </Record>
          </RecordList>
        </RecordWrap>
      </Kart>
    </Container>
  );
};

export default KartThumnail;

const Container = styled.div``;

const KartName = styled.p``;

const Badge = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  text-align: center;
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #1f334a;
  border-radius: 15px;
  color: #1f334a;
`;

const Kart = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Thumnail = styled.div`
  position: relative;
  flex: 4;
  text-align: center;
  line-height: 135px;
  border-right: 1px solid #ccc;
`;

const KartImg = styled.img`
  height: 70px;
  vertical-align: middle;
`;

const RecordWrap = styled.div`
  flex: 6;
`;
const RecordList = styled.ul``;
const Record = styled.li`
  position: relative;
  height: 33px;
  line-height: 33px;
  text-align: left;
  padding-left: 10px;
  display: list-item;
`;

const TrackImg = styled.img`
  height: 23px;
  vertical-align: middle;
  line-height: 33px;
  text-align: left;
`;

const Text = styled.span`
  vertical-align: middle;
  margin-left: 5px;
  line-height: 33px;
  text-align: left;
`;
