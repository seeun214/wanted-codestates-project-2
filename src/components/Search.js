import styled from '@emotion/styled';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Search = () => {
  const [inputNickname, setInputNickname] = useState('');

  const handleSubmit = (e) => {
    e.prventDefault();
    Navigate(`/user/${inputNickname}&matchType=indi`);
    setInputNickname('');
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <input type="text" placeholder="닉네임 검색" />
      <FontAwesomeIcon onClick={handleSubmit} icon={faMagnifyingGlass} />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.form`
  position: absolute;
  top: 0;
  right: 5px;
  width: 220px;
  height: 80%;
  border-bottom: 1px solid #fff;
  opacity: ${({ text }) => {
    return text ? '1' : '0.5';
  }};
  transition: 0.5s;
  :hover {
    opacity: 1;
  }
  input {
    width: 195px;
    height: 32px;
    padding-left: 10px;
    padding-right: 25px;
    font-size: 12px;
    background-color: transparent;
    outline: 0;
    color: #fff;
    border: none;

    opacity: 0.5;
    transition: 0.3s ease;
  }
  svg {
    position: absolute;
    font-size: 14px;
    top: 15px;
    right: 5;
    color: #fff;
    opacity: 0.5;
    transition: 0.3s ease;
  }
`;
