import styled from '@emotion/styled';
import React from 'react';
import SearchForm from '../components/HomePage/SearchForm';

const HomePage = () => {
  return (
    <HomeContainer>
      <Inner>
        <HomeTitle>
          <MainMessage>
            <ApiLink>
              <a className="link" href="https://developers.nexon.com/">
                넥슨 오픈API 기반
              </a>
            </ApiLink>
            <SerachTitle>
              카트라이더
              <BoldText> 전적 </BoldText>
              검색
            </SerachTitle>
            <MainCopy>
              <Message>사 회 적 거 리 두 기</Message>
            </MainCopy>
            <SearchForm />
          </MainMessage>
        </HomeTitle>

        <LeftImg src="https://tmi.nexon.com/img/assets/covid_left.png"></LeftImg>
        <RightImg src="https://tmi.nexon.com/img/assets/covid_right.png"></RightImg>
        <LeftBack></LeftBack>
        <RightBack></RightBack>
      </Inner>
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(https://tmi.nexon.com/img/main_bg1.png);
  height: 696px;
`;

const Inner = styled.div`
  width: 1000px;
  position: relative;
  margin: auto;
  color: #fff;
`;

const HomeTitle = styled.div`
  position: relative;
  height: 655px;
  z-index: 2;
`;

const MainMessage = styled.div`
  padding-top: 100px;
  text-align: center;
`;

const ApiLink = styled.p`
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  a {
    text-decoration: none !important;
    color: inherit;
  }
`;

const SerachTitle = styled.p`
  margin-top: 8px;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
`;

const BoldText = styled.span`
  font-weight: 500;
`;

const MainCopy = styled.div`
  margin-top: 5px;
  display: inline-block;
  width: 280px;
  line-height: 26px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

const Message = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

const LeftImg = styled.img`
  position: absolute;
  width: 380px;
  top: 100px;
  left: 0;
  z-index: 87;
  margin-left: -200px;
  transition: all 0.5s;
  z-index: 1;
`;

const RightImg = styled.img`
  position: absolute;
  width: 380px;
  top: 100px;
  right: 0;
  z-index: 87;
  margin-right: -200px;
  transition: all 0.5s;
  z-index: 1;
`;

const LeftBack = styled.span`
  position: absolute;
  width: 447px;
  height: 296px;
  top: 90px;
  left: 0;
  z-index: 87;
  margin-left: -250px;
  background-image: url('https://tmi.nexon.com/img/main_left_bg.png');
  background-size: cover;
  background-position: 50%;
  transition: all 0.3s ease-in-out;
  z-index: 1;
`;

const RightBack = styled.span`
  position: absolute;
  width: 527px;
  height: 317px;
  top: 90px;
  right: 0;
  z-index: 87;
  margin-right: -250px;
  background-image: url('https://tmi.nexon.com/img/main_right_bg.png');
  background-size: cover;
  background-position: 50%;
  transition: all 0.3s ease-in-out;
  z-index: 1;
`;
