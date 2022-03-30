import styled from '@emotion/styled';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    // history.push(`/${input}`);
    setInput('');
  };

  const onchangeValue = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <input
        type="text"
        input={input}
        placeholder="닉네임 검색"
        onChange={onchangeValue}
      />
      <Link to={`/${input}`}>
        <FontAwesomeIcon onClick={handleSubmit} icon={faMagnifyingGlass} />
      </Link>
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
    :hover {
      opacity: 1;
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
