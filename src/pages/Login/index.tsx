import {usersLogin} from '@api/usersLogin';
import {useAppDispatch} from '@src/hooks';
import {updateUsersToken} from '@src/store/reducer/users';
import {ScreenNavigationProp} from '@src/types';
import React, {createRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

export default function Login({
  navigation,
}: {
  navigation: ScreenNavigationProp;
}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userNameInput = createRef<TextInput>();
  const passwordInput = createRef<TextInput>();
  const dispatch = useAppDispatch();

  const handleLoginBtn = async () => {
    if (!userName) {
      (userNameInput.current as any).shake();
    } else if (!password) {
      (passwordInput.current as any).shake();
    } else {
      const loginRes = await usersLogin({userName, password});
      if (loginRes) {
        dispatch(
          updateUsersToken({
            token: loginRes,
          }),
        );
        navigation.replace('HomeTab');
      }
    }
  };

  return (
    <View>
      <View style={style.loginContainer}>
        <Input
          autoCompleteType="username"
          placeholder="用户名"
          leftIcon={{type: 'font-awesome-5', name: 'user'}}
          onChangeText={value => {
            setUserName(value);
          }}
          ref={userNameInput}
        />
        <Input
          autoCompleteType="password"
          placeholder="密码"
          leftIcon={{type: 'font-awesome-5', name: 'lock'}}
          onChangeText={value => {
            setPassword(value);
          }}
          ref={passwordInput}
          secureTextEntry={true}
        />
        <Button
          title="登录"
          buttonStyle={style.btn}
          onPress={() => {
            handleLoginBtn();
          }}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    marginTop: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '75%',
  },
  btn: {
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
