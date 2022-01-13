import {focusListAdd} from '@src/api/focusListAdd';
import {useAppSelector} from '@src/hooks';
import {ScreenNavigationProp} from '@src/types';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

export const Focus = ({navigation}: {navigation: ScreenNavigationProp}) => {
  // 是否点击关闭按钮
  let clickCloseBtn = false;

  useEffect(() => {
    // 设置header
    navigation.setOptions({
      headerBackVisible: false,
    });
    // 监听后退按钮
    navigation.addListener('beforeRemove', e => {
      if (!clickCloseBtn) {
        // 拦截非结束按钮
        e.preventDefault();
        Alert.alert('提示', '是否撤销本次专注?', [
          {
            text: '是',
            onPress: () => {
              navigation.dispatch(e.data.action);
            },
          },
          {
            text: '否',
          },
        ]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const focusData = useAppSelector(state => state.focus);
  const usersToken = useAppSelector(state => state.users.token);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const handleEndFocus = async () => {
    setLoadingBtn(true);

    await focusListAdd({
      ...focusData,
      endDate: Date.now(), // dispatch执行后这里的focusData并未修改，还是原来的
      token: usersToken,
    });
    setLoadingBtn(false);

    clickCloseBtn = true;
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
