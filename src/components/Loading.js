import styled from '@emotion/styled';
import ReactLoading from 'react-loading';
import React from 'react';

const Loading = () => {
  return (
    <>
      <SpinContainer>
        <ReactLoading width="40px" height="60px" type="spin" color="#005fcc" />
        <LoadMessage>데이터를 집계중입니다.</LoadMessage>
      </SpinContainer>
    </>
  );
};

export default Loading;

const SpinContainer = styled.div`
  height: 100vh;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const LoadMessage = styled.div``;
