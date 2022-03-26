import styled from '@emotion/styled';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { ContentBox } from '../../../styles/styles';
import { BlueText, Summary, Title } from './TotalRecord';
import firebase from 'firebase/compat/app';
import { useFirestoreQuery } from '../../../hooks/useFirestoreQuery';
import firebaseApp from '../../../firebase';
import checkToday from '../../../api/checkToday';

const Comment = ({ id = null }) => {
  const db = firebaseApp.firestore();
  const messageRef = db.collection(`message`);
  const message = useFirestoreQuery(messageRef.orderBy('createdAt', 'desc'));
  const [loading, setLoading] = useState();
  const [messages, setMessages] = useState([]);
  const [todayMessage, setTodayMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState({
    nickName: '',
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage) {
      messageRef.add({
        nickName: inputMessage.nickName,
        content: inputMessage.content,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInputMessage({ nickName: '', content: '' });
  };

  const handleInputChange = (e) => {
    setInputMessage({ ...inputMessage, [e.target.name]: e.target.value });
  };

  //firebase db에서 message 가져오기
  useEffect(() => {
    setLoading(true);
    db.collection('message')
      .orderBy('createdAt', 'desc')
      .onSnapshot((d) => {
        setMessages(
          d.docs.map((doc) => ({
            nickName: doc.data().nickName,
            content: doc.data().content,
            createdAt: doc.data().createdAt.toDate(),
          })),
        );
      });
    return () => setLoading(false);
  }, [db]);

  //오늘 작성된 message
  useEffect(() => {
    if (messages) {
      const todayMessage = messages.filter((message) =>
        checkToday(message.createdAt),
      );
      setTodayMessage([todayMessage]);
    }
  }, [messages]);

  return (
    <ContentBox marginRight={true}>
      <Title>
        <BlueText>응원</BlueText>한마디
        <Summary>
          오늘 {todayMessage.length !== 0 ? todayMessage[0].length : '0'}개 전체
          {message ? message.length : '0'}개
        </Summary>
      </Title>
      <MessageContainer>
        <MessageList>
          {messages?.map((message, index) => (
            <Message key={index}>
              <NinkName>
                <Text>{message.nickName}</Text>
                {checkToday(message.createdAt) === true ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCircle}
                      color={'#f62459'}
                      fontSize={'9px'}
                    />
                  </>
                ) : null}
              </NinkName>
              <SpeechBubble>{message.content}</SpeechBubble>
            </Message>
          ))}
        </MessageList>
      </MessageContainer>

      <Bottom>
        <InputMessage>
          <Input
            type="text"
            placeholder="닉네임"
            maxlength="5"
            inputSize={'nick'}
            name="nickName"
            onChange={handleInputChange}
            value={inputMessage.nickName}
          />
          <Input
            type="text"
            placeholder="최대 30자"
            maxlength="30"
            name="content"
            onChange={handleInputChange}
            value={inputMessage.content}
          />
          <Button type="button" onClick={handleSubmit}>
            남기기
          </Button>
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

const Text = styled.span`
  margin-right: 5px;
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

const InputMessage = styled.form`
  display: flex;
  height: 30px;
`;

const Input = styled.input`
  flex: ${(props) => (props.inputSize ? '0.8' : '2')};
  margin-right: 5px;
  vertical-align: middle;
  width: ${(props) => (props.inputSize ? '15%' : '60%')};
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
