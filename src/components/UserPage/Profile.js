import styled from '@emotion/styled';
import {
  faBell,
  faEye,
  faRedo,
  faShareAlt,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ActionButton, TeamSelectButton } from '../../styles/styles';

const Profile = () => {
  const character =
    '42c729e64e31aea803e4881432f7b95129ce97535c29e4f9a72919a9f267b418';
  return (
    <Container>
      <ProfileWrap>
        <User>
          <img
            alt="character"
            src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${character}.png`}
          ></img>
        </User>
        <Name>
          <h1>
            BBEESSTT
            <img
              alt="license"
              src="https://tmi.nexon.com/img/icon_l3.png"
            ></img>
          </h1>
          {/* border-width: 0.7px 0 0.7px 0.7px; border-radius: 5px 0 0 5px;
          border-width: 0.7px 0.7px 0.7px 0.7px; border-radius: 0 5px 5px 0; */}
          <TeamSelect>
            <TeamSelectButton
              borderWidth={'0.7px 0 0.7px 0.7px'}
              borderRadius={'5px 0 0 5px'}
            >
              <a data-v-749ad536="" href="javascript:;" title="스피드개인전">
                <FontAwesomeIcon icon={faUser} />
                개인전
              </a>
            </TeamSelectButton>
            <TeamSelectButton
              borderWidth={'0.7px 0.7px 0.7px 0.7px'}
              borderRadius={'0 5px 5px 0'}
            >
              <a data-v-749ad536="" href="javascript:;" title="스피드팀전">
                <FontAwesomeIcon icon={faUsers} />
                팀전
              </a>
            </TeamSelectButton>
          </TeamSelect>
          <UserAction>
            <ActionButton>
              <FontAwesomeIcon icon={faRedo} />
              전적갱신
            </ActionButton>
            <ActionButton>
              <FontAwesomeIcon icon={faBell} />
              신고하기
            </ActionButton>
            <ActionButton>
              <FontAwesomeIcon icon={faShareAlt} />
              공유하기
            </ActionButton>
          </UserAction>
        </Name>
        <Rank>
          <p>
            <FontAwesomeIcon icon={faEye} /> 페이지뷰
          </p>
          <p>1,291</p>
        </Rank>
      </ProfileWrap>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  position: relative;
  height: 175px;
  background-color: rgba(0, 0, 0, 0.025);
  background-image: url('https://tmi.nexon.com/img/background_flag_w.png');
  background-size: cover;
  background-position: 50%;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  z-index: 2;
`;

const ProfileWrap = styled.div`
  display: flex;
  padding-top: 26px;
`;

const User = styled.div`
  img {
    width: 164px;
    height: 123px;
  }
`;

const Name = styled.div`
  width: 507.26px;
  height: 123px;
  margin-left: 20px;
  h1 {
    font-weight: bold;
    font-size: 45px;
    height: 62px;

    img {
      width: 25px;
      height: 25px;
      margin-left: 5px;
    }
  }
`;

const TeamSelect = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 15px;
  ::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 27px;
    right: 0;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  }
`;

const UserAction = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
`;

const Rank = styled.div`
  position: absolute;
  top: 88px;
  right: 40px;
  margin-top: -23.5px;
  color: #6c7a89;
  text-align: center;

  p: nth-child(1) {
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 14px;
    height: 19.5px;
  }
  p: nth-child(2) {
    font-size: 20px;
  }
`;
