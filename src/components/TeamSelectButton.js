import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SelectButton } from '../styles/styles';

const TeamSelectButton = ({ color }) => {
  return (
    <div>
      <SelectButton
        borderWidth={'0.7px 0 0.7px 0.7px'}
        borderRadius={'5px 0 0 5px'}
        width={'100px'}
        height={'25px'}
        color={color}
      >
        <FontAwesomeIcon icon={faUser} />
        개인전
      </SelectButton>
      <SelectButton
        borderWidth={'0.7px 0.7px 0.7px 0.7px'}
        borderRadius={'0 5px 5px 0'}
        width={'100px'}
        height={'25px'}
        color={color}
      >
        <FontAwesomeIcon icon={faUsers} />
        팀전
      </SelectButton>
    </div>
  );
};

export default TeamSelectButton;
