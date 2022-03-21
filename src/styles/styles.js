import styled from '@emotion/styled';

export const ContentBox = styled.div`
  width: 326.66px;
  height: 265.5px;
  position: relative;
  flex: 1;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  margin-right: ${(props) => (props.marginRight ? 0 : '10px')};
`;

export const TeamSelectButton = styled.button`
  border-width: ${(props) => props.borderWidth};
  border-radius: ${(props) => props.borderRadius};
  vertical-align: middle;
  display: inline-block;
  margin-top: 20px;
  width: 100px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-style: solid;
  border-color: #07f;
  background: transparent;
`;

export const ActionButton = styled.button`
  vertical-align: middle;
  display: inline-block;
  margin-top: 20px;
  margin-right: 10px;
  width: 82px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border: 0.7px solid #1f334a;
  border-radius: 15px;
  background: transparent;
  cursor: pointer;
`;
