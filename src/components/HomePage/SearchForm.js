import styled from '@emotion/styled';
import React from 'react';

const SearchForm = () => {
  return (
    <SerchForm>
      <Label>유저</Label>
      <NickInput type="text" placeholder="카트라이더 닉네임을 입력"></NickInput>
      <Button>
        <ButtonImg></ButtonImg>
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

const NickInput = styled.input`
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
  opacity: 1;
  transition: opacity 0.5s;
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
