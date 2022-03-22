import styled from '@emotion/styled';
import React from 'react';

const Tab = () => {
  return (
    <TabContainer>
      <TabBox>
        <TabItem>통합</TabItem>
        <TabItem>매우빠름</TabItem>
        <TabItem>무한부스터</TabItem>
      </TabBox>
    </TabContainer>
  );
};

export default Tab;

const TabContainer = styled.div`
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  position: relative;
`;
const TabBox = styled.ul`
  display: flex;
`;
const TabItem = styled.li`
  position: relative;
  margin-top: 25px;
  width: 81px;
  height: 35px;
  text-align: center;
  padding: 10px;
  position: relative;
  cursor: pointer;
`;
