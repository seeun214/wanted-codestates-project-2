import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (input) => {
    if (input.length === 0) {
      alert('검색어를 입력해주세요');
    } else {
      navigate(`/user/${input}`);
      setInput('');
    }
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
    <SerchForm>
      <Label>유저</Label>
      <input
        type="text"
        onChange={onchangeValue}
        onKeyPress={onKeyPress}
        value={input}
        placeholder="카트라이더 닉네임을 입력"
      />
      <Button onClick={() => handleSubmit(input)}>
        <ButtonImg
          alt="Tmi"
          src="https://tmi.nexon.com/img/assets/tmi_logo_default.svg"
        ></ButtonImg>
      </Button>
    </SerchForm>
  );
};

export default SearchForm;
const SerchForm = styled.div`
  position: relative;
  width: 670px;
  height: 67px;
  background: transparent;
  border: 4px solid #fff;
  border-radius: 33.5px;
  margin: 50px auto;
  input {
    position: absolute;
    top: 7px;
    left: 105px;
    width: 600px;
    height: 44px;
    line-height: 44px;
    outline: 0;
    border: 0;
    display: block;
    font-size: 24px;
    font-weight: 400;
    padding: 0 25px;
    color: #fff;
    background: transparent;
    opacity: 0.5;
    :focus {
      opacity: 1;
    }
    ::placeholder {
      color: #fff;
    }
  }
`;

const Label = styled.div`
  position: absolute;
  display: block;
  box-sizing: border-box;
  top: 7px;
  width: 100px;
  height: 44px;
  line-height: 44px;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  background: transparent;
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 15px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fff;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 100px;
  top: 7px;
  right: 0;
  height: 44px;
  line-height: 44px;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  background-color: transparent;
  border: none;
`;

const ButtonImg = styled.img``;
