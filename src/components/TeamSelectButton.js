import styled from '@emotion/styled';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MatchButton, TeamButton } from '../styles/styles';

const TeamSelectButton = ({ matchType, setMatchType }) => {
  const handleMatchType = () => {
    if (matchType === 'solo') {
      setMatchType('team');
    } else {
      setMatchType('solo');
    }
  };

  return (
    <Container>
      <MatchButton
        matchType={matchType}
        borderWidth={'0.7px 0 0.7px 0.7px'}
        borderRadius={'5px 0 0 5px'}
        width={'100px'}
        height={'25px'}
        onClick={handleMatchType}
      >
        <FontAwesomeIcon icon={faUser} />
        개인전
      </MatchButton>
      <TeamButton
        matchType={matchType}
        borderWidth={'0.7px 0.7px 0.7px 0.7px'}
        borderRadius={'0 5px 5px 0'}
        width={'100px'}
        height={'25px'}
        onClick={handleMatchType}
      >
        <FontAwesomeIcon className="usersIcon" icon={faUsers} />
        팀전
      </TeamButton>
    </Container>
  );
};

export default TeamSelectButton;

const Container = styled.div`
  .userIcon {
    color: '#fff';
    :hover {
      color: '#fff';
    }
  }
  .usersIcon {
    :hover {
      color: '#fff';
    }
  }
`;
