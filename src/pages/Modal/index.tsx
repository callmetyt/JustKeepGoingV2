import {ScreenNavigationProp, ScreenRouteProp} from '@src/types';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Modal({
  navigation,
  route,
}: {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}) {
  const [dotString, setDotString] = useState('');
  const timeMS = 500;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dotString.length >= 3) {
        setDotString('');
      } else {
        setDotString(pre => pre.concat('.'));
      }
    }, timeMS);
    return () => {
      clearTimeout(timer);
    };
  }, [dotString]);

  return (
    <View style={style.container}>
      <Text style={style.font}>加载中{dotString}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    opacity: 0.65,
  },
  font: {
    fontSize: 30,
    color: '#fff',
    opacity: 1,
  },
});
