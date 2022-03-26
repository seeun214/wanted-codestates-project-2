import styled from '@emotion/styled';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Banner = ({ nickName }) => {
  const href = `https://tmi.nexon.com/simulator/${nickName}`;
  return (
    <Container>
      1대1 매칭 시뮬레이터 - '{nickName}' 와 가상 대결을 펼쳐보세요.
      <Matcing>
        <Href href={`${href}`}>
          <FontAwesomeIcon icon={faCalculator} />
          매칭하기
        </Href>
      </Matcing>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  position: relative;
  height: 45px;
  line-height: 45px;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 20s ease infinite;
  color: #fff;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;
  @keyframes gradientBG {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

const Matcing = styled.span`
  position: absolute;
  vertical-align: middle;
  display: inline-block;
  top: 0;
  right: 0;
  margin-top: 8.5px;
  margin-right: 20px;
  width: 82px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border: 0.7px solid #fff;
  border-radius: 15px;
  a {
    text-decoration: none;
    color: #fff;
  }
  svg {
    margin-right: 5px;
  }
`;

const Href = styled.a``;
