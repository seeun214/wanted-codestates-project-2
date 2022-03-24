import styled from '@emotion/styled';
import React from 'react';

const KartTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <Th>선택</Th>
          <Th>카트</Th>
          <Th>횟수</Th>
          <Th>승률</Th>
          <Th>리타율</Th>
        </TableHead>
        <Tbody>
          <Tr>
            <Td>
              <input type="radio" value="id값" />
            </Td>
            <Td
              style={{
                textAlign: 'left',
                paddingRight: '20px',
              }}
            >
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/brodi_1.png"
                alt="트랙이미지"
                height={27}
              ></img>
              브로디 비밀의 연구
            </Td>
            <Td>195</Td>
            <Td>34%</Td>
            <Td>8%</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default KartTable;

const TableContainer = styled.div`
  box-sizing: border-box;
  width: 378px;
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
  width: 378px;
  line-height: 35px;
  text-align: center;

  /* input:focus {
    border: 1px solid #07f;
  } */
`;

const Td = styled.td`
  line-height: 45px;

  padding-left: 5px;
  padding-right: 8px;
  text-align: center;
  font-size: 14px;
  img {
    margin-right: 5px;
    height: 27px;
    vertical-align: middle;
  }
`;
