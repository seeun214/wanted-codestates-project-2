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

export const RankerContent = styled.div`
  position: relative;
  display: inline-block;
  flex: 1;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 42px;
  -webkit-box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
`;

export const MatchButton = styled.button`
  cursor: pointer;
  border-width: ${(props) => props.borderWidth};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => (props.matchType === 'solo' ? '#fff' : '#07f')};
  background: ${(props) =>
    props.matchType === 'solo' ? '#07f' : 'transparent'};
  vertical-align: middle;
  display: inline-block;
  margin-top: 20px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-style: solid;
  border-color: #07f;
  :hover {
    cursor: pointer;
    color: ${(props) => '#fff'};
    background: ${(props) => '#07f'};
  }
`;

export const TeamButton = styled.button`
  cursor: pointer;
  border-width: ${(props) => props.borderWidth};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => (props.matchType === 'team' ? '#fff' : '#07f')};
  background: ${(props) =>
    props.matchType === 'team' ? '#07f' : 'transparent'};
  vertical-align: middle;
  display: inline-block;
  margin-top: 20px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-style: solid;
  border-color: #07f;
  :hover {
    cursor: pointer;
    color: ${(props) => '#fff'};
    background: ${(props) => '#07f'};
  }
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
