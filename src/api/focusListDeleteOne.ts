import api from '@api/init';
import {FocusInfoType} from '@src/store/reducer/focus';
import {Alert} from 'react-native';

export const focusListDeleteOne = async (
  data: FocusInfoType & {token: string},
) => {
  const res = await api.post('/focusList/delete', data).catch(e => {
    console.error(e);
  });
  if (res && res.data.code === 200) {
    return true;
  } else {
    Alert.alert('提示', res?.data?.msg || '网络错误');
    return false;
  }
};
