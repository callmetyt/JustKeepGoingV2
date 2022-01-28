import {useAppSelector} from '@src/hooks';
import {ScreenNavigationProp} from '@src/types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

interface UserAvatarProps {
  navigation: ScreenNavigationProp;
}

export default function UserAvatar({navigation}: UserAvatarProps) {
  const usersName = useAppSelector(state => state.users.userName);

  const handleAvatarClick = () => {
    navigation.navigate('User');
  };

  return (
    <View style={style.container}>
      <Avatar
        rounded
        source={require('@src/assets/user.png')}
        onPress={() => {
          handleAvatarClick();
        }}
      />
      <Text style={style.text}>{usersName}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    fontSize: 16,
  },
});
