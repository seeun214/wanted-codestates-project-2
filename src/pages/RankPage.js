import styled from '@emotion/styled';
import React from 'react';

const RankPage = () => {
  return (
    <>
      <RankContainer>
        <CotentWrap>
          <TopContent>
            <PageName>3월 TMI 랭킹</PageName>
            <Line></Line>
          </TopContent>
        </CotentWrap>
      </RankContainer>
    </>
  );
};

export default RankPage;

const RankContainer = styled.div`
  position: relative;
  background-color: #fafafa;
  padding-bottom: 200px;
  min-height: 800px;
`;

const CotentWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  background: #005fcc;
  overflow: hidden;
`;

const TopContent = styled.div``;

const PageName = styled.div``;

const Line = styled.div``;
