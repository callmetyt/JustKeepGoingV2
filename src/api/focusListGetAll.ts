import api from '@api/init';
import {FocusInfoType} from '@src/store/reducer/focus';
import {Alert} from 'react-native';

export const focusListGetAll = async (data: {
  token: string;
}): Promise<Array<FocusInfoType>> => {
  const res = await api.post('/focusList/show', data).catch(e => {
    console.error(e);
  });
  if (res && res.data.code === 200) {
    return res.data.list;
  } else {
    Alert.alert('提示', res?.data?.msg || '网络错误');
    return [];
  }
};
