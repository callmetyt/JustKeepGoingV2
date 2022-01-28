import api from '@api/init';
import {UsersInfoType} from '@store/reducer/users';
import {Alert} from 'react-native';

export const getUsersInfo = async (data: {
  token: string;
}): Promise<false | UsersInfoType> => {
  const res = await api.post('/users/getUserInfo', data).catch(e => {
    console.error(e);
  });
  if (res && res.data.code === 200) {
    return {
      ...res.data,
    };
  } else {
    Alert.alert('提示', res?.data?.msg || '网络错误');
    return false;
  }
};
