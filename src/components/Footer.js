import styled from '@emotion/styled';
import React from 'react';
import LabLogo from '../assets/img/lab_logo.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <Inner>
        <LogoWrap>
          <Logo alt="LabLogo" src={LabLogo} />
          <Copy>Data based on NEXON DEVELOPERS</Copy>
        </LogoWrap>
        <InfoList>
          <Info>
            <Link href="/">About TMI</Link>
          </Info>
          <Info>
            <Link
              href="https://goo.gl/forms/gVRtyj8ZuEvos8Nt1"
              target="_blank"
              rel="noreferrer"
            >
              문의/피드백
            </Link>
          </Info>
          <Info>
            <Link href="/kart/board">업데이트 로그</Link>
          </Info>
          <Info>
            <Link
              href="https://career.nexon.com/"
              target="_blank"
              rel="noreferrer"
            >
              채용
            </Link>
          </Info>
        </InfoList>
      </Inner>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  padding-bottom: 30px;
  background-color: #fafafa;
`;

const Inner = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const LogoWrap = styled.div``;

const Logo = styled.img`
  vertical-align: middle;
  opacity: 0.3;
  width: 140px;
  margin-right: 10px;
`;

const Copy = styled.span`
  display: inline-block;
  width: 250px;
  padding-left: 10px;
  font-weight: 400;
  color: #a1a1a1;
  border-left: 1px solid #ccc;
`;

const InfoList = styled.ul`
  vertical-align: middle;
`;
const Info = styled.li`
  float: left;
  margin-top: 10px;
  padding-right: 10px;
  margin-right: 10px;
  font-weight: 400;
`;
const Link = styled.a`
  text-decoration: none;
  color: #a1a1a1;
  font-size: 12px;
`;
