import styled from '@emotion/styled';
import React from 'react';

const KartTable = ({ kartData }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <tr>
            <Th>선택</Th>
            <Th>카트</Th>
            <Th>횟수</Th>
            <Th>승률</Th>
            <Th>리타율</Th>
          </tr>
        </TableHead>
        <Tbody>
          {kartData.map((kart, index) => (
            <Tr key={kart.kartId}>
              <Td>
                <input type="radio" value="id값" />
              </Td>
              <Td
                style={{
                  textAlign: 'left',
                  paddingRight: '30px',
                }}
              >
                <img
                  src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${kart.kartId}.png?v=1647948645`}
                  alt="kartImg"
                  height={27}
                ></img>
                {kart.kartName}
              </Td>
              <Td>{kart.number}</Td>
              <Td>{`${Math.round((kart.win / kart.number) * 100)}`}%</Td>
              <Td>{`${Math.round((kart.retire / kart.number) * 100)}`}%</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default KartTable;

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
  font-weight: bold;
  font-size: 13px;
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

const Tr = styled.tr`
  box-sizing: border-box;
  line-height: 35px;
  text-align: center;

  /* input:focus {
    border: 1px solid #07f;
  } */
`;

const Td = styled.td`
  line-height: 45px;
  padding-left: 11px;
  padding-right: 10px;
  text-align: center;
  font-size: 14px;
  img {
    margin-right: 5px;
    height: 27px;
    vertical-align: middle;
  }
`;
