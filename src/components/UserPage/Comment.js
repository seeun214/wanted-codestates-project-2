import styled from '@emotion/styled';
import React from 'react';
import { ContentBox } from '../../styles/styles';
import { BlueText, Summary, Title } from './TotalRecord';

const Comment = () => {
  return (
    <ContentBox marginRight={true}>
      <Title>
        <BlueText>응원</BlueText>한마디
        <Summary>
          {/* {total}전 {win}승 {total - win}패 */}오늘 2개 전체 26개
        </Summary>
      </Title>
    </ContentBox>
  );
};

export default Comment;
