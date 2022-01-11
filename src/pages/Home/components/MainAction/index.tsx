import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import Ripple from './ripple';
import {ScreenNavigationProp} from '@src/types';
import {useAppSelector, useAppDispatch} from '@src/hooks';
import hasVal from '@utils/hasVal';
import {updateFocusInfo} from '@src/store/reducer/focus';

interface MainActionProps {
  navigation: ScreenNavigationProp;
}

export const MainAction = ({navigation}: MainActionProps) => {
  const focusData = useAppSelector(state => state.focus);
  const dispatch = useAppDispatch();

  const handleFoucsBtn = () => {
    if (hasVal(focusData.aim)) {
      // 设置专注开始时间
      dispatch(
        updateFocusInfo({
          ...focusData,
          startDate: Date.now(),
        }),
      );
      navigation.navigate('Focus');
    } else {
      Alert.alert('', '专注目的未填写!');
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
    backgroundColor: '#2ed573',
  },
  focusText: {
    fontSize: 20,
  },
});

export default MainAction;
