import {ScreenNavigationProp} from '@src/types';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import InfoArea from './components/InfoArea';
import MainAction from './components/MainAction';

export function Home({navigation}: {navigation: ScreenNavigationProp}) {
  return (
    <View style={style.container}>
      <MainAction navigation={navigation} />
      <InfoArea />
      <Button
        title={'查看专注历史'}
        buttonStyle={style.historyBtn}
        onPress={() => {
          navigation.navigate('History');
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: '100%',
  },
  historyBtn: {
    width: 200,
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Home;
