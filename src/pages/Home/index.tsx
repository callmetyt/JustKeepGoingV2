import React from 'react';
import {View, StyleSheet} from 'react-native';
import InfoArea from './components/InfoArea';
import MainAction from './components/MainAction';

export function Home() {
  return (
    <View style={style.container}>
      <MainAction />
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
