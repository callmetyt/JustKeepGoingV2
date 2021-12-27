import {ScreenNavigationProp} from '@src/types';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import InfoArea from './components/InfoArea';
import MainAction from './components/MainAction';

export function Home({navigation}: {navigation: ScreenNavigationProp}) {
  return (
    <View style={style.container}>
      <MainAction navigation={navigation} />
      <InfoArea />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default Home;
