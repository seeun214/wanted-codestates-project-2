import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import KartMetaData from '../../../assets/kart.json';

const KartThumnail = ({ kartData }) => {
  const [selectedKart, setSelectedKart] = useState(0);

  return (
    <Container>
      <KartName>
        <Badge>일반</Badge>
        {kartData[selectedKart].kartName}
      </KartName>
      <Kart>
        <Thumnail>
          <KartImg
            alt="kartImg"
            data-v-749ad536=""
            src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${kartData[selectedKart].kartId}.png?v=1647948645`}
            onerror='this.src="/img/assets/empty_kart.png"'
          ></KartImg>
        </Thumnail>
        <RecordWrap>
          {kartData.map((kart) => (
            <RecordList>
              <Record>
                <TrackImg
                  alt="TrackImg"
                  src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${kart.kartId}.png?v=1647948645`}
                  onerror='this.src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/allRandomThumb2@zz.png"'
                ></TrackImg>
                <Text>코해오름리아 제주 </Text>
                <Text>1'04'49</Text>
              </Record>
            </RecordList>
          ))}
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
