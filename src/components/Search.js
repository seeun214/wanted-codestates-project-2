import styled from '@emotion/styled';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (input) => {
    navigate(`/user/${input}`);
    setInput('');
  };

  const onchangeValue = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(input);
    }
  };

  return (
    <SearchContainer>
      <input
        onKeyPress={onKeyPress}
        type="text"
        input={input}
        value={input}
        placeholder="닉네임 검색"
        onChange={onchangeValue}
      />
      <FontAwesomeIcon
        onClick={() => handleSubmit(input)}
        icon={faMagnifyingGlass}
      />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.form`
  position: absolute;
  top: 0;
  right: 15px;
  width: 220px;
  height: 80%;
  line-height: 55px;

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
    border-bottom: 1px solid #fff;
    opacity: 0.5;
    font-family: Noto Sans KR;
    transition: 0.3s ease;
    :focus {
      opacity: 1;
    }
    ::placeholder {
      color: #fff;
    }
  }
  svg {
    position: absolute;
    font-size: 14px;
    top: 15px;
    right: 35px;
    color: #fff;
    opacity: 0.5;
    transition: 0.3s ease;
    cursor: pointer;
  }
`;
