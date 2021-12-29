import config from '@src/config';
import axios from 'axios';

const api = axios.create({
  baseURL: config.serverAddress,
  timeout: 3000,
  timeoutErrorMessage: '网络错误',
});

export default api;
