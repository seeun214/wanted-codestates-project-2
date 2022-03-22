import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ContentBox } from '../../styles/styles';
import { BlueText, Summary, Title } from './TotalRecord';

const Comment = () => {
  const [todayMessage, setTodayMessage] = useState();
  return (
    <ContentBox marginRight={true}>
      <Title>
        <BlueText>응원</BlueText>한마디
        <Summary>
          {/* {total}전 {win}승 {total - win}패 */}오늘 {todayMessage} 전체 26개
        </Summary>
      </Title>
      <MessageContainer>
        <MessageList>
          <Message>
            <NinkName></NinkName>
            <SpeechBubble></SpeechBubble>
          </Message>
        </MessageList>
      </MessageContainer>
    </ContentBox>
  );
};

export default Comment;

const MessageContainer = styled.div`
  margin: 0 12px 0;
  height: 159px;
  overflow-y: auto;
`;
const MessageList = styled.ul``;
const Message = styled.li`
  display: flex;
`;
const NinkName = styled.div``;
const SpeechBubble = styled.div``;
