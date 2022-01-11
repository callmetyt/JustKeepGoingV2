import api from '@api/init';
import {FocusInfoType} from '@src/store/reducer/focus';
import {Alert} from 'react-native';

export const focusListAdd = async (data: FocusInfoType & {token: string}) => {
  const res = await api.post('/focusList/add', data).catch(e => {
    console.error(e);
  });
  if (res && res.data.code === 200) {
    Alert.alert('提示', '保存专注信息成功！');
    return true;
  } else {
    Alert.alert('提示', res?.data?.msg || '网络错误');
    return false;
  }
};
