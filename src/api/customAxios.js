import axios from 'axios';

export const PROXY = 'https://wanted-simple-proxy.herokuapp.com';

const customAxios = axios.create({
  baseURL:
    'https://wanted-simple-proxy.herokuapp.com/https://api.nexon.co.kr/kart/v1.0', // 기본 서버 주소 입력
  headers: {
    Authorization: process.env.REACT_APP_NEXON_API_KEY,
  },
});

export default customAxios;
