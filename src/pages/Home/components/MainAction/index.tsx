import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import Ripple from './ripple';

export const MainAction = () => {
  const focusData = useSelector((state: RootState) => state);
  const handleFoucsBtn = () => {
    console.log('click foucs btn!');
    console.log(focusData);
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
