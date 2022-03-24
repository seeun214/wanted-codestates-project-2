import styled from '@emotion/styled';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ContentBox } from '../../../styles/styles';
import { BlueText, Summary, Title } from './TotalRecord';

const Comment = () => {
  const [todayMessage, setTodayMessage] = useState();
  return (
    <ContentBox marginRight={true}>
      <Title>
        <BlueText>응원</BlueText>한마디
        <Summary>오늘 {todayMessage} 전체 26개</Summary>
      </Title>
      <MessageContainer>
        <MessageList>
          <Message>
            <NinkName>
              새은 <FontAwesomeIcon icon={faCircle} color={'#f62459'} />
            </NinkName>
            <SpeechBubble>오이오이</SpeechBubble>
          </Message>
          <Message>
            <NinkName>
              새은 <FontAwesomeIcon icon={faCircle} color={'#f62459'} />
            </NinkName>
            <SpeechBubble>오이오이</SpeechBubble>
          </Message>
        </MessageList>
      </MessageContainer>
      <Bottom>
        <InputMessage>
          <Input
            type="text"
            placeholder="닉네임"
            maxlength="5"
            class="nick"
            inputType={'nick'}
          />
          <Input
            type="text"
            placeholder="최대 30자"
            maxlength="30"
            class="chat"
          />
          <Button>남기기</Button>
        </InputMessage>
      </Bottom>
    </ContentBox>
  );
};

export default Comment;

const MessageContainer = styled.div`
  margin: 0 12px 0;
  height: 159px;
  overflow-y: auto;
`;

const MessageList = styled.ul`
  margin-left: 5px;
`;

const Message = styled.li`
  display: flex;
  margin-right: 10px;
`;

const NinkName = styled.div`
  display: inline-block;
  color: #07f;
  line-height: 53px;
`;

const SpeechBubble = styled.div`
  margin-left: 15px;
  flex: 2.5;
  display: inline-block;
  position: relative;
  padding: 10px;
  margin: 0.5em 0.5em 0.5em 0.7em;
  border: 1px solid #c3ced5;
  color: #333;
  background: #fff;
  border-radius: 15px;
  font-size: 12px;
  :after {
    content: '';
    position: absolute;
    top: 10px;
    bottom: auto;
    left: -7px;
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent #fff;
    display: block;
    width: 0;
  }
  :before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: auto;
    left: -8px;
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent #c3ced5;
    display: block;
    width: 0;
  }
`;

const Bottom = styled.ul`
  position: relative;
  margin: 8px;
  padding: 8px;
  border-top: 1px solid #f2f2f2;
  line-height: 30px;
`;

const InputMessage = styled.ul`
  display: flex;
  height: 30px;
`;

const Input = styled.input`
  flex: ${(props) => (props.inputType ? '0.8' : '2')};
  margin-right: 5px;
  vertical-align: middle;
  width: ${(props) => (props.inputType ? '15%' : '60%')};
  border: none;
  border-bottom: 1px solid #ccc;
  font-family: Noto Sans KR;
  font-size: 12px;
`;

const Button = styled.button`
  border: 1px solid #ccc;
  background-color: #ccc;
  color: #fff;
  border-radius: 5px;
`;
