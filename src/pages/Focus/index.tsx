import {focusListAdd} from '@src/api/focusListAdd';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {addInfo} from '@src/store/reducer/focus';
import {ScreenNavigationProp} from '@src/types';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

export const Focus = ({navigation}: {navigation: ScreenNavigationProp}) => {
  // 设置header
  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
    });
  }, [navigation]);

  const focusData = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const handleEndFocus = async () => {
    // 存储结束时间
    dispatch(
      addInfo({
        ...focusData,
        endDate: Date.now(),
      }),
    );

    await focusListAdd(focusData);

    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <Button
        title={'结束专注'}
        onPress={() => {
          handleEndFocus();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Focus;
