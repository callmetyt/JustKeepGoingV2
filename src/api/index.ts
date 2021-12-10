import config from '@src/config';
import {FocusInfoType} from '@src/store/reducer/focus';
import axios from 'axios';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: config.serverAddress,
  timeout: 3000,
  timeoutErrorMessage: '网络错误',
});

const focusListAdd = async (data: FocusInfoType) => {
  const res = await api.post('/focusList/add', data).catch(e => {
    console.error(e);
  });
  console.log(res);
  if (res && res.data.code === 200) {
    Alert.alert('提示', '添加成功！');
  } else {
    Alert.alert('提示', res?.data?.msg);
  }
};

export default {
  focusListAdd,
};
