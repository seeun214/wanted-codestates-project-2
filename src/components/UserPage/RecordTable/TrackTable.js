import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const TrackTable = ({ trackData }) => {
  // const [recordWithoutZero, setRecordWithoutZero] = useState([]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <tr>
            <Th>선택</Th>
            <Th>트랙</Th>
            <Th>횟수</Th>
            <Th>승률</Th>
            <Th>기록</Th>
            <Th>상위</Th>
          </tr>
        </TableHead>
        <Tbody>
          {trackData?.map((track, index) => (
            <TableBody key={index}>
              <Td>
                <input type="radio" value="id값" />
              </Td>
              <Td
                style={{
                  textAlign: 'left',
                }}
              >
                <img
                  src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/brodi_1.png"
                  alt="트랙이미지"
                  height={27}
                ></img>
                {track.trackName}
              </Td>
              <Td>{track.number}</Td>
              <Td>{`${Math.round((track.win / track.number) * 100)}`}%</Td>
              <Td> 2'13'72 </Td>
              <Td>15%</Td>
            </TableBody>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TrackTable;

const TableContainer = styled.div`
  box-sizing: border-box;
  width: 327px;
  font-size: 13px;
  line-height: 35px;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
`;

const Table = styled.table``;

const TableHead = styled.thead`
  background-color: #fbfbfb;
  box-sizing: border-box;
  line-height: 35px;
`;

const Th = styled.th`
  position: relative;
  font-weight: bold;
  :not(:last-child)::after {
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    display: inline-block;
    width: 1px;
    height: 15px;
    background-color: #ccc;
  }
`;

const Tbody = styled.tbody``;

const TableBody = styled.tr`
  box-sizing: border-box;
  width: 378px;
  line-height: 35px;
  text-align: center;

  /* input:focus {
    border: 1px solid #07f;
  } */
`;

const Td = styled.td`
  line-height: 45px;
  padding-left: 3px;
  padding-right: 5px;
  text-align: center;
  img {
    margin-right: 5px;
    height: 27px;
    vertical-align: middle;
  }
`;
