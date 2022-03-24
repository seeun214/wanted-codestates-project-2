import styled from '@emotion/styled';
import React, { useState } from 'react';

const Tab = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <TabContainer>
      <TabBox>
        <TabItem
          className={tabIndex === 1 ? 'clickedTab' : 'tab'}
          onClick={() => setTabIndex(1)}
        >
          통합
        </TabItem>
        <TabItem
          className={tabIndex === 2 ? 'clickedTab' : 'tab'}
          onClick={() => setTabIndex(2)}
        >
          매우빠름
        </TabItem>
        <TabItem
          className={tabIndex === 3 ? 'clickedTab' : 'tab'}
          onClick={() => setTabIndex(3)}
        >
          무한부스터
        </TabItem>
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
  color: #a1a1a1;
  cursor: pointer;

  :hover,
  &.clickedTab {
    color: #0077ff;
    border-bottom: 2px solid #0077ff;
    transform-origin: 0% 50%;
  }
`;
