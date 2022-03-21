import styled from '@emotion/styled';
import React from 'react';
import logo from '../assets/logo_kart.png';
import tmiLogo from '../assets/tmi_logo_default_b.svg';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderUtil>
        <Inner>
          <LogoBox>
            <Logo alt="logo" src={logo} />
            <Down />
          </LogoBox>
          <Link to="/">
            <TmiLogo alt="tmiLogo" src={tmiLogo} />
          </Link>
          <HomeLogo href="https://kart.nexon.com/Main/Index.aspx">
            카트라이더 홈페이지 바로가기
          </HomeLogo>
        </Inner>
      </HeaderUtil>
      <HeaderSection>
        <Inner>
          <TabWrap>
            <Link to="/">
              <Tab>홈</Tab>
            </Link>
            <Link to="/rank">
              <Tab>랭킹</Tab>
            </Link>
            <Tab>카트</Tab>
            <Tab>트랙</Tab>
          </TabWrap>
          <Search />
        </Inner>
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 103px;
  display: flex;
  flex-direction: column;
`;

const HeaderUtil = styled.div`
  background-color: #fff;
`;

const Inner = styled.div`
  position: relative;
  width: 1000px;
  height: 48px;
  margin: auto;
  line-height: 48px;
  display: flex;
`;

const LogoBox = styled.div`
  position: relative;
  height: 48px;
  width: 100px;
  margin-right: 8px;
`;

const Logo = styled.img`
  vertical-align: middle;
`;

const Down = styled.div`
  position: absolute;
  top: 22px;
  right: 8px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #ccc;
`;

const TmiLogo = styled.img`
  width: 45px;
  height: 48px;
`;
const HomeLogo = styled.a`
  position: absolute;
  right: 0;
  text-decoration: none;
  font-size: 12px;
  color: #6c7a89;
`;
const HeaderSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 8rem;
  background-color: #005fcc;
`;

const TabWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

const Tab = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
  height: 4rem;
  color: #ffffff;
  opacity: 0.5;
  :hover {
    color: #ffffff;
    cursor: pointer;
    opacity: 1;
  }
`;
