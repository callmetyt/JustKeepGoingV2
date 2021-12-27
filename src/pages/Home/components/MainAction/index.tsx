import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useAppSelector} from '@src/hooks';
import Ripple from './ripple';
import api from '@api/index';
import {ScreenNavigationProp} from '@src/types';

interface MainActionProps {
  navigation: ScreenNavigationProp;
}

export const MainAction = ({navigation}: MainActionProps) => {
  const focusData = useAppSelector(state => state);
  const handleFoucsBtn = async () => {
    const apiRes = await api.focusListAdd(focusData);
    if (apiRes) {
      navigation.navigate('Focus');
    }
  };

  return (
    <View style={style.container}>
      <Button
        title="开始专注"
        onPress={() => {
          handleFoucsBtn();
        }}
        buttonStyle={style.focusBtn}
        titleStyle={style.focusText}
      />

      <Ripple />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  focusBtn: {
    borderRadius: 10,
    padding: 20,
  },
  focusText: {
    fontSize: 20,
  },
});

export default MainAction;
