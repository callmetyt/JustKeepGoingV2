import {focusListAdd} from '@src/api/focusListAdd';
import {useAppSelector} from '@src/hooks';
import {ScreenNavigationProp} from '@src/types';
import React, {useEffect, useState} from 'react';
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
  const [loadingBtn, setLoadingBtn] = useState(false);

  const handleEndFocus = async () => {
    setLoadingBtn(true);

    await focusListAdd({
      ...focusData,
      endDate: Date.now(), // dispatch执行后这里的focusData并未修改，还是原来的
    });
    setLoadingBtn(false);

    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <Button
        title={'结束专注'}
        onPress={() => {
          handleEndFocus();
        }}
        buttonStyle={style.btn}
        titleStyle={style.btnText}
        loading={loadingBtn}
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
  btn: {
    borderRadius: 10,
    height: 75,
    width: 150,
    backgroundColor: '#ff4757',
  },
  btnText: {
    fontSize: 20,
  },
});

export default Focus;
