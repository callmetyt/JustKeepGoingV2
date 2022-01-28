import {useAppSelector} from '@src/hooks';
import {ScreenNavigationProp} from '@src/types';
import setTokenStorage from '@utils/setTokenStorage';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button, Card} from 'react-native-elements';

interface UserProps {
  navigation: ScreenNavigationProp;
}

export function User({navigation}: UserProps) {
  const usersName = useAppSelector(state => state.users.userName);

  const handleLogoutClick = async () => {
    await setTokenStorage('');
    navigation.replace('Login');
  };

  return (
    <View>
      <Card containerStyle={style.infoContainer}>
        <Card.Title>个人卡片</Card.Title>
        <View style={style.infoLine1}>
          <Avatar size={50} rounded source={require('@src/assets/user.png')} />
          <Text style={style.userName}>{usersName}</Text>
        </View>
      </Card>
      <Button
        containerStyle={style.logoutBtnContainer}
        buttonStyle={style.logoutBtn}
        onPress={() => {
          handleLogoutClick();
        }}
        title="注销"
      />
    </View>
  );
}

const style = StyleSheet.create({
  infoContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    width: '80%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  infoLine1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 20,
    fontSize: 20,
  },
  logoutBtnContainer: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
  },
  logoutBtn: {
    backgroundColor: '#FF6600',
  },
});

export default User;
