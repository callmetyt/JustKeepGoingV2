import api from '@api/init';
import {UsersInfoType} from '@store/reducer/users';
import {usersLoginType} from '@src/types';
import {Alert} from 'react-native';

export const usersLogin = async (
  data: usersLoginType,
): Promise<false | UsersInfoType> => {
  const res = await api.post('/users/login', data).catch(e => {
    console.error(e);
  });
  if (res && res.data.code === 200 && res.data.token) {
    return {
      ...res.data,
    };
  } else {
    Alert.alert('提示', res?.data?.msg || '网络错误');
    return false;
  }
};
